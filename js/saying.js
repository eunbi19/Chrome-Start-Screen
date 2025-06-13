const API_URL = "https://random-quote.hyobb.com/";
const sayingElement = document.getElementById("saying");
const sayingItem = localStorage.getItem("saying");

const nowDate = new Date();
const month = nowDate.getMonth();
const date = nowDate.getDate();

// 오늘의 날짜와 sayingData를 설정
const setSaying = (result) => {
  let saying = { creatDate: `${month}-${date}`, sayingData: result };
  localStorage.setItem("saying", JSON.stringify(saying));
  sayingElement.textContent = result;
};

// 명언 받아오기
const getSaying = async () => {
  try {
    const data = await fetch(API_URL).then((res) => res.json());
    const result = data[1].respond;
    setSaying(result);
  } catch (err) {
    console.log(`err:${err}`);
    setSaying(
      "희망은 어둠 속에서 시작된다. 일어나 옳은 일을 하려 할 때, 고집스런 희망이 시작된다. 새벽은 올 것이다. 기다리고 보고 일하라. 포기하지 말라. - 앤 라모트"
    );
  }
};

// 하루에 한개의 명언만 노출
if (sayingItem) {
  let { creatDate, sayingData } = JSON.parse(sayingItem);
  if (creatDate === `${month}-${date}`) {
    sayingElement.textContent = `${sayingData}`;
  } else {
    getSaying();
  }
} else {
  getSaying();
}
