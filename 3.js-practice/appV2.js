// 사용자가 브라우저를 통해 텍스트를 입력하면 JS에서 입력된 값을 가져다 브라우저 콘솔에 출력
// 입력한 문자마다 이벤트가 동작하여 불필요한 요청이 될 수 있는 문제 해결

const [sorceTextArea, targetTextArea] =
  document.getElementsByTagName("textarea");

let timerId; // 타이머ID를 담을 임시 변수
const sourceText = sorceTextArea.addEventListener("input", (event) => {
  // 전달된 타이머 ID에 해당하는 타이머 객체를 초기화(무효화)
  clearTimeout(timerId);

  timerId = setTimeout(() => {
    console.log(event.target.value);
  }, 2000);
  console.log(timerId);
});

