import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class CreateCaseLDS extends LightningElement {

    createCase(){
        const recordInput = {
            apiName: 'Case',
            fields: {
                Subject: 'Case de teste 2',
                Origin: 'Web',
                Status: 'New'
            }
        };

        createRecord(recordInput)
            .then(caseRecord => {
                alert('Case criado com sucesso: ' + caseRecord.fields.Subject.value);
            })
            .catch(error => {
                console.error('Error: ' + error.body.message);
            });
        
        // createRecord(recordInput)
        //     .then(() => {
        //         alert('Case criado com sucesso: ');
        //     })
        //     .catch(error => {
        //         console.error('Error: ' + error.body.message);
        //     });
    }
}