import { LightningElement } from 'lwc';

export default class CaseList extends LightningElement {

    mensagem = '';

    handleCardAction(event){
        console.log(event.detail.message);
        alert('Evento disparado: ' + event.detail.message);
        this.mensagem = event.detail.message;
    }
}