import { LightningElement} from 'lwc';

export default class Lifecycle extends LightningElement {

    show = false;
    
    getCurrentTimestampWithMilliseconds()
    {
        const now = new Date();

        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
        const day = now.getDate().toString().padStart(2, '0');

        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const milliseconds = now.getMilliseconds().toString().padStart(3, '0'); // Pad with '0' to ensure 3 digits

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    constructor()
    {
        super();
        console.log('Constructor pai - '+ this.getCurrentTimestampWithMilliseconds());
    }

    handleShowHide()
    {
        this.show = !this.show;
    }

    connectedCallback()
    {
        console.log('connectedCallback do Pai: '+ this.getCurrentTimestampWithMilliseconds());
    }

    disconnectedCallback()
    {
        console.log('disconnectedCallback do Pai: '+ this.getCurrentTimestampWithMilliseconds());
    }

    renderedCallback()
    {
        console.log('renderedCallback do pai - '+ this.getCurrentTimestampWithMilliseconds());
    }
}