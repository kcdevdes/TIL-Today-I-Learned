package com.kcdevdes.webservice.springboot.web;

import com.kcdevdes.webservice.springboot.web.dto.HelloResponseDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController // 컨트롤러를 JSON 반환하는 컨트롤러로 제작함.
public class HelloController {
    @GetMapping("/hello") // HTTP Method Get 요청 API 생성
    public String hello() {
        return "hello world!";
    }

    @GetMapping("/hello/dto")
    // RequestParam : 외부 접속에서 파라미터로 넘긴 값을 가져오는 어노테이션
    public HelloResponseDTO helloDto(@RequestParam("name") String name, @RequestParam("amount") int amount) {
        return new HelloResponseDTO(name, amount);
    }
}
