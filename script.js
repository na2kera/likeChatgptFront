// script.js
function openSidebar() {
  const sidebar = document.querySelector("#navArea");
  sidebar.classList.toggle("open");
}

//画面が小さくなると自動的にサイドバーを閉じる//
// サイドバーを閉じる関数
function closeSidebar() {
  const sidebar = document.querySelector("#navArea");
  sidebar.classList.remove("open");
}

// ウィンドウの幅が変更されたときにサイドバーを閉じる
window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;

  // 画面幅が小さい場合にサイドバーを閉じる閾値を設定
  const smallScreenWidth = 768; // 例: 768px以下の場合にサイドバーを閉じる

  if (windowWidth <= smallScreenWidth) {
    closeSidebar();
  } else {
    // 画面幅が閾値より大きい場合はサイドバーを開く
    openSidebar();
  }
});

let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
  nav.classList.toggle("open");
};

mask.onclick = () => {
  nav.classList.toggle("open");
};
