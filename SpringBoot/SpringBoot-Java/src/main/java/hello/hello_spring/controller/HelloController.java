package hello.hello_spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    /**
     * thymeleaf 템플릿 엔진을 동작시킨다.
     * 요청 -> 톰캣 서버 (/hello 라우팅) -> 스프링부트 helloController
     * -> viewResolver(템플릿 엔진 처리) -> html 변환 -> 반환
     * <p>
     * 패턴
     * resources:templates/{ViewName}.html
     *
     * @param model
     * @return
     */
    @GetMapping("hello")
    public String hello(Model model) {
        model.addAttribute("data", "Google translator");
        return "hello";
    }
}
