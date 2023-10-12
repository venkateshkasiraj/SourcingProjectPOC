namespace sap.capire.macros;
using { cuid, Language, managed } from '@sap/cds/common';

entity EventTypes {
   key ID : String(4);
       EventText : String(30);    

};
entity Templates{
   key ID : String(15);
       Name     : String(45);
       EventType_ID: String(4);
       EventType: Association to EventTypes on EventType.ID = EventType_ID;   
};
entity Items : cuid, managed {
          Freetextmaterial : String(50);
          Quantity         : String(10);
          Parent   : Association to SourcingProjectHeader; 
};
entity SourcingProjectHeader : cuid, managed {
            Name              : String(87) ;
            Description       : String;
            FullProject       : Boolean;
            TestProject       : Boolean;
            PlannedState      : Boolean;
            EventType_ID      : String(4);
            PredecssorOBjID   : String(15); 	        
	        Origin            : String(30); 	 
            Owner             : String(60);
            Language          : Language;
            Template_ID       : String(15);
            Template          : Association to Templates on Template.ID = Template_ID and Template.EventType_ID = EventType_ID; 
            Item             : Composition of many Items on Item.Parent = $self;
            _NavEventTypes    : Association to EventTypes
                                          on _NavEventTypes.ID = EventType_ID;  
};
