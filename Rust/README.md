# Rust First Steps

`hello-rust` 디렉터리는 Rust 설치 직후 진행한 첫 실습입니다. `ferris_says` 크레이트를 이용해 문자열을 출력해 보며 Cargo 생태계를 익혔습니다.

## Structure

- `hello-rust/`
  - `src/main.rs` : `BufWriter`와 `ferris_says::say`를 사용한 간단한 예제
  - `Cargo.toml` : 의존성과 패키지 메타데이터
  - `target/` : Cargo 빌드 산출물 (필요 시 `cargo clean`)

## Run

```bash
cd Rust/hello-rust
cargo run
```

추후 The Rust Programming Language(aka The Book)를 따라가며 예제를 확장할 예정입니다.
