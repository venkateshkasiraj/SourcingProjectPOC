using MacrosService from '../../../srv/gswithdraftservice';
annotate MacrosService.Items with @(UI: {LineItem: [
    {Value: Freetextmaterial},
    {Value: Quantity}
  ]});
  
 annotate MacrosService.Items with  {
          Freetextmaterial @title : 'Free Text Material';   
          Quantity @title : 'Quantity';           
};

annotate MacrosService.EventTypes with {
                                            ID @(  Common.Label           : 'Event Type',
                                                   Common.Text : EventText,
                                                   Common.TextArrangement: #TextFirst
                                                   );
                                            EventText @( Common.Label  : 'Event Name' ); 
};

annotate MacrosService.SourcingProjectHeader with@Capabilities.NavigationRestrictions.RestrictedProperties : [
    { NavigationProperty: 'Item', ReadRestrictions: { Readable: true }, InsertRestrictions :{ Insertable : true } },  
    { NavigationProperty: 'Phase', ReadRestrictions: { Readable: true }, InsertRestrictions :{ Insertable : true } }   
];



annotate MacrosService.Phases {
    nodeID @sap.hierarchy.node.for;
    hierarchyLevel @sap.hierarchy.level.for;
    parentNodeID @sap.hierarchy.parent.node.for;
    drillState @sap.hierarchy.drill.state.for;    
};

annotate MacrosService.Phases with @(
    UI: {
        LineItem: [
            { $Type: 'UI.DataField', Value: Name, Label: 'Name' },
            { $Type: 'UI.DataField', Value: Type, Label: 'Type' },
            { $Type: 'UI.DataField', Value: Status, Label: 'Status' }
        ],
        HeaderInfo: {
            $Type: 'UI.HeaderInfoType',
            TypeName: 'Phase',
            TypeNamePlural: 'Phases'
        }
    }

    
);

 annotate MacrosService.SourcingProjectHeader with @(
    UI: {
        FieldGroup #nametype : {
            Data : [
                { Label: 'Name', Value : Name},
                { Label : 'Description', Value : Description}, 
                { Label : 'Full Project', Value : FullProject},
                { Label : 'Event Type', Value: EventType_ID},                
            ],
        },                        
        Facets  : [
            {
                Label : 'Name and type',
                Target : '@UI.FieldGroup#nametype',
            }
        ]
    }
);

annotate MacrosService.SourcingProjectHeader with{
 @Common.FieldControl: name_fc
 Name;
}
