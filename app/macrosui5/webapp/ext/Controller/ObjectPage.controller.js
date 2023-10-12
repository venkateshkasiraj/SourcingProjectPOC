sap.ui.define(
    [
        'sap/fe/core/PageController'
    ],
    function(PageController) {
        'use strict';

        return PageController.extend('macrosui5.ext.Controller.ObjectPage', {
            
            onInit: function () { 
                this.getRouter().getRoute("Header").attachPatternMatched(this._onRouteMatched, this);
             },
             _onRouteMatched: function (oEvent) {
                this.sPath = "/" + oEvent.getParameter("arguments").sPath;
                debugger;               
                var oModel = this.getView().getModel();
                  var  oContext = this.getView().getModel().getKeepAliveContext(this.sPath, false,
                        {$$patchWithoutSideEffects : true});      
                this.getView().setBindingContext(oContext); 
            }
        });
    }
);
