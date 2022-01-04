const modals = () => {
    let isAnyBtnPressed = false;
    // bind modal to trigger (elemnt)
    function bindModal (triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('div[data-modal]');
            
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                isAnyBtnPressed = true;

                if (destroy) {
                    item.remove();
                }

                windows.forEach( item => {
                    item.style.display = 'none';
                })
    
                modal.style.display = "block";
                // document.body.style.overflow = "hidden";
                document.body.classList.add('modal-open');
            })
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";

            windows.forEach( item => {
                item.style.display = 'none';
            })

            document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = "none";

                windows.forEach( item => {
                    item.style.display = 'none';
                })

                document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            let isAnyModalVisible;

            document.querySelectorAll('div[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    isAnyModalVisible = true;
                } 
            });
            if (!isAnyModalVisible) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = "hidden";
            }
            
        }, time)
    }

    function openByScroll(selector) {
        
        window.addEventListener('scroll', () => {
            if (!isAnyBtnPressed && (Math.floor(window.pageYOffset) + Math.floor(document.documentElement.clientHeight) >= Math.floor(document.documentElement.scrollHeight)) ) {
                document.querySelector(selector).click();
            }
        })
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
    //showModalByTime('.popup-consultation', 60000);
}

export default modals;