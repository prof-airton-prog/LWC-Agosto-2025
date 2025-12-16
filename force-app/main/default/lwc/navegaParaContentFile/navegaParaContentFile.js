import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
//https://brave-narwhal-ffqn0i-dev-ed.trailblaze.my.salesforce.com/sfc/p/aj00000YHmO2/a/aj0000009iuf/DZLWI2tvVxnaRCEuR_5rgpmP3Tz8jJIVc9K.5WWbKwE
export default class NavegaEntreTabs extends NavigationMixin(LightningElement) {

    openWebSite(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://brave-narwhal-ffqn0i-dev-ed.trailblaze.my.salesforce.com/sfc/p/aj00000YHmO2/a/aj0000009iuf/DZLWI2tvVxnaRCEuR_5rgpmP3Tz8jJIVc9K.5WWbKwE'
            }
        });
    }
}