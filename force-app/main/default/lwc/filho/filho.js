import { LightningElement, api } from 'lwc';

export default class Filho extends LightningElement {
    @api detalhesDoCurso;

    handleIngressar() {
        this.dispatchEvent(new CustomEvent('ingressar', {
            detail: this.detalhesDoCurso
        }));
    }
}