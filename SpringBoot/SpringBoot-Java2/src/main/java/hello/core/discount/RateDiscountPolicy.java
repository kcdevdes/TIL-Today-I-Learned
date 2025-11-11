package hello.core.discount;

import hello.core.member.Member;

public class RateDiscountPolicy implements DiscountPolicy {

    private int dsicountPercent = 10;

    @Override
    public int discount(Member member, int price) {
        if (member.getGrade() == hello.core.member.Grade.VIP) {
            return price * dsicountPercent / 100;
        } else {
            return 0;
        }
    }
}
