import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CriaNovoLeadLWC extends NavigationMixin (LightningElement) {

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