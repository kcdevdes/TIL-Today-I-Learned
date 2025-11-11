package hello.core

import hello.core.discount.FixDiscountPolicy
import hello.core.discount.RateDiscountPolicy
import hello.core.member.MemberService
import hello.core.member.MemberServiceImpl
import hello.core.member.MemoryMemberRepository
import hello.core.order.OrderService
import hello.core.order.OrderServiceImpl

class AppConfig {
    fun memberService(): MemberService {
        return MemberServiceImpl(getMemoryMemberRepository())
    }

    fun orderService(): OrderService {
        return OrderServiceImpl(getMemoryMemberRepository(), getDiscountPolicy())
    }

    private fun getDiscountPolicy() = RateDiscountPolicy()
    private fun getMemoryMemberRepository() = MemoryMemberRepository()

}