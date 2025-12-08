import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Edita_Conta_Mixin extends NavigationMixin (LightningElement) {

    createLead(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Lead',
                actionName: 'new'
            }
        });
    }
}