/**
 * User Entity와 비슷하나, 오로지 인증된 사용자의 정보만을 필요로 하기에 생성
 *
 * User 클래스로 new User()를 실행했다면, Serializable 클래스가 아니란 오류를 가지게 됨.
 * User class는 @Entity를 가지기에 언제든지 다른 Entity와 관계가 형성될 가능성이 있음.
 * 하지만 직렬화 대상에 자식들이 포함되니 성능 이슈, 부작용이 발생할 수 있음.
 * 직렬화 기능을 가진 세션 DTO를 새로 생성하는 것이 유지보수 때 도움이 됨.
 */

package com.kcdevdes.webservice.springboot.config.auth.dto;

import com.kcdevdes.webservice.springboot.domain.user.User;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class SessionUser implements Serializable {

    private String name;
    private String email;
    private String picture;

    public SessionUser(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
        this.picture = user.getPicture();
    }
}
