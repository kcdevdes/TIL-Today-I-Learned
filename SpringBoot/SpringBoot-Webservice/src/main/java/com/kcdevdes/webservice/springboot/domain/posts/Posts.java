package com.kcdevdes.webservice.springboot.domain.posts;

import com.kcdevdes.webservice.springboot.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor // 기본 생성자 자동 추가, Posts()로도 객체 생성 가능
@Entity // 테이블과 링크될 클래스임을 표기 (기본값으로 카멜케이스 이름을 언더스코어 네이밍으로 이름을 지칭)
public class Posts extends BaseTimeEntity {

    @Id // PK 필드
    @GeneratedValue(strategy = GenerationType.IDENTITY) // PK 생성 규칙, IDENTITY로 인하여 auto_increment가 됨
    private Long id;

    @Column(length = 512, nullable = false) // 기본적으로 모든 필드는 칼럼이 되지만, 기본값 이외의 옵션을 줘야할 때
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    private String author;

    @Builder // 해당 클래스를 빌더 클래스로 만들 수 있음. 생성자 상단에 선언 시 생성자에 포함된 필드만 가능
    public Posts(String title, String content, String author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    /**
     * 데이터를 업데이트하는 기능을 포함한다
     * JPA의 엔티티 매니저가 활성화된 상태 하에 트랜잭션 안에서 DB에서 데이터를 가져오면 이는 영속성 컨텍스트가 유지된 상태
     * 즉, 해당 데이터의 값을 변경하면, 트랜잭션이 끝나는 시점에서 해당 테이블에 변경분을 자동으로 반영 (업데이트)
     * Update 쿼리를 날리지 않아도 된다. 이를 Dirty Checking 이라고 한다.
     * @param title
     * @param content
     */
    public void update(String title, String content) {
        this.title = title;
        this.content = content;
    }
}

/***
 * 자바빈 규약에선 getter/setter를 생성하지만, Entity Class에선 Setter 메소드를 절대 생성하지 않는다.
 * 변경이 필요하면 명확히 목적과 의도를 나타낼 수 있는 메소드만 추가해야한다.
 */

