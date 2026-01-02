// 사용자가 브라우저를 통해 텍스트를 입력하면 JS에서 입력된 값을 가져다 브라우저 콘솔에 출력
const [sorceTextArea, targetTextArea] =
  document.getElementsByTagName("textarea");

sorceTextArea.addEventListener("input", () => {
  // event.target.value - 사용자의 입력값을 담은 프로퍼리
  console.log(event.target.value);
});
