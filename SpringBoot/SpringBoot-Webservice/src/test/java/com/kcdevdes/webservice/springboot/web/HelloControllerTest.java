package com.kcdevdes.webservice.springboot.web;

import com.kcdevdes.webservice.springboot.config.auth.SecurityConfig;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.is;

// JUnit 내장 실행자 이외의 실행자를 실행, SpringRunner를 사용함. SpringBootTest, JUnit이 연결됨.
@RunWith(SpringRunner.class)
// Spring MVC에 집중할 수 있게 하는 어노테이션, Controller, ControllerAdvice를 사용하게 함 (Service, Component, Repository는 불가)
@WebMvcTest(controllers = HelloController.class, excludeFilters = {
        @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = SecurityConfig.class)
})
//@SpringBootTest(classes = Application.class)
public class HelloControllerTest {

    @Autowired // Spring이 관리하는 빈을 주입받음
    private MockMvc mvc; // 웹 API 테스트 용 객체

    @WithMockUser(roles="USER")
    @Test
    public void should_return_hello_world() throws Exception {
        String expected = "hello world!";

        mvc.perform(get("/hello"))
                .andExpect(status().isOk())
                .andExpect(content().string(expected));
    }

    @WithMockUser(roles="USER")
    @Test
    public void should_return_helloDto() throws Exception {
        String name = "hello";
        int amount = 1000;

        mvc.perform(get("/hello/dto").param("name", name).param("amount", String.valueOf(amount))) // param은 오직 String만 받음
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is(name))) // JSON 응답값을 필드별로 검증할 수 있음
                .andExpect(jsonPath("$.amount", is(amount))); // $를 기준으로 필드명을 명시
    }
}
