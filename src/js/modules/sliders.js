const sliders = (sladesWarp, slides, dir, prev, next) => {
    let slideIndex = 1,
        paused = false;

    const items = document.querySelectorAll(slides),
        itemsWrap = document.querySelector(sladesWarp); 

    function showSlides (n) {
        if (n > items.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add("animated");
            item.style.display = "none";
        })

        items[slideIndex - 1].style.display = "block";
    }
    showSlides(slideIndex);

    function changeSlide (n) {
        showSlides(slideIndex = slideIndex + n);
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

            prevBtn.addEventListener('click', () => {
                changeSlide(-1);
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');
            })

            nextBtn.addEventListener('click', () => {
                changeSlide(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            })

    } catch (e) {

    }

    function activeAnimation () {
        if (dir === 'vertical') {
            paused = setInterval(() => {
                changeSlide(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 3000)
        } else {
            paused = setInterval(() => {
                changeSlide(1);
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');
            }, 3000)
        }
    }

    activeAnimation();

    itemsWrap.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    itemsWrap.addEventListener('mouseleave', () => {
        activeAnimation();
    });
    
}

export default sliders;