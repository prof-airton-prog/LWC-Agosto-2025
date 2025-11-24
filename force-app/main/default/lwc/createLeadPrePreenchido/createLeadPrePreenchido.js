import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class CreateLeadPrePreenchido extends NavigationMixin(LightningElement) {

    defaultValues = encodeDefaultFieldValues({
        FirstName: 'Airton',
        LastName: 'Miguel Jr',
        Company: 'ProfAirtonProgramming'
    });

    createLeadWithDefaults(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Lead',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: this.defaultValues
            }
        });
    }
}