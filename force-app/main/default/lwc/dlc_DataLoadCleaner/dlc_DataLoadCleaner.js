import { LightningElement, api, wire, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord, notifyRecordUpdateAvailable } from 'lightning/uiRecordApi';
import LightningConfirm from 'lightning/confirm';

import USER_ID from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';

export default class Dlc_DataLoadCleaner extends LightningElement {

    @api recordId;
    dataLoad;
    loadingSpinner = true;
    showFileInfo = false;
    file = [];

    showLandingPage = true;
    showNewDataLoadPage = false;
    showLoadDataLoadPage = false;
    showFieldMappingPage = false;
    showPicklistMappingPage = false;
    showSummaryPage = false;
    
}