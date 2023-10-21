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
                                                   Core.Immutable: true,
                                                   Core.Computed: true,  
                                                   Common.Text : EventText,
                                                   Common.TextArrangement: #TextFirst
                                                   );
                                            EventText @(    Core.Immutable: true,
                                                            Common.Label  : 'Event Name' ); 
};

annotate MacrosService.SourcingProjectHeader with@Capabilities.NavigationRestrictions.RestrictedProperties : [
    { NavigationProperty: 'Item', ReadRestrictions: { Readable: true }, InsertRestrictions :{ Insertable : true } }   
];