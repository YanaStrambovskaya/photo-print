const mask = (selector) => {
    function setCursorPosition (pos, el) {
        
        el.focus();
        if (el.setSelectionRange) {
            el.setSelectionRange(pos, pos);
        } else if (el.createTextRange) {
            let range = el.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }
    function createMask(e) {
        let matrix = '+38 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

            if (def.length >= val.length) {
                val = def;
            }

            this.value = matrix.replace(/./g, function (a) {
                if (/[_\d]/.test(a) && (i < val.length)) {
                    return (val.charAt(i++))
                } else  if (i >= val.length){
                        return ''

                } else  {return a}
            })
             if (e.type == 'blur') {
                if (this.value.length == 3) {
                    this.value = '';
                } 
            } else {
                setCursorPosition(this.value.length, this);
            }
    }
    let inputs = document.querySelectorAll(selector);

    inputs.forEach(item => {
        item.addEventListener('input', createMask);
        item.addEventListener('focus', createMask);
        item.addEventListener('blur', createMask);
    })
}
export default mask;