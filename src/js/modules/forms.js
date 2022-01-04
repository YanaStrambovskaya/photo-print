import {postData} from '../services/requests';

const forms = () => {
    const forms = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]');

    // checkNumInputs('input[name="user_phone"]');

    
    const message = {
        loading: 'Loading....',
        success: 'Success!',
        failure: 'Failure(',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    }

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    }

    function clearInputs() {
        input.forEach( (item) => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        })
    }

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const arr = item.files[0].name.split('.');
            arr[0].length > 5 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1]
            item.previousElementSibling.textContent = name;
        })
    })

    forms.forEach( (item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');

            let statusImg = document.createElement('img');
            statusImg.classList.add('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);
        
            let textMessage = document.createElement('div');
            textMessage.classList.add('textMessage');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            item.parentNode.appendChild(statusMessage);
        
            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);
        
            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.classList.contains('calc-form') ? api = path.designer : api = path.question;
            console.log(api);

            postData(api, formData)
                .then((res) => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    setTimeout(() => {
                        clearInputs();
                        statusMessage.remove();
                        item.style.display = "block";
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                })
        })
    })
}

export default forms;