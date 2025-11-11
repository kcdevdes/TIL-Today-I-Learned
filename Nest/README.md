## NestJS Lab

Nest CLI로 생성한 샘플 애플리케이션을 기반으로 DI, 모듈 구조, 테스트 전략을 실험하는 공간입니다. Express 어댑터 위에서 REST API를 만들며 학습했습니다.

## Available Scripts

```bash
yarn install        # 의존성 설치
yarn start:dev      # 개발 서버 (ts-node-dev)
yarn start:prod     # 빌드 후 실행
yarn test           # unit 테스트
yarn test:e2e       # e2e 테스트
```

## Notes

- `src/app.controller.ts` : 가장 단순한 GET 핸들러, 데코레이터 구문 복습용
- `src/app.service.ts` : 비즈니스 로직을 서비스 계층으로 분리하는 패턴 연습
- `test/` : Jest + Supertest 조합 확인

필요시 환경 변수는 `.env` 대신 `config` 모듈로 주입할 예정입니다. 추후 GraphQL, Prisma 연동 실험도 이곳에서 이어갑니다.
