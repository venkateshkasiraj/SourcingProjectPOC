using { sap.capire.macros as db } from '../db/data-model';
service MacrosService {
    @odata.draft.enabled    
    entity SourcingProjectHeader    as projection on db.SourcingProjectHeader{
        *,
        EventType.EventText
    };    
    entity Items                    as projection on db.Items; 
    entity Phases                   as projection on db.Phases; 
    entity EventTypes               as projection on db.EventTypes;
    entity Templates                as projection on db.Templates;
}