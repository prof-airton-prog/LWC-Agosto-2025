import { LightningElement } from 'lwc';

export default class EventPai extends LightningElement {
    courses = [
        {id: 1, name: 'LWC Básico', price: 10000},
        {id: 2, name: 'LWC Avançado', price: 20000},
        {id: 3, name: 'Integração Salesforce', price: 18000}
    ];

    handleDiscountRequest(event){
        const requestedId = event.detail.courseId;
        const cards = this.template.querySelectorAll('c-event-filho');
        cards.forEach(card => {
            if(card.courseId === requestedId){
                card.applyDiscount();
            }
        });
    }

    applyDiscountToAll(){
        const cards = this.template.querySelectorAll('c-event-filho');
        cards.forEach(card => {
            card.applyDiscount();
        });
    }
    
}