import { LightningElement, api } from 'lwc';

export default class CourseCard extends LightningElement {
    @api courseId; //inserimos o id do curso para identificar cada curso separadamente
    @api courseName;
    @api coursePrice;

    @api
    applyDiscount() {
        this.coursePrice = this.coursePrice * 0.9;
    }
}