public with sharing class DLC_SchemaService {
    public DLC_SchemaService() {

    }

    public static List<String> getSObjectOptions() {
        List<String> sObjectOptions = new List<String>();

        Map<String, Schema.SObjectType> schemaMap = Schema.getGlobalDescribe();

        for(String sObjectName : schemaMap.keySet()) {
            sObjectOptions.add(sObjectName);
        }

        sObjectOptions.sort();

        return sObjectOptions;
    }
}