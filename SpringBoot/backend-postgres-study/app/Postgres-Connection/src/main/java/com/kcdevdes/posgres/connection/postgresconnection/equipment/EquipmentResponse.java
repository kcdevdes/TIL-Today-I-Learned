package com.kcdevdes.posgres.connection.postgresconnection.equipment;

import java.time.OffsetDateTime;

public record EquipmentResponse(
        Long equipmentId,
        String equipmentName,
        String processType,
        RunningStatus status,
        OffsetDateTime createdAt
) {}