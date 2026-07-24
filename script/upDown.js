function startUpDownGame() {
  var computerNum = Math.floor(Math.random() * 50) + 1;
  var count = 0;
  var userNum;

  while (true) {
    var input = prompt("1부터 50 사이의 숫자를 맞춰보세요!");

    if (input === null) {
      return;
    }

    userNum = Number(input);
    count++;

    if (userNum === computerNum) {
      alert("축하합니다! " + count + "번 만에 맞추셨습니다.");
      return;
    } else if (userNum > computerNum) {
      alert("Down!");
    } else {
      alert("Up!");
    }
  }
}
