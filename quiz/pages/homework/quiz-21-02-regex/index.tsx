// 1-2의 1번
// "2018.01.01"과 같은 날짜 형식을 검증하는 정규표현식을 만들어 주세요.
/^\d{4}.\d{2}.\d{2}$/.test("2018.01.01");

// 1-2의 2번
// "010-1234-5678"과 같은 휴대폰 형식을 검증하는 정규표현식을 만들어 주세요.
/^\d{3}-\d{3,4}-\d{4}$/.test("010-1234-5678");

// 1-2의 3번
// "aaa@bbb.com"과 같은 이메일 형식을 검증하는 정규표현식을 만들어 주세요.
/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
  "aaa@bbb.com"
);