import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class AbreListViewCase extends NavigationMixin(LightningElement) {

    openRecentCases(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Case',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        });
    }

    openAllClosedCases(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Case',
                actionName: 'list'
            },
            state: {
                filterName: 'AllClosedCases'
            }
        });
    }

    openCustomListView(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Case',
                actionName: 'list'
            },
            state: {
                filterName: 'Teste_Personalizado_de_List_View'
            }
        });
    }
}