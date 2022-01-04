const checkTextInputs = function (selector) {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key.match(/[^а-я 0-9]/gi)) {
                e.preventDefault();
            }
        })
    })
}

export default checkTextInputs;