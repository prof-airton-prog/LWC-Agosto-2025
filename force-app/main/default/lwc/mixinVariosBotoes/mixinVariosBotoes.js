import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class MixinVariosBotoes extends NavigationMixin(LightningElement) {
    
    generatedUrl;

    openAccount() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '001aj00001NabOIAAZ',
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }

    newLead() {
        const defaults = encodeDefaultFieldValues({
            Company: 'Salesforce Training',
            LastName: 'Aluno'
        });

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Lead',
                actionName: 'new'
            },
            state: {defaultFieldValues: defaults}
        });
    }

    goCases() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Case',
                actionName: 'list'
            },
            state: {filterName: 'Recent'}
        });
    }

    openWebSite() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {url: 'https://profairtonprogramming.com.br'}
        });
    }

    generateUrl() {
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '001aj00001NabOKAAZ',
                objectApiName: 'Account',
                actionName: 'view'
            }
        }).then(url => {
            this.generatedUrl = url;
        });
    }
}

