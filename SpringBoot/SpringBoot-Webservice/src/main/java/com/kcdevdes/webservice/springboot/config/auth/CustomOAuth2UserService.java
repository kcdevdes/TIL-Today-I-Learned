/**
 * Google 로그인 이후 가져온 사용자의 정보 (email, name, picture)들을 기반으로 가입 및 정보 수정, 세션 저장 등의
 * 기능을 수행함.
 */

package com.kcdevdes.webservice.springboot.config.auth;

import com.kcdevdes.webservice.springboot.config.auth.dto.OAuthAttributes;
import com.kcdevdes.webservice.springboot.config.auth.dto.SessionUser;
import com.kcdevdes.webservice.springboot.domain.user.User;
import com.kcdevdes.webservice.springboot.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.Collections;

@RequiredArgsConstructor
@Service
public class CustomOAuth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private final UserRepository repository;
    private final HttpSession session;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService<OAuth2UserRequest, OAuth2User> delegate = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(userRequest);

        // 현재 로그인 진행 중인 서비스를 구분하는 코드 (Google, Naver)
        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        // OAuth2 로그인 진행 시 키가 되는 필드값(PK). 구글의 경우 'sub'
        String userNameAttributeName = userRequest.getClientRegistration().getProviderDetails()
                .getUserInfoEndpoint().getUserNameAttributeName();

        // OAuth2UserService를 통해 가져온 OAuth2User의 attribute를 담는 클래스
        OAuthAttributes attributes = OAuthAttributes.of(registrationId, userNameAttributeName, oAuth2User.getAttributes());


        User user = saveOrUpdate(attributes);
        // 세션에 사용자 정보를 저장하기 위한 DTO 클래스. 다른 클래스에서 저 attribute key로 user값을 가져올 수 있음
        session.setAttribute("user", new SessionUser(user));

        return new DefaultOAuth2User(Collections.singleton(
                    new SimpleGrantedAuthority(user.getRoleKey())),
                    attributes.getAttributes(),
                    attributes.getNameAttributeKey()
                );
    }

    /**
     * Google 사용자 정보가 업데이트 되었을 때 User 엔티티에 이를 반영함
     * @param attributes
     * @return
     */
    private User saveOrUpdate(OAuthAttributes attributes) {
        User user = repository.findByEmail(attributes.getEmail())
                .map(entity -> entity.update(attributes.getName(), attributes.getPicture()))
                .orElse(attributes.toEntity());

        return repository.save(user);
    }
}
