package hello.core.member

class MemberServiceImpl(
    private val memberRepository: MemberRepository
) : MemberService {
    override fun join(member: Member) {
        memberRepository.save(member)
    }

    override fun findMember(memberId: Long): Member? = memberRepository.findById(memberId)
}