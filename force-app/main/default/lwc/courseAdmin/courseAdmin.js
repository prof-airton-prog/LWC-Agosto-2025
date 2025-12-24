import { LightningElement } from 'lwc';

export default class CourseAdmin extends LightningElement {

    courses = [
        {
            id: 1,
            name: 'Salesforce Training',
            price: 1000
        },
        {
            id: 2,
            name: 'Salesforce Developer',
            price: 2000
        },
        {
            id: 3,
            name: 'Salesforce Admin',
            price: 3000
        }
    ]

    applyDiscountToFirst(){
        const card = this.template.querySelector('c-course-card');
        card.applyDiscount();
    }

    applyDiscountToAll(){
        const cards = this.template.querySelectorAll('c-course-card');
        cards.forEach(card => {
            card.applyDiscount();
        });
    }

    
}