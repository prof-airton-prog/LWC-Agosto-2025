import { LightningElement } from 'lwc';
import wel from '@salesforce/label/c.Welcome_Message';
import decl from '@salesforce/label/c.Declaration';
import warn from '@salesforce/label/c.Legal_Warning';
import title from '@salesforce/label/c.TituloCustomLabels';
import buttonText from '@salesforce/label/c.Button_Text';

export default class LabelsCustom extends LightningElement {
    label = {
        wel,
        decl,
        warn,
        title,
        buttonText
    };
}

