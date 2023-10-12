using { sap.capire.macros as db } from '../db/data-model';
service MacrosService {
    @odata.draft.enabled    
    entity SourcingProjectHeader    as projection on db.SourcingProjectHeader{
        *,
        _NavEventTypes.EventText
    };    
    entity Items                    as projection on db.Items; 
    entity EventTypes                as projection on db.EventTypes;
    entity Templates                 as projection on db.Templates;
}