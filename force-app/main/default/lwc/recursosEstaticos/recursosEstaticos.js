import { LightningElement } from 'lwc';
import pacote from '@salesforce/resourceUrl/salesforcepackage';
import logo from '@salesforce/resourceUrl/sales_logo';
export default class RecursosEstaticos extends LightningElement {
    logotipo = logo;
    icon = pacote + '/salesforce_icon.jpg';
}