import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavegaEntreTabs extends NavigationMixin(LightningElement) {

    openWebSite(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://profairtonprogramming.com.br'
            }
        });
    }
}

