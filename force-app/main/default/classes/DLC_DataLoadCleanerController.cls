public with sharing class DLC_DataLoadCleanerController {
    public DLC_DataLoadCleanerController() {

    }

    @AuraEnabled
    public static List<String> getSObjectOptions() {
        return DLC_SchemaService.getSObjectOptions();
    }
}