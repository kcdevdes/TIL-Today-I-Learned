package hello.core.discount

import hello.core.member.Grade
import hello.core.member.Member

class FixDiscountPolicy : DiscountPolicy {
    override fun discount(member: Member, price: Int): Int {
        return if (member.grade == Grade.VIP) {
            1000
        } else {
            0
        }
    }
}