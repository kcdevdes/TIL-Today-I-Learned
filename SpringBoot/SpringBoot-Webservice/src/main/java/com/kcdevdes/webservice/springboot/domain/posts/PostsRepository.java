package com.kcdevdes.webservice.springboot.domain.posts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

// DB Layer 접근자
// 기본적인 CRUD 메소드가 자동으로 생성됨.
// 단, 기본 Entity클래스와 같은 도메인, 패키지 상에 위치하는 것을 적극적으로 추천함. 서로 상호의존적이기 때문.
public interface PostsRepository extends JpaRepository<Posts, Long> {

    @Query("SELECT p FROM Posts p ORDER BY p.id DESC")
    List<Posts> findAllDesc();
}
