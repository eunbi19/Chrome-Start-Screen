(function () {
  const bookMarkBar = document.getElementById("bookmark-bar");
  const Open = document.getElementById("bookmark-open");
  const Close = document.getElementById("bookmark-close");

  // 북마크 바 열기 및 닫기
  const bookmarkBarToggle = () => {
    const isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");
    if (isBookMarkBarOpen) {
      if (isBookMarkBarOpen === "open") {
        localStorage.setItem("isBookMarkBarOpen", "close");
        bookMarkBar.style.display = "none";
        Open.style.display = "none";
        Close.style.display = "flex";
      } else {
        localStorage.setItem("isBookMarkBarOpen", "open");
        bookMarkBar.style.display = "block";
        Open.style.display = "flex";
        Close.style.display = "none";
      }
    } else {
      localStorage.setItem("isBookMarkBarOpen", "close");
      bookMarkBar.style.display = "none";
      Open.style.display = "none";
      Close.style.display = "flex";
    }
  };

  document
    .getElementById("bookmark-open-btn")
    .addEventListener("click", bookmarkBarToggle);
  document
    .getElementById("bookmark-close-btn")
    .addEventListener("click", bookmarkBarToggle);

  // const bookmarkBar = document.getElementById("bookmark-bar");
  // const Open = document.getElementById("bookmark-open");
  // const Close = document.getElementById("bookmark-close");

  // // 북마크 바 열기 및 닫기
  // const bookmarkBarToggle = () => {
  //   const isBookMarkOpen = localStorage.getItem("isBookMarkOpen");
  //   if (isBookMarkOpen) {
  //     if (isBookMarkOpen === "open") {
  //       localStorage.setItem("isBookMarkOpen", "close");
  //       bookmarkBar.style.display = "none";
  //       Open.style.display = "none";
  //       Close.style.display = "flex";
  //     } else {
  //       localStorage.setItem("isBookMarkOpen", "open");
  //       bookmarkBar.style.display = "block";
  //       Open.style.display = "flex";
  //       Close.style.display = "none";
  //     }
  //   } else {
  //     localStorage.setItem("isBookMarkOpen", "close");
  //     bookmarkBar.style.display = "none";
  //     Open.style.display = "none";
  //     Close.style.display = "flex";
  //   }
  // };

  // document.getElementById("bookmark-open-btn").addEventListener("click", bookmarkBarToggle);
  // document.getElementById("bookmark-close-btn").addEventListener("click", bookmarkBarToggle);
})();
