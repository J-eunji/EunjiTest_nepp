let modalContainer = document.querySelector(".modalContainer");
let btnModalClose = document.querySelector(".modalBox button");
let hide = document.querySelector(".hide");
// 모달 창 닫기
btnModalClose.addEventListener("click", () => {
  modalContainer.classList.add("hide");
});

let btnSide = document.querySelector(".btnSide");
let menuList = document.querySelector(".gnbList .menuList");
let div = document.createElement("div");
let sideBarOn = document.querySelector(".sideBarOn");

// 사이드바 나타내기
btnSide.addEventListener("click", () => {
  menuList.classList.add("sideBarOn");
  let parent = menuList.parentNode;
  div.setAttribute("class", "menuListBg");
  parent.appendChild(div);
});

// 사이드바 숨기기
div.addEventListener("click", () => {
  menuList.classList.remove("sideBarOn");
  div.classList.remove("menuListBg");
});

let sliderBtn = document.querySelector(".btnSlider");
let sliderImgBox = document.querySelector(".sliderImgBox");
let count = 0;
// 슬라이드 좌우 버튼
sliderBtn.addEventListener("click", (e) => {
  if (e.target.dataset.btn === "left") {
    0 < count && count <= 2 ? count-- : (count = 0);
    // console.log("left", count);
    sliderImgBox.style.transform = `translate(${100 * -count}vw)`;
  } else if (e.target.dataset.btn === "right") {
    0 <= count && count < 2 ? count++ : (count = 2);
    // console.log("right", count);
    sliderImgBox.style.transform = `translate(${100 * -count}vw)`;
  }
});
