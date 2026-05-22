
const modalElement = document.getElementById("modal");
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

const heartButtons = document.querySelectorAll(".like");

  heartButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      btn.classList.add("activated-heart");
        const isFilled = btn.textContent.trim() === FULL_HEART;
          btn.textContent = isFilled ? EMPTY_HEART : FULL_HEART;

      try {
        await mimicServerCall(undefined, {
      });
        } catch (error) {
          btn.textContent = isFilled ? FULL_HEART : EMPTY_HEART;
            console.error("Error updating heart state:", error);

        if (modalElement) {
        modalElement.hidden = false;
        setTimeout(() => {
          modalElement.hidden = true;
        }, 3000);
      }
    }
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
