package hello.core

import hello.core.member.Grade
import hello.core.member.Member
import hello.core.member.MemberRepository
import hello.core.member.MemberServiceImpl

class MemberApp

//fun main(args: Array<String>) {
//    val memberService = MemberServiceImpl(MemberRepository)
//    val member = Member(1L, "memberA", Grade.VIP)
//    memberService.join(member)
//
//    val findMember = memberService.findMember(1L)
//
//    // Test
//    println("new member = $member")
//    println("find member = $findMember")
//}