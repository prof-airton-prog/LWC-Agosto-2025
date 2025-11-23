import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import ASSETS from '@salesforce/resourceUrl/portalAssets';

import WELCOME_MESSAGE from '@salesforce/label/c.Welcome_Message';
import BUTTON_TEXT from '@salesforce/label/c.Button_Text';

export default class WelcomeBanner extends LightningElement {

    logoUrl = ASSETS + '/logo.png';
    cssUrl = ASSETS + '/styles.css';

    welcomeMessage = WELCOME_MESSAGE;
    buttonText = BUTTON_TEXT;

    rendered = false;

    renderedCallback() {
        if(this.rendered) return;
        this.rendered = true;

        loadStyle(this, this.cssUrl).catch((e) => {
            console.error('Error: ' + e);
        });
    }

    handleImgError() {
        this.logUrl = 'data:image/svg+xml;utf8,' +
            encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="160" height="100"><rect width="100%" height="100%" fill="#ddd"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#555" font-family="sans-serif" font-size="14">Logo</text></svg>');
    }

    handleClick() {
        alert(this.welcomeMessage);
    }

}

        