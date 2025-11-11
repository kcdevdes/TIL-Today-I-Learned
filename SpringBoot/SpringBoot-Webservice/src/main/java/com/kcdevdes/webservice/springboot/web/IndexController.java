package com.kcdevdes.webservice.springboot.web;

import com.kcdevdes.webservice.springboot.config.auth.LoginUser;
import com.kcdevdes.webservice.springboot.config.auth.dto.SessionUser;
import com.kcdevdes.webservice.springboot.service.posts.PostsService;
import com.kcdevdes.webservice.springboot.web.dto.PostsResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@Controller
public class IndexController {

    private final PostsService postsService;

    @GetMapping("/")
    public String index(Model model, @LoginUser SessionUser user) {
        model.addAttribute("posts", postsService.findAllDesc());
        // CustomOAuth2UserService 로그인 성공 시
        // 세션에 SessionUser 를 저장하도록 구성.
        if (user != null) {
            model.addAttribute("userName", user.getName());
        }
        return "index";
    }

    @GetMapping("/posts/save")
    public String postsSave() {
        return "posts-save";
    }

    @GetMapping("/posts/update/{id}")
    public String postsUpdate(@PathVariable Long id, Model model) {
        PostsResponseDTO dto = postsService.findById(id);
        model.addAttribute("post", dto);

        return "posts-update";
    }

    @GetMapping("/profile")
    public String profile() {
        return "profile";
    }
}