import { LightningElement, track } from 'lwc';
    
export default class CalculadoraSimples extends LightningElement {
    @track displayValue = '0';

    clearAll() {
        this.displayValue = '0';
    }

    inputNumber(event) {
        const number = event.target.dataset.number;
        this.displayValue = number;
    }
    
}