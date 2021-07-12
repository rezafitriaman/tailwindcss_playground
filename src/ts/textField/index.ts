export class TextField {
    private textField :Array<HTMLElement>;

    constructor() {
        this.textField = Array.from(document.querySelectorAll('.text-field'))
    }
    init() {

        this.textField.forEach(elm => {
            const input = elm.querySelector('input')!;

            input.addEventListener("focusin", ()=> {
                input.nextElementSibling!.classList.add('active');
            });

            input.addEventListener("focusout", ()=> {
                const inputEmpty = !input.value;

                if(inputEmpty) {
                    input.nextElementSibling!.classList.remove('active');
                }
            });
        })
    }
}