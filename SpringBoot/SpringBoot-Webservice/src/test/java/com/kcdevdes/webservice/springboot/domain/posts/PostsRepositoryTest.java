package com.kcdevdes.webservice.springboot.domain.posts;

import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest // 별다른 설정 없다면 H2 DB를 자동으로 실행하여 줌
public class PostsRepositoryTest {

    @Autowired
    PostsRepository postsRepository;

    @After // 단위 테스트가 끝날 때 마다 수행되는 메소드
    public void cleanup() {
        postsRepository.deleteAll(); // 다음 테스트 수행 전에 미리 모든 데이터를 지움
    }

    @Test
    public void fetch_all_contents() {

        // given
        String title = "Test Title";
        String content = "Test Content";

        postsRepository.save(Posts.builder() // insert, update 쿼리를 시행함 (id값이 있다면 update, 없다면 insert)
                .title(title)
                .content(content)
                .author("kcdevdes@gmail.com")
                .build()
        );

        // when
        List<Posts> postsList = postsRepository.findAll();

        // then
        Posts posts = postsList.get(0);
        assertThat(posts.getTitle()).isEqualTo(title);
        assertThat(posts.getContent()).isEqualTo(content);
    }

    @Test
    public void register_basetime() {
        // given
        LocalDateTime now = LocalDateTime.of(2019, 6, 4, 0, 0 , 0);
        postsRepository.save(Posts.builder()
                .title("title")
                .content("content")
                .author("author")
                .build()
        );

        // when
        List<Posts> postsList = postsRepository.findAll();

        // then
        Posts posts = postsList.get(0);

        System.out.println(">>>>>>>>>> createDate = " + posts.getCreatedDate() + ", modifiedDate = " + posts.getModifiedDate());
        assertThat(posts.getCreatedDate()).isAfter(now);
        assertThat(posts.getModifiedDate()).isAfter(now);
    }
}
