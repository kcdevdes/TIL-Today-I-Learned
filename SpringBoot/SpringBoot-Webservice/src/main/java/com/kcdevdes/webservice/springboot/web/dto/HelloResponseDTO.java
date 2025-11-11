package com.kcdevdes.webservice.springboot.web.dto;


import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter // 선언된 모든 필드에 대한 getter를 생성
@RequiredArgsConstructor // 선언된 모든 final필드에 대한 생성자 자동 생성 (final이 아님 생성되지 않음)
public class HelloResponseDTO {
    private final String name;
    private final int amount;
}
