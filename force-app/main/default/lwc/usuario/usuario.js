import { LightningElement } from 'lwc';
import ident from '@salesforce/user/Id';
import convidado from '@salesforce/user/isGuest';
export default class Usuario extends LightningElement {
    userId;
    tipo;

    tipoUsuario(){
        if(convidado){
            this.tipo = 'É convidado';
            this.userId = '';
        }else{
            this.tipo = 'Não é convidado';
            this.userId = ident;
        }
    }

    connectedCallback(){ //hook
        this.tipoUsuario();
    }
}