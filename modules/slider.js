const d = document;

const slider = () => {
  d.addEventListener("click", (e) => {
    const $slideIndicator = d.querySelectorAll(".indicator"),
      $slide = d.getElementById("slide");

    if (e.target.matches(".indicator")) {
      $slideIndicator.forEach((el, index) => {
        el.dataset.index = index;
      });

      $slide.style.transform = `translateX(${
        -parseInt(e.target.dataset.index) * 800
      }px)`;

      if (e.target.classList.contains("active") === false) {
        $slideIndicator.forEach((e) => {
          e.classList.remove("active");
        });
        e.target.classList.add("active");
      }
      console.log(e.target.dataset.index);
    }
  });
};

export default slider;
