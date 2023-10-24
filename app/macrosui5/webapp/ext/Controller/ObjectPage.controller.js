sap.ui.define(
    [
        'sap/fe/core/PageController',
        "sap/fe/core/controllerextensions/EditFlow",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageToast"
    ],
    function(PageController, EditFlow, JSONModel, MessageToast) {
        'use strict';

        return PageController.extend('macrosui5.ext.Controller.ObjectPage', {
            
            onInit: function () { 
                PageController.prototype.onInit.apply(this);
                //
                 this.getAppComponent().getRouter("ObjectPage").attachRoutePatternMatched(this._onRouteMatched, this)
             },

             _onRouteMatched: function (oEvent) {
                var oModel = this.getView().getModel();
                var oMetaModelLoaded = oModel.getMetaModel().requestObject("/SourcingProjectHeader"); 
                oMetaModelLoaded.then(this._onMetadataLoaded.bind(this));
            },

            _onMetadataLoaded: function () {  
                this.getView().getModel("ui").setProperty("/isEditable", true); 
            },

            onSelectProjectType: function (oEvent) {
                var selectedIndex = oEvent.getParameter("selectedIndex"); // will be 0 for "Single Event", 1 for "Full project"
                var bValue = selectedIndex === 1;
                this.byId("_IDGenPanel1").getBindingContext().setProperty("FullProject", bValue);                 
           },
           onPressAction: function (oEvent) {
            MessageToast.show("Custom Action Pressed");
           },
           
           onPressInColumn: function (oEvent) {
            MessageToast.show("Button Pressed");
           },
            saveDocument: function () {
                var that = this;
                this.editFlow.saveDocument(this.getView().getBindingContext()).then(function(){
                    that.getView().getModel("ui").setProperty("/isEditable", false); 
                })
            },

            cancelDocument: async function (oEvent) {
                var oDraftContext = this.getView().getBindingContext(); // get the context of the draft ID

                if (oDraftContext) {
                  oDraftContext.delete("$auto"); // send DELETE request to the draft's endpoint;
                }
                window.history.go(-1); 
                
                // as per guideline not working
                // var that = this;
                // this.editFlow.cancelDocument(this.getView().getBindingContext(), {
                //     control: this.byId("cancelButton")
                // }).then(function(){
                //     that.getView().getModel("ui").setProperty("/isEditable", false);
                    
                // })

                //await this.editFlow.cancelDocument(this.getView().getBindingContext(), { cancelButton: oEvent.getSource() });

               // as per wiki not working 
            //     var oObjectPage = this.byId("CreateSourcingProject"),
            //     oDraftContext = this.getView().getBindingContext();
         
            // function gotoActiveContext(oActiveContext) {
            //     oObjectPage.setBindingContext(oActiveContext);
            //     that.oActiveContext = null; // not needed anymore
            //     oDraftContext.delete("$auto", /*bDoNotRequestCount*/true);
            // }
         
            // if (this.oActiveContext) {
            //     oDraftContext.replaceWith(this.oActiveContext);
            //     gotoActiveContext(this.oActiveContext);
            // } else {
            //     oDraftContext.getModel().bindContext("SiblingEntity(...)", oDraftContext,
            //             {$$inheritExpandSelect : true})
            //         .execute("$auto", false, null, /*bReplaceWithRVC*/false).then(gotoActiveContext);
            // }
            }
        });
    }
);
