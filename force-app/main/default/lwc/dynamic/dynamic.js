import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class Dynamic extends NavigationMixin (LightningElement) {

    //Campos padrão
    firstName = 'Anonymous';
    lastName = 'Anonymous';
    company = 'Undefined';

    handleInputChange(event) {
        const field = event.target.name;
        const value = event.target.value;

        if (field === 'firstName') {
            this.firstName = value;
        } else if (field === 'lastName') {
            this.lastName = value;
        } else if (field === 'company') {
            this.company = value;
        }
    }

    goToNewLead(){
        const inputs = this.template.querySelectorAll('lightning-input');
        let allValid = true;

        inputs.forEach(input => {
            if (!input.reportValidity()) {
                allValid = false;
            }
        });

        if (!allValid) {
            return;
        }

        //Montar os valores a partir do que o usuário digitou
        const defaultFieldValues = encodeDefaultFieldValues({
            FirstName: this.firstName,
            LastName: this.lastName,
            Company: this.company
        });

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Lead',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultFieldValues
            }
        });
    }
}