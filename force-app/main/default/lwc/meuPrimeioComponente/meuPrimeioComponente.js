import { LightningElement } from 'lwc';

export default class MeuPrimeioComponente extends LightningElement {
    greeting = 'World';
    eventoDigitacao(event) {
        this.greeting = event.target.value;
    }
}