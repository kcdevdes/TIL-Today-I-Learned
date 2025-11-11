package com.kcdevdes.webservice.springboot.domain.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * Spring Security에서는 권한 코드에 항상 ROLE_이 앞에 있어야만 함.
 */
@Getter
@RequiredArgsConstructor
public enum Role {

    GUEST("ROLE_GUEST", "고객"),
    USER("ROLE_USER", "일반 사용자");

    private final String key;
    private final String title;
}