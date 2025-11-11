package hello.core.discount

import hello.core.member.Member

interface DiscountPolicy {
    fun discount(member: Member, price: Int): Int


}