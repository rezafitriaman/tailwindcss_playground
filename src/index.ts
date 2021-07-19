import './scss/index.scss';
import './index.hbs';

import AlpineCode from 'alpinejs'

AlpineCode.start();

AlpineCode.data('dropdown', () => ({
    open: false,

    toggle() {
        this.open = ! this.open
    }
}))



/*import './index.phtml';*/
/*import { TextField } from './ts/textField/index';

new TextField().init();*/

