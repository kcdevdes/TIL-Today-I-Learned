DROP TABLE IF EXISTS process_history;
DROP TABLE IF EXISTS lot;
DROP TABLE IF EXISTS equipment;
DROP TYPE IF EXISTS running_status;

CREATE TYPE running_status AS ENUM ('RUNNING', 'IDLE', 'DOWN');

CREATE TABLE equipment (
    equipment_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    equipment_name VARCHAR(100) NOT NULL,
    process_type VARCHAR(50) NOT NULL,
    status running_status NOT NULL DEFAULT 'IDLE',
    created_at TIMESTAMPTZ DEFAULT clock_timestamp()
);

CREATE TABLE lot (
    lot_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    lot_number VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT clock_timestamp()
);

CREATE TABLE process_history (
    history_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    lot_id BIGINT NOT NULL REFERENCES lot(lot_id),
    equipment_id BIGINT NOT NULL REFERENCES equipment(equipment_id),
    processed_at TIMESTAMPTZ NOT NULL
);

INSERT INTO equipment (equipment_name, process_type, status)
VALUES ('Mixer-01',  'Mixing',   'RUNNING'),
       ('Coater-01', 'Coating',  'IDLE'),
       ('Press-01',  'Pressing', 'DOWN');

INSERT INTO lot (lot_number)
VALUES ('LOT-001'),
       ('LOT-002'),
       ('LOT-003');

-- lot_id / equipment_id는 위 INSERT 순서대로 1, 2, 3이 부여된다고 가정
-- (1 = Mixer-01, 2 = Coater-01, 3 = Press-01)
-- LOT-001은 일부러 시간 순서와 다르게 입력함 → ORDER BY 검증용
INSERT INTO process_history (lot_id, equipment_id, processed_at)
VALUES (1, 1, '2026-10-28 14:00:00+09'),  -- LOT-001 Mixer (재작업)
       (1, 2, '2026-10-28 10:00:00+09'),  -- LOT-001 Coater
       (1, 1, '2026-10-28 08:00:00+09'),  -- LOT-001 Mixer
       (2, 1, '2026-10-28 09:00:00+09'),  -- LOT-002 Mixer
       (2, 2, '2026-10-28 12:00:00+09'),  -- LOT-002 Coater
       (3, 1, '2026-10-28 10:30:00+09'),  -- LOT-003 Mixer
       (3, 2, '2026-10-28 13:00:00+09'),  -- LOT-003 Coater
       (3, 1, '2026-10-28 16:00:00+09');  -- LOT-003 Mixer (재작업)
-- Press-01(3)은 이력 없음 → 문제 3의 LEFT JOIN 검증용

-- ===== 문제 3 검증용 추가 데이터 =====
-- 4 = Assembly-01, 5 = Notcher-01 (위 3개 설비 다음 순서로 id 부여된다고 가정)
-- 일부러 "입력 순서 ≠ 이름 순서"로 구성 → 이름 정렬이 진짜 동작하는지 확인
INSERT INTO equipment (equipment_name, process_type, status)
VALUES ('Assembly-01', 'Assembly', 'RUNNING'),  -- Coater-01과 건수 동점(3), 이름은 더 앞
       ('Notcher-01',  'Notching', 'IDLE');     -- Press-01과 건수 동점(0), 이름은 더 앞

INSERT INTO process_history (lot_id, equipment_id, processed_at)
VALUES (1, 4, '2026-10-28 15:00:00+09'),  -- LOT-001 Assembly
       (2, 4, '2026-10-28 13:00:00+09'),  -- LOT-002 Assembly
       (3, 4, '2026-10-28 17:00:00+09');  -- LOT-003 Assembly
-- Notcher-01(5), Press-01(3)은 이력 없음

SELECT e.equipment_name, COUNT(p.equipment_id) AS total_processed
FROM equipment e
LEFT JOIN process_history p ON e.equipment_id = p.equipment_id
GROUP BY e.equipment_name
ORDER BY total_processed DESC, equipment_name ASC;