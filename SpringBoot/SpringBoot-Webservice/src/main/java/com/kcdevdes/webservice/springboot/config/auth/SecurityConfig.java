package com.kcdevdes.webservice.springboot.config.auth;

import com.kcdevdes.webservice.springboot.domain.user.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@RequiredArgsConstructor
@EnableWebSecurity // Spring Security 설정 활성화
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final CustomOAuth2UserService service;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .headers().frameOptions().disable()// 여기까지 h2-console 사용을 위해 비활성화
                .and()
                .authorizeRequests() // URL별 권한 관리를 위한 옵션 시작점 (antMatcher를 위한 필수)
                .antMatchers("/", "/css/**", "/images/**", "/js/**", "/h2-console/**")
                .permitAll()
                .antMatchers("/api/v1/**")// 권한 관리 대상을 지정하는 옵션, permitAll()은 전체 접근 가능.
                .hasRole(Role.USER.name()) // /api/v1는 USER권한 사람만
                .anyRequest().authenticated() // 나머지는 모두 인증된 사람들만
                .and()
                .logout() // 로그아웃 설정 진입점
                .logoutSuccessUrl("/") // 성공시 /로 리다이렉트
                .and()
                .oauth2Login()
                .userInfoEndpoint() // OAuth2 로그인 성공 이후 사용자 정보를 가져올 때의 설정들 담당
                .userService(service); // 소셜 로그인 성공 시 UserService 인터페이스 구현체로 후속 조치 등록
    }
}
