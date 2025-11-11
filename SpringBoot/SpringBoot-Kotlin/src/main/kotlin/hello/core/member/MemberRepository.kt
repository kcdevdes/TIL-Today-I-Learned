package hello.core.member

interface MemberRepository {
    fun save(member: Member)
    fun findById(memberId: Long): Member?
}