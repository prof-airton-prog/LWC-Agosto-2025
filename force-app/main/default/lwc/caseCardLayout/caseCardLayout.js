import { LightningElement } from 'lwc';

export default class CaseCardLayout extends LightningElement {

    notifyParent(){
        this.dispatchEvent(
            new CustomEvent('cardaction', {
                detail: {
                    message: 'Ação solicitada no layout container filho'
                }
            })
        );
    }
}