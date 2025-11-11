package com.kcdevdes.webservice.springboot.web.dto;

import org.junit.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class HelloResponseDTOTest {
    @Test
    public void lookbok_should_have_same_properties() {
        // given
        String name = "test";
        int amount = 1000;

        // when
        HelloResponseDTO hrDto = new HelloResponseDTO(name, amount);

        // then
        assertThat(hrDto.getName()).isEqualTo(name);
        assertThat(hrDto.getAmount()).isEqualTo(amount);
    }
}
