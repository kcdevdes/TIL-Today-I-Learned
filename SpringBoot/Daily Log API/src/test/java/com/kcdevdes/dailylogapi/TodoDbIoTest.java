package com.kcdevdes.dailylogapi;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.resttestclient.TestRestTemplate;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.*;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TodoDbIoTest {

    @Autowired
    private TestRestTemplate rest;

    @Test
    void create_then_get_should_read_from_db() {
        // create
        String body = """
            {"title":"first todo"}
        """;

        ResponseEntity<String> created = rest.postForEntity(
                "/api/todos",
                new HttpEntity<>(body, jsonHeaders()),
                String.class
        );

        assertThat(created.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(created.getBody()).contains("\"id\":");
        assertThat(created.getBody()).contains("first todo");

        // naive id extraction for quick test (실무는 DTO로 받으세요)
        String response = created.getBody();
        long id = Long.parseLong(response.replaceAll(".*\"id\":(\\d+).*", "$1"));

        // get
        ResponseEntity<String> got = rest.getForEntity("/api/todos/" + id, String.class);

        assertThat(got.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(got.getBody()).contains("\"id\":" + id);
        assertThat(got.getBody()).contains("first todo");
    }

    private HttpHeaders jsonHeaders() {
        HttpHeaders h = new HttpHeaders();
        h.setContentType(MediaType.APPLICATION_JSON);
        return h;
    }
}