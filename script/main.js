const slide = document.querySelector(".slide");
const slideWidth = 680;

let slideIndex = 0;

function slideUpdate() {
    slideIndex ++;

    slide.style.transition = 'transform 0.5s ease-in-out';
    slide.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

    setTimeout(() => {
        slideAppend();
    }, 500);
}

function slideAppend() {
    if (slideIndex === 2) {
        slide.append(slide.firstElementChild);
        slideIndex--;
    } else if (slideIndex === 0) {
        slide.insertBefore(slide.lastElementChild, slide.firstElementChild);
        slideIndex++;
    }

    slide.style.transition = 'none';
    slide.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

setInterval(slideUpdate, 3000);