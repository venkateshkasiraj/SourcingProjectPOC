sap.ui.define(
    [
        'sap/fe/core/PageController',
        "sap/fe/core/controllerextensions/EditFlow"
    ],
    function(PageController, EditFlow) {
        'use strict';

        return PageController.extend('macrosui5.ext.Controller.ObjectPage', {
            
            onInit: function () { 
                PageController.prototype.onInit.apply(this);
                // this.getAppComponent().getRouter("ObjectPage").attachRoutePatternMatched(this._onRouteMatched, this)
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

                // var that = this;
                // this.editFlow.cancelDocument(this.getView().getBindingContext(), {
                //     control: this.byId("cancelButton")
                // }).then(function(){
                //     that.getView().getModel("ui").setProperty("/isEditable", false);
                    
                // })

                //await this.editFlow.cancelDocument(this.getView().getBindingContext(), { cancelButton: oEvent.getSource() });


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
            },
             _onRouteMatched: function (oEvent) {
                // this.sID = oEvent.getParameter("arguments").ID;
                // this.sIsActiveEntity= oEvent.getParameter("arguments").IsActiveEntity;
                // this.sPath = '/SourcingProjectHeader(ID={sID},IsActiveEntity={sIsActiveEntity})';
                // this.sPath = this.sPath.replace("{sID}", this.sID);
                // this.sPath = this.sPath.replace("{sIsActiveEntity}", this.sIsActiveEntity);

                // var oModel = this.getView().getModel();
                // var oMetaModelLoaded = oModel.getMetaModel().requestObject("/SourcingProjectHeader"); 
                // oMetaModelLoaded.then(this._onMetadataLoaded.bind(this));

                
                              
                // var oModel = this.getView().getModel();
 
                // var  oContext = this.getView().getModel().createBindingContext(this.sPath) 
                // // this.getView().getModel().getKeepAliveContext(this.sPath, false,
                // //         {$$patchWithoutSideEffects : true});      
                // this.getView().setBindingContext(oContext); 
            },
            _onMetadataLoaded: function () {  
  
                //  this.getView().bindElement({
                //      path: this.sPath
                //  }); 
            }

        });
    }
);
