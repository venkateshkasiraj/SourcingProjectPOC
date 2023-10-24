using MacrosService from '../../../srv/gswithdraftservice';
annotate MacrosService.SourcingProjectHeader with {
                                EventType_ID @(
                                                      Core.Computed: true,  
                                                      Common.Label: 'Event Type',
                                                      Common.ValueListWithFixedValues: true,  
                                                      Common.Text : EventText,
                                                      Common.TextArrangement: #TextFirst,                                                    
                                                Common.ValueList: {
                                                    Label: 'Event Type',
                                                    CollectionPath: 'EventTypes',
                                                    Parameters: [
                                                        { $Type: 'Common.ValueListParameterInOut',
                                                            LocalDataProperty: EventType_ID,
                                                            ValueListProperty: 'ID'
                                                        },
                                                        {
                                                            $Type            : 'Common.ValueListParameterOut',
                                                            ValueListProperty: 'EventText',
                                                            LocalDataProperty: EventText
                                                        }
                                                    ]
                                    }
                                );
                                Template_ID @(
                                                      Core.Computed: true,  
                                                      Common.Label: 'Template',                                                                                                       
                                                Common.ValueList: {
                                                    Label: 'Templates',
                                                    CollectionPath: 'Templates',
                                                    Parameters: [
                                                        { $Type: 'Common.ValueListParameterInOut',
                                                            LocalDataProperty: Template_ID,
                                                            ValueListProperty: 'ID'
                                                        },
                                                        {
                                                            $Type            : 'Common.ValueListParameterOut',
                                                            ValueListProperty: 'Name'                                                            
                                                        },
                                                        {
                                                            $Type            : 'Common.ValueListParameterInOut',
                                                            LocalDataProperty: EventType_ID,
                                                            ValueListProperty: 'EventType_ID'                                                            
                                                        }
                                                    ]
                                    }
                                );
                                EventText @( Core.Computed: true,  
                                             Common.Label: 'Event Text');  

};

annotate MacrosService.Templates with {
                                            ID @(  Common.Label           : 'Template ID',
                                                   Core.Immutable: true,
                                                   Core.Computed: true,  
                                                   );
                                            Name @(    Core.Immutable: true,
                                                            Common.Label  : 'Template Name' );
                                            EventType_ID @(
                                                      Core.Computed: true,  
                                                      Common.Label: 'Event Type',
                                                      Common.ValueListWithFixedValues: true,  
                                                      Common.Text : EventText,
                                                      Common.TextArrangement: #TextFirst,                                                    
                                                Common.ValueList: {
                                                    Label: 'Event Type',
                                                    CollectionPath: 'EventTypes',
                                                    Parameters: [
                                                        { $Type: 'Common.ValueListParameterInOut',
                                                           LocalDataProperty: EventType_ID,  
                                                           ValueListProperty: 'ID'
                                                        }
                                                    ]
                                    }
                                );                 

};
