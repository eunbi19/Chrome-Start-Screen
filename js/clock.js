(function () {
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");

  const modifyNumber = (number) => {
    return parseInt(number) < 10 ? "0" + number : number;
  };

  const getNowDate = () => {
    const nowDate = new Date();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    let month = modifyNumber(nowDate.getMonth() + 1);
    let date = modifyNumber(nowDate.getDate());
    let day = nowDate.getDay();
    setNowDate(month, date, week[day]);
  };

  const setNowDate = (month, date, day) => {
    dateElement.textContent = `${month}월 ${date}일 ${day}요일`;
  };
  const getNowTime = () => {
    const nowDate = new Date();
    let hour = modifyNumber(nowDate.getHours());
    let munute = modifyNumber(nowDate.getMinutes());
    setNowTime(hour, munute);
  };

  const setNowTime = (hour, munute) => {
    timeElement.textContent = `${hour} : ${munute}`;
  };

  getNowDate();
  getNowTime();
  setInterval(getNowTime, 1000);
})();
