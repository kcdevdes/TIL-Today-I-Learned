package com.kcdevdes.posgres.connection.postgresconnection.equipment;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

@SpringBootTest
public class EquipmentRepositoryTest {
    @Autowired
    EquipmentRepository equipmentRepository;

    @Test
    void findAll_returnsAllEquipment() {
        List<EquipmentResponse> equipment = equipmentRepository.findAll();

        assertThat(equipment).hasSize(5);
        assertThat(equipment.get(0).equipmentName()).isEqualTo("Mixer-01");
    }
}
