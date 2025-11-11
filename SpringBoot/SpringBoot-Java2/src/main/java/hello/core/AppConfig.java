package hello.core;

import hello.core.discount.DiscountPolicy;
import hello.core.discount.RateDiscountPolicy;
import hello.core.member.MemberService;
import hello.core.member.MemberServiceImpl;
import hello.core.member.MemoryMemberRepository;
import hello.core.order.OrderService;
import hello.core.order.OrderServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Configuration Class - 애플리케이션의 전체 동작 방식을 구성(configure)하는 책임을 가지는 클래스
 * Bean - 스프링 컨테이너에 등록되는 객체(Bean)를 생성하는 메서드에 붙이는 어노테이션
 */

// 애플리케이션에 대한 구성 정보를 담당. DIP를 지키는 역할
@Configuration
public class AppConfig {

    @Bean
    public MemberService memberService() {

        // 생성자 주입으로 의존성 주입
        return new MemberServiceImpl(memberRepository());
    }

    @Bean
    public MemoryMemberRepository memberRepository() {
        return new MemoryMemberRepository();
    }

    @Bean
    public OrderService orderService() {

        // 생성자 주입으로 의존성 주입
        return new OrderServiceImpl(memberRepository(), discountPolicy());
    }

    @Bean
    public DiscountPolicy discountPolicy() {
        // return new FixedDiscountPolicy();
        return new RateDiscountPolicy();
    }
}
