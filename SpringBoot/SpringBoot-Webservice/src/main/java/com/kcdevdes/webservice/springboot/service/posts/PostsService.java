package com.kcdevdes.webservice.springboot.service.posts;

import com.kcdevdes.webservice.springboot.domain.posts.Posts;
import com.kcdevdes.webservice.springboot.domain.posts.PostsRepository;
import com.kcdevdes.webservice.springboot.web.dto.PostsListResponseDTO;
import com.kcdevdes.webservice.springboot.web.dto.PostsResponseDTO;
import com.kcdevdes.webservice.springboot.web.dto.PostsSaveRequestDTO;
import com.kcdevdes.webservice.springboot.web.dto.PostsUpdateRequestDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PostsService {
    private final PostsRepository postsRepository;

    @Transactional
    public Long save(PostsSaveRequestDTO requestDTO) {
        return postsRepository.save(requestDTO.toEntity()).getId();
    }

    @Transactional
    public Long update(Long id, PostsUpdateRequestDTO requestDTO) {
        Posts posts = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다. id=" + id));

        posts.update(requestDTO.getTitle(), requestDTO.getContent());

        return id;
    }

    public PostsResponseDTO findById(Long id) {
        Posts entity = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다. id=" + id));

        return new PostsResponseDTO(entity);
    }

    @Transactional(readOnly = true) // Transaction 범위를 유지. 조회에 사용 시 등록, 수정, 삭제 기능이 없어지기에 속도 개선
    public List<PostsListResponseDTO> findAllDesc() {
        return postsRepository.findAllDesc().stream()
                .map(PostsListResponseDTO::new) // posts -> new PostsListResponseDTO(posts)
                .collect(Collectors.toList());
    }

    @Transactional
    public void delete(Long id) {
        Posts posts = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다. id=" + id));

        postsRepository.delete(posts);
    }
}
