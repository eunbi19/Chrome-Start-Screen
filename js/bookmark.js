(function () {
  const newBookmarkForm = document.getElementById("bookmark-item-input-form");
  const bookmarkItemList = document.getElementById("bookmark-list");

  let bookmarkList = [];
  if (localStorage.getItem("bookmarkList")) {
    bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
  } else {
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
  }

  // 북마크 아이템 요소 추가
  const addBookmarkItem = () => {
    let bookmarkList = [];
    if (localStorage.getItem("bookmarkList")) {
      bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    }
    let name = document.getElementById("new-bookmark-name-input").value;
    let url = document.getElementById("new-bookmark-url-input").value;
    let creatAt = Date.now();
    bookmarkList.push({ name: name, url: url, creatAt: creatAt });
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
    document.getElementById("new-bookmark-name-input").value = "";
    document.getElementById("new-bookmark-url-input").value = "";
    setBookmarkItem({ name: name, url: url, creatAt: creatAt });
    newBookmarkToggle();
  };

  let isAddBtnClick = false;
  newBookmarkForm.style.display = "none";
  const newBookmarkToggle = () => {
    isAddBtnClick = !isAddBtnClick;
    isAddBtnClick
      ? (newBookmarkForm.style.display = "block")
      : (newBookmarkForm.style.display = "none");
  };

  const deleteBookmarkItem = (id) => {
    const isDelete = window.confirm("정말 삭제하시겠습니까?");
    if (isDelete) {
      let bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
      let nowBookmarkList = bookmarkList.filter((elm) => elm.creatAt !== id);
      localStorage.setItem("bookmarkList", JSON.stringify(nowBookmarkList));
      document.getElementById(`bookmark-item-${id}`).remove();
    }
  };

  //북마크 아이템에 나타내는 함수
  // 로컬스토리지에 있는 북마크 아이템 리스트를 꺼내온 다음
  // 북마크바에 나타내주는 기능을 하는 함수
  const setBookmarkItem = (item) => {
    const bookmarkItem = document.createElement("div");
    bookmarkItem.classList.add("bookmark-item");
    bookmarkItem.id = `bookmark-item-${item.creatAt}`;
    //북마크 아이콘 및 북마크 div
    const bookmarkInfo = document.createElement("div");
    bookmarkInfo.classList.add("bookmark-info");
    const bookmarkUrl = document.createElement("a");
    bookmarkUrl.classList.add("bookmark-url");
    bookmarkUrl.href = item.url;

    //북마크 아이템의 이름 앞에 표시될 아이콘
    const urlIcon = document.createElement("div");
    urlIcon.classList.add("url-icon");

    const urlIconImg = document.createElement("img");
    urlIconImg.src = `https://www.google.com/s2/favicons?domain_url=${item.url}`;
    const nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.textContent = item.name;

    //북마크 삭제 버튼
    const bookmarkDelBtn = document.createElement("div");
    bookmarkDelBtn.textContent = "삭제";
    bookmarkDelBtn.classList.add("del-btn");
    bookmarkDelBtn.addEventListener("click", () => {
      deleteBookmarkItem(item.creatAt);
    });

    bookmarkItem.appendChild(bookmarkInfo);
    bookmarkItem.appendChild(bookmarkDelBtn);
    bookmarkInfo.appendChild(bookmarkUrl);
    bookmarkUrl.appendChild(urlIcon);
    bookmarkUrl.appendChild(nameElement);
    urlIcon.append(urlIconImg);

    bookmarkItemList.appendChild(bookmarkItem);
  };

  const setBookmarkList = () => {
    bookmarkList.forEach((item) => {
      setBookmarkItem(item);
    });
  };

  //추가 버튼 클릭 시 토글
  document
    .getElementById("bookmark-item-add-btn")
    .addEventListener("click", newBookmarkToggle);

  //추가 버튼 클릭시 입력폼 열기
  document.getElementById("add-btn").addEventListener("click", addBookmarkItem);

  //취소 버튼 클릭 시 입력폼 닫기
  document
    .getElementById("cancel-btn")
    .addEventListener("click", newBookmarkToggle);
  setBookmarkList();
})();
