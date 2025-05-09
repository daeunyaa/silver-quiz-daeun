function checkAnswers() {
    const score = calculateScore();
    console.log(score);
    document.getElementById("resultScore").innerHTML = `🎉 퀴즈 완료!<br>당신의 점수는 <br><span class="highlight">${score}점</span>입니다.<br>참여해 주셔서 감사합니다!`;
    document.getElementById("modal").style.display = "block";
    setTimeout(() => {
        document.getElementById("resultScore").style.display = "none";
        document.getElementById("gift").style.display = "block";
      }, 3000);
  }
  function calculateScore() {
    const correctAnswers = ['깊은 바닷속', '천연양념', '평양냉면', '칼륨', '콩나물'];
    let score = 0;
    for (let i = 1; i <= 5; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected && selected.parentElement.textContent.trim() === correctAnswers[i - 1]) {
        score++;
      }
    }
    return score;
  }
  const form = document.getElementById("info");
  form.addEventListener("submit", function(event){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    event.preventDefault();
    if (name.length < 2) {
        alert("이름은 2자 이상 입력해주세요!");
        return;
    }
    if (!email.includes("@")) {
        alert("올바른 이메일 주소를 입력해주세요!");
        return;
    }
    if (!phone.includes("010")) {
        alert("전화번호는 010으로 시작해야 합니다!");
        return;
    }
    alert("응모가 완료되었습니다!");
    form.submit();
  })