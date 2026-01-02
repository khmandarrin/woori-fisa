import http from "http";

// node.js 내장 모듈을 활용하여 간단하게 서버 생성
const server = http.createServer((request, response) => {
  //request : 요청 객체
  if (request.url === "/") {
    // 응답 객체를 통해 Hello! 문자열 데이터 응답
    response.end("Hello");
  } else if (request.url === "/bye") {
    response.end("Bye!");
  }
});
const PORT = 3000; // 포트 번호

server.listen(PORT, () =>
  console.log(`서버가 http://localhost:${PORT} 에서 실행 대기 중입니다.`)
);
