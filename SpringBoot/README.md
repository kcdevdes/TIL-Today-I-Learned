# Spring Boot Lab

Spring Boot로 REST API, 웹서비스, Kotlin 기반 애플리케이션을 실험하는 모놀리포 구조입니다. 각 하위 폴더는 완전히 독립된 Gradle 프로젝트입니다.

## Modules

- `SpringBoot-Java` : Java 17 + Spring Boot 서비스. Dockerfile, docker-compose, `notes/` 폴더에 운영 메모가 포함되어 있습니다.
- `SpringBoot-Kotlin` : Kotlin DSL(`build.gradle.kts`)로 설정된 프로젝트. 코루틴 및 Kotlin 특화 기능을 시험할 예정입니다.
- `SpringBoot-Webservice` : 「스프링 부트와 AWS로 혼자 구현하는 웹 서비스」 책을 따라가는 예제.

각 모듈은 개별 README와 Gradle Wrapper를 포함하므로, 필요한 프로젝트로 이동한 뒤 `./gradlew bootRun` 형태로 실행하면 됩니다.
