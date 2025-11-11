package com.kcdevdes.webservice.springboot.domain;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass // JPA Entity 클래스들이 이 클래스를 상속하는 경우 자동으로 필드들을 인식하게 함
@EntityListeners(AuditingEntityListener.class) // Auditing 기능을 포함
public class BaseTimeEntity {
    @CreatedDate // Entity가 생성, 저장될 때 시간이 자동 저장
    private LocalDateTime createdDate;

    @LastModifiedDate // Entity가 변경될 때 시간이 자동 저장
    private LocalDateTime modifiedDate;
}
