# TypeScript Sandbox

함수 시그니처, 좌표 계산, `ts-node` 실행 흐름을 연습하기 위한 작은 실험 프로젝트입니다.

## Structure

- `function.ts`, `function.test.ts` : 함수 오버로드, 제네릭, 클로저 예제와 실행 스크립트
- `coordinate.ts`, `coordinate.test.ts` : 좌표 파서와 오버로드 테스트
- `function.js`, `index.js` : `tsc`로 변환된 결과물 비교용
- `tsconfig.json`, `package.json` : 컴파일 옵션과 의존성 정의 (`typescript`, `ts-node`)

## Run

```bash
npm install
npx ts-node function.test.ts
npx ts-node coordinate.test.ts
npx tsc          # 트랜스파일만 하고 싶을 때
```

테스트 코드는 Jest 없이 실행 로그로 동작을 확인하는 방식입니다.
