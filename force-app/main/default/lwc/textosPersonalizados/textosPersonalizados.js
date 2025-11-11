import { LightningElement } from 'lwc';
import saudacao from '@salesforce/label/c.MensagemBemVindo';
import declaracao from '@salesforce/label/c.Declaracao';
import aviso from '@salesforce/label/c.Aviso_Legal';
import titulo from '@salesforce/label/c.Titulo_Principal';
export default class TextosPersonalizados extends LightningElement {
    label = {
        saudacao,
        declaracao,
        aviso,
        titulo
    }
}