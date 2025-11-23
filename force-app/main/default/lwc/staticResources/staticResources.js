import { LightningElement } from 'lwc';
import logo from '@salesforce/resourceUrl/LogoLWC';
import pac from '@salesforce/resourceUrl/Pack_LWC';
import pac2 from '@salesforce/resourceUrl/pacote2';

export default class StaticResources extends LightningElement {
    logotipo = logo;
    banner = pac + '/banner_lwc.png';
    banner2 = pac2 + '/pacote/banner_lwc.png';
}