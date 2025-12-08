import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavegaEntreTabs extends NavigationMixin(LightningElement) {

    openCustomTab(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Welcome' //Onde vai o nome da Aba
            }
        });
    }
}


//https://developer.salesforce.com/docs/platform/lwc/guide/use-navigate-page-types.html
//https://developer.salesforce.com/docs/platform/lwc/guide/reference-page-reference-type.html