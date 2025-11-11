package hello.hello_spring.service;

import hello.hello_spring.domain.Member;
import hello.hello_spring.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service // Spring이 관리하는 서비스로 등록
public class MemberService {

    private final MemberRepository repository;

    @Autowired // 스프링이 스프링 컨테이너에 있는 MemberRepository 빈을 가져와 연결시켜줌
    public MemberService(MemberRepository repository) {
        this.repository = repository;
    }

    public Long join(Member member) {
        // 중복 방지
        validateDuplicateMember(member);

        repository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) {
        repository
                .findByName(member.getName())
                .ifPresent(m -> {
                    throw new IllegalStateException("Duplicate User");
                });
    }

    public List<Member> findMembers() {
        return repository.findAll();
    }

    public Optional<Member> findMember(Long id) {
        return repository.findById(id);
    }
}
