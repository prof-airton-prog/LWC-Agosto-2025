import { LightningElement, api } from 'lwc';

export default class EventFilho extends LightningElement {
    @api courseId;
    @api courseName;
    @api coursePrice;

    @api
    generateDiscountEventByChild(){
        const event = new CustomEvent('discountrequest', {
            detail: {
                courseId: this.courseId
            }
        });
        this.dispatchEvent(event);
    }

    @api
    applyDiscount(){
        this.coursePrice = this.coursePrice * 0.9;
    }
}