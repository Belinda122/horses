document.addEventListener("DOMContentLoaded", () => {
//chat gpt assisted image toggles
// keep active button active after click until another is clicked https://dev.to/nicm42/multiple-buttons-looking-like-theyre-staying-pressed-one-at-a-time-4bbb#:~:text=Top%20comments%20(6)&text=I%20like%20problem%20solving%20and,I%20also%20like%20red.&text=It's%20really%20hard%20to%20know,that%20removes%20the%20active%20class.&text=i'm%20looking%20for%20whatever,that's%20stopping%20it%20from%20working.&text=EDIT:%20well%20I%20had%20it%20for%20a%20second.&text=Nic-,I%20like%20problem%20solving%20and%20making%20things,I%20also%20like%20red.&text=As%20long%20as%20your%20active,a%20JSFiddle%20and%20it%20works.&text=Nic-,I%20like%20problem%20solving%20and%20making%20things,I%20also%20like%20red.&text=Both%20of%20those%20should%20work,is%20in%20the%20dev%20tools.
  const categories = {
    birds: document.querySelectorAll("#labelce, #labelbc"), 
    insects: document.querySelectorAll("#labelh, #labelrs"),
    predators: document.querySelectorAll("#labelml, #labelw"),
    vegetation: document.querySelectorAll("#labelb2, #labeld")
  };

  // track currently shown image per category
  const currentImg = {
    birds: null,
    insects: null,
    predators: null,
    vegetation: null
  };

  // track currently active button per category
  const activeButton = {
    birds: null,
    insects: null,
    predators: null,
    vegetation: null
  };

  Object.keys(categories).forEach(category => {
    categories[category].forEach(button => {
      const target = button.dataset.img;
      const img = document.querySelector(`img.${target}.toggle`);

      button.addEventListener("click", (e) => {
        e.preventDefault(); // prevent navigation on first click

        // override previous show image by removing show tag
        if (currentImg[category] && currentImg[category] !== img) {
          currentImg[category].classList.remove("show");
        }
        
        

        // override previous active button by removing active tag
        if (activeButton[category] && activeButton[category] !== button) {
          activeButton[category].classList.remove("active");
        }

        if (!img.classList.contains("show")) {
          //first click and second click different functionality
          img.classList.add("show");
          button.classList.add("active");
          currentImg[category] = img;
          activeButton[category] = button;
        } else {
          // second click
          img.parentElement.click();
        }
      });
    });
  });



 
});

