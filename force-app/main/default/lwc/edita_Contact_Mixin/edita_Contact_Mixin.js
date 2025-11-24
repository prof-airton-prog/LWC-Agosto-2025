import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Edita_Conta_Mixin extends NavigationMixin (LightningElement) {

    editContact(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '003aj00000ZNdKjAAL',
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        });
    }
}