package hello.core.member

class MemoryMemberRepository : MemberRepository {
    companion object {
        val store = hashMapOf<Long, Member>() // concurrency issue
    }

    override fun save(member: Member) {
        store[member.id] = member
    }

    override fun findById(memberId: Long): Member? {
        return store[memberId]
    }
}