package com.kcdevdes.posgres.connection.postgresconnection.equipment;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.time.OffsetDateTime;
import java.util.List;

@Repository
public class EquipmentRepository {
    private final JdbcClient jdbcClient;

    public EquipmentRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    public List<EquipmentResponse> findAll() {
        return jdbcClient.sql(
                """
                    SELECT equipment_id, equipment_name, process_type, status, created_at
                    FROM equipment
                    ORDER BY equipment_id ASC 
                """)
                .query((rs, rowNum) -> new EquipmentResponse(
                        rs.getLong("equipment_id"),
                        rs.getString("equipment_name"),
                        rs.getString("process_type"),
                        RunningStatus.valueOf(rs.getString("status")),
                        rs.getObject("created_at", OffsetDateTime.class)
                ))
                .list();
    }
}

