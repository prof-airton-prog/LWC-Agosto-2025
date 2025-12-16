import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class GeraUrl extends NavigationMixin(LightningElement) {

    @api recordId;
    generatedUrl;

    handleGenerateUrl(){
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Account',
                actionName: 'view'
            }
        })
        .then(url => {
            this.generatedUrl = url;
        });
    }
}