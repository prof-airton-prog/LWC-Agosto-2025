import { LightningElement, api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';

export default class UpdateCaseLDS extends LightningElement {

    @api recordId;

    closeCase() {
        const fields = {
            Id: this.recordId,
            Status: 'Closed'
        };

        updateRecord({fields})
            .then(() => {
                alert('Mudou para status Closed, ID: ' + this.recordId);
            })
            .catch(error => {
                console.error('Error: ' + error.body.message);
            });
    }
}
