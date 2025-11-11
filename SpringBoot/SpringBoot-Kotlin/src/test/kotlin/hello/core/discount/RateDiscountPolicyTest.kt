package hello.core.discount

import hello.core.member.Grade
import hello.core.member.Member
import org.assertj.core.api.Assertions
import kotlin.test.Test

class RateDiscountPolicyTest {
    private val discountPolicy = RateDiscountPolicy()

    // Test for VIP
    @Test
    fun vip_o() {
        // given
        val member = Member(1L, "memberVIP", Grade.VIP)
        // when
        val discount = discountPolicy.discount(member, 10000)
        // then
        Assertions.assertThat(discount).isEqualTo(1000)
    }

    @Test
    fun vip_x() {
        // given
        val member = Member(2L, "memberBasic", Grade.BASIC)
        // when
        val discount = discountPolicy.discount(member, 10000)
        // then
        Assertions.assertThat(discount).isEqualTo(0)
    }
}