// TODO - 입력 받은 텍스트를 XHR 활용하여 요청 전송

const [sorceTextArea, targetTextArea] =
  document.getElementsByTagName("textarea");

let timerId; // 타이머ID를 담을 임시 변수
const sourceText = sorceTextArea.addEventListener("input", (event) => {
  // 전달된 타이머 ID에 해당하는 타이머 객체를 초기화(무효화)
  clearTimeout(timerId);

  timerId = setTimeout(() => {
    const text = event.target.value;

    // 비동기 요청 전송 코드
    const xhr = new XMLHttpRequest();
    // 2. 요청 준비 (URL, 전송할 데이터)
    const URL = "/example";
    const data = {
      query: text,
    };
    xhr.open("POST", URL);
    // 3. 요청 전송
    xhr.send(data); // TODO: 직렬화 필요
    // 4. 응답 완료 시 결과값 확인
    xhr.onload = () => {}; // TODO: 세부 로직 작성
  }, 2000);
  console.log(timerId);
});

