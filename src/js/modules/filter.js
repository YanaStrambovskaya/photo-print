const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnLovers = menu.querySelector('.lovers'),
          btnChef = menu.querySelector('.chef'),
          btnGirl = menu.querySelector('.girl'),
          btnGuy = menu.querySelector('.guy'),
          btnGrandmother = menu.querySelector('.grandmother'),
          btnGranddad = menu.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markGirl = wrapper.querySelectorAll('.girl'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markChef = wrapper.querySelectorAll('.chef'),
          markGuy = wrapper.querySelectorAll('.guy'),
          no = document.querySelector('.portfolio-no');

    function typeFilter (markType) {
        markAll.forEach(item => {
            item.style.display = "none";
            item.classList.remove('animated', 'fadeIn');
        });
        no.style.dispaly = 'none';
        no.classList.remove('animated', 'fadeIn');

        if(markType) {
            markType.forEach(item => {
                item.style.display = "block";
                item.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = "block";
            no.classList.add('animated', 'fadeIn');
        }
    }

    btnLovers.addEventListener('click', () => {
        typeFilter(markLovers);
    });

    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
    });

    btnChef.addEventListener('click', () => {
        typeFilter(markChef);
    });

    btnGirl.addEventListener('click', () => {
        typeFilter(markGirl);
    });

    btnGuy.addEventListener('click', () => {
        typeFilter(markGuy);
    });

    btnGrandmother.addEventListener('click', () => {
        typeFilter();
    });

    btnGranddad.addEventListener('click', () => {
        typeFilter();
    });

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
}
export default filter;