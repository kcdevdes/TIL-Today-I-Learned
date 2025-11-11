# Node.js Notes

생활코딩 Node.js 강의를 수강하며 작성한 마크다운 노트와 실습 코드를 모았습니다.

## Structure

- `NJ01-What is NodeJS.md` ~ `NJ07-Console_Input.md`  
  - 서버 개념부터 파일 시스템, 템플릿, 콘솔 입력까지 순서대로 정리한 문서
- `NodeJS_practice/`  
  - 강의에서 다룬 웹서버, 라우팅, 파일 CRUD를 직접 구현해 본 예제

## How to Run

실습 코드는 Node.js LTS 기준으로 작성되었습니다.

```bash
cd Nodejs/NodeJS_practice
node main.js    # 파일 CRUD 웹서버 예제
node input.js   # 콘솔 입력 처리 예제
```

HTML 파일(예: `1.html`, `2.html`)은 `node main.js` 실행 후 브라우저에서 `http://localhost`(기본 포트 80)으로 확인할 수 있습니다.  
강의 노트는 Markdown만 포함하므로 뷰어(IDE, GitHub)로 바로 읽으면 됩니다.
