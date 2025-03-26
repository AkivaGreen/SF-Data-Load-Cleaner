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

    disableDataLoadBtns = true;
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

    sObject;
    sObjectOptions = [];

    setSObjectOptions(){
        console.log('setSObjectOptions()');
        getSObjectOptions().then(result => {
            console.log('result.length',result.length);
            if(result.length > 0){
                for(let i = 0; i < result.length; i++){
                    this.sObjectOptions.push(result[i]);
                }
            }
            console.log('sObjectOptions',this.sObjectOptions[0]);
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
        this.showNewDataLoadPage = true;

        this.stopSpinner();
    }

    handleLoadDataLoad() {
        this.startSpinner();

        this.showLandingPage = false;
        this.showLoadDataLoadPage = true;

        this.stopSpinner();
    }

    handleSObjectBlur(event){
        console.log('handleSObjectBlur()');
        if(this.sObject != event.target.value){
            this.sObject = event.target.value;
            console.log('sObject',this.sObject);
            this.validateSObject();
        }
    }
    
    validateSObject() {
        console.log('validateSObject');
        let validSObject = false;

        if(this.sObject != undefined || this.sObject != ''){
            this.setSObjectOptions();
            validSObject = this.sObjectOptions.includes(this.sObject);
        }
        console.log('validSObject', validSObject);
        
        if(validSObject){
            this.disableDataLoadBtns = false;
        } else {
            this.disableDataLoadBtns = true;
        }
    }
}