DROP TABLE IF EXISTS equipment;
DROP TYPE  IF EXISTS running_status;

CREATE TYPE running_status AS ENUM ('RUNNING', 'IDLE', 'DOWN');

CREATE TABLE equipment (
    equipment_id BIGSERIAL PRIMARY KEY,
    equipment_name VARCHAR(100) NOT NULL,
    process_type VARCHAR(50) NOT NULL,
    status running_status NOT NULL DEFAULT 'IDLE',
    created_at TIMESTAMPTZ DEFAULT clock_timestamp()
);

INSERT INTO equipment (equipment_name, process_type, status)
VALUES ('Mixer-01', 'Mixing', 'RUNNING');
INSERT INTO equipment (equipment_name, process_type, status)
VALUES ('Coater-01', 'Coating', 'IDLE');
INSERT INTO equipment (equipment_name, process_type, status)
VALUES ('Press-01', 'Pressing', 'DOWN');

SELECT * FROM equipment;
