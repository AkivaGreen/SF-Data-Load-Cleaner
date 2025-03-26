import { LightningElement, api, wire, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord, notifyRecordUpdateAvailable } from 'lightning/uiRecordApi';
import LightningConfirm from 'lightning/confirm';

import USER_ID from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';

import getSObjectOptions from '@salesforce/apex/DLC_DataLoadCleanerController.getSObjectOptions';

export default class Dlc_DataLoadCleaner extends LightningElement {

    @api recordId;
    dataLoad;
    loadingSpinner = false;
    showFileInfo = false;
    file = [];

    showLandingPage = true;
    showNewDataLoadPage = false;
    showLoadDataLoadPage = false;
    showFieldMappingPage = false;
    showPicklistMappingPage = false;
    showSummaryPage = false;
    error = {
        display: false,
        title: '',
        message: ''
    };

    sObjectOptions = [];

    setSObjectOptions(){
        getSObjectOptions().then(result => {
            if(result.length > 0){
                for(let i = 0; i < result.length; i++){
                    this.sObjectOptions.push({label: result[i], value: result[i]});
                }
            }
        });
    }

    startSpinner(){
        this.loadingSpinner = true;
    }

    stopSpinner(){
        this.loadingSpinner = false;
    }

    handleNewDataLoad() {
        this.startSpinner();

        this.showLandingPage = false;
        this.setSObjectOptions();
        this.showNewDataLoadPage = true;

        this.stopSpinner();
    }

    handleLoadDataLoad() {
        this.startSpinner();

        this.showLandingPage = false;
        this.showLoadDataLoadPage = true;

        this.stopSpinner();
    }
    
}