namespace sap.capire.macros;
using { cuid, Language, Currency, managed } from '@sap/cds/common';

entity EventTypes {
   key ID        : String(4);
       EventText : String(30);    

};
entity Templates{
   key ID : String(15);
       Name        : String(45);
       EventType_ID: String(4);
       EventType   : Association to one EventTypes on EventType.ID = EventType_ID;   
};
@Capabilities: { Readable:true, Insertable:true, Updatable:true, Deletable:true }
entity Items : cuid, managed {
          Freetextmaterial : String(50);
          Quantity         : String(10);
          Parent           : Association to one SourcingProjectHeader; 
};

entity Phases : cuid {
        nodeID: Integer;
        hierarchyLevel: Integer;
        parentNodeID: Integer;
        drillState: String;
        Name : String(30);
        Type : String(30);
        Status : String(10);
        SrcPrjHdr : Association to one SourcingProjectHeader; 
}

 @Capabilities: { Readable:true, Insertable:true, Updatable:true, Deletable:true }
entity SourcingProjectHeader : cuid, managed {
            Name              : String(87);                        
            Description       : String;
            FullProject       : Boolean;
            TestProject       : Boolean;
            PlannedState      : Boolean;                        
            EventType_ID      : String(4) ;
            PredecssorOBjID   : String(15); 	        
	        Origin            : String(30); 	 
            Owner             : String(60);
            Language          : Language;
            Commodities       : String(60);
            Regions           : String(60);
            Departments       : String(60);
            BaselineSpendAmt  : Decimal(15,2); 
            BaselineSpend     : Currency;
            Factory           : String(60);
            Color             : String(60);
            TransactionDate   : Date;             
            ExternalSystem    : String(80);
            Template_ID       : String(15);
            Template          : Association to one Templates  on Template.ID = Template_ID and 
                                                             Template.EventType_ID = EventType_ID;                                                                     
            Item              : Composition of many Items on Item.Parent = $self;

            Phase             : Composition of many Phases on Phase.SrcPrjHdr = $self;
            EventType         : Association to one EventTypes
                                            on EventType.ID = EventType_ID;  
            
            virtual name_fc : String(20);                                            
};
