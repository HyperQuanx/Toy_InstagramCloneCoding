let getKoreanTime = () => {
  const now = new Date();
  const koreanTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);

  const hours = String(koreanTime.getUTCHours()).padStart(2, "0");
  const minutes = String(koreanTime.getUTCMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};

let updateTime = () => {
  const timeElement = document.querySelector(".time");
  if (timeElement) {
    timeElement.textContent = getKoreanTime();
  }
};

updateTime();
setInterval(updateTime, 60000);

let likeButtonDown = false;

let likeButton = () => {
  const like = document.querySelector(".logoHeart");

  like.addEventListener("click", () => {
    likeButtonDown = !likeButtonDown;

    likeButtonDown
      ? (like.style.backgroundImage = "url('public/emptyHeart.png')")
      : (like.style.backgroundImage =
          "url('public/RedHeart_no_black-Photoroom-removebg-preview.png')");
  });
};

likeButton();
