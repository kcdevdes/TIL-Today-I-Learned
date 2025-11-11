package hello.core

import hello.core.member.Grade
import hello.core.member.Member
import hello.core.member.MemberService
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class CoreApplication

fun main(args: Array<String>) {
    val appConfig = AppConfig()
    val memberService: MemberService = appConfig.memberService()
    val member = Member(1L, "memberA", Grade.VIP)
    memberService.join(member)

    val findMember = memberService.findMember(1L)
    println("new member = $member")
    println("find member = $findMember")
//    runApplication<CoreApplication>(*args)
}
