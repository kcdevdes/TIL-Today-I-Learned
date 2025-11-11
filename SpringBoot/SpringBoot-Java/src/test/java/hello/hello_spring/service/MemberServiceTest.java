package hello.hello_spring.service;

import hello.hello_spring.domain.Member;
import hello.hello_spring.repository.MemoryMemberRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertThrows;

class MemberServiceTest {

    MemoryMemberRepository repository;
    MemberService service;

    @BeforeEach
    void beforeEach() {
        // In every test and unit, we create a service with a static repository
        // to hold memory addresses
        repository = new MemoryMemberRepository();
        service = new MemberService(repository);
    }

    @AfterEach
    void afterEach() {
        repository.clearStore();
    }

    @Test
    void Join_new_users_into_dedicated_repository() {
        // given
        Member member = new Member();
        member.setName("Hello");

        // when
        Long saveId = service.join(member);

        // then
        Member findMember = service.findMember(saveId).get();
        Assertions.assertThat(member.getName()).isEqualTo(findMember.getName());
    }

    @Test
    void duplicateUserException() {
        // given
        Member member1 = new Member();
        member1.setName("Hello");
        Member member2 = new Member();
        member2.setName("Hello");

        // when
        service.join(member1);
        // expects to catch an exception
        IllegalStateException e = assertThrows(IllegalStateException.class, () -> service.join(member2));

        // then
        Assertions.assertThat(e.getMessage()).isEqualTo("Duplicate User");
    }

    @Test
    void findMembers() {
    }

    @Test
    void findMember() {
    }
}