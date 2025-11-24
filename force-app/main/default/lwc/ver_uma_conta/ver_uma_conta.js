import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Ver_uma_conta extends NavigationMixin (LightningElement) {

    navigateToAccount(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '001aj00001NabOIAAZ',
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }
}