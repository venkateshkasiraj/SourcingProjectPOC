sap.ui.define(
    [
        'sap/fe/core/PageController'
    ],
    function(PageController) {
        'use strict';

        return PageController.extend('macrosui5.ext.main.Main', {
            
            onInit: function () {   
                PageController.prototype.onInit.apply(this);       
                // setTimeout(() => { this.onCreate();                     
                // }, 1);
                

                  this.getAppComponent().getRouter("SourcingProjectHeaderMain").attachRoutePatternMatched(this._onRouteMatched, this);
              },

              _onRouteMatched: function (oEvent) {
                var oModel = this.getView().getModel();
                var oMetaModelLoaded = oModel.getMetaModel().requestObject("/SourcingProjectHeader"); 
                oMetaModelLoaded.then(this._onMetadataLoaded.bind(this));

            },
            _onMetadataLoaded: function () {   
                if(this._createDone)
                {}
                else{
                    var that = this;
                    this._createDone = true;
                    const listBinding = this.getAppComponent().getModel().bindList("/SourcingProjectHeader");
                    this.editFlow.createDocument(listBinding, {
                        creationMode: "NewPage"
                    });
                    // var oContext = listBinding.create({ });
                    // var that = this;    
                    // oContext.created().then(function() {
                    //                         that.getView().setBindingContext(oContext);
                    //                         var sID = oContext.getValue().ID;
                    //                         var sIsActiveEntity = oContext.getValue().IsActiveEntity;

                    //                         that.getExtensionAPI().routing.navigateToRoute("ObjectPage", {  ID: sID, 
                    //                                                                                         IsActiveEntity: sIsActiveEntity });
                    //                         }); 
                };


                // var oModel = this.getView().getModel();
                // var oListBinding = oModel.bindList("/SourcingProjectHeader");
                // var oContext = oListBinding.create({Name: 'Project Name Dummy',
                //                                 FullProject: true});
                // debugger;
               
                //                                                 // Do not forget to mention default values on screen for radio button/check box. otherwise it will be stored as null
                //  var that = this;
                //  oContext.created().then(function() {
                //                          that.getView().setBindingContext(oContext);
                //                          var sID = oContext.getValue().ID;
                //                          var sIsActiveEntity = oContext.getValue().IsActiveEntity;

                //                          that.getExtensionAPI().routing.navigateToRoute("ObjectPage", {  ID: sID, 
                //                                                                                          IsActiveEntity: sIsActiveEntity });
                //                          }); 
              
                
                
                 
            },
            
            
            
            
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf macrosui5.ext.main.Main
             */
            //  onInit: function () {
            //
            //  },

            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf macrosui5.ext.main.Main
             */
              onBeforeRendering: function() {
                
              },
 
              onCreate : function() {
                var oModel = this.getView().getModel();
                var oListBinding = oModel.bindList("/SourcingProjectHeader");
                
                var oContext = oListBinding.create({Name: 'Project Name Dummy',
                                                FullProject: true});
                                                
                debugger;
                                                                // Do not forget to mention default values on screen for radio button/check box. otherwise it will be stored as null
                 var that = this;
                 oContext.created().then(function() {
                                         that.getView().setBindingContext(oContext);
                                         var sID = oContext.getValue().ID;
                                         var sIsActiveEntity = oContext.getValue().IsActiveEntity;
                                         //oContext.setKeepAlive(true); 
                                         that.getExtensionAPI().routing.navigateToRoute("ObjectPage", {  ID: sID, 
                                                                                                         IsActiveEntity: sIsActiveEntity });
                                         }); 
              },
            /**
             * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
             * This hook is the same one that SAPUI5 controls get after being rendered.
             * @memberOf macrosui5.ext.main.Main
             */
            //  onAfterRendering: function() {
            //
            //  },

            /**
             * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
             * @memberOf macrosui5.ext.main.Main
             */
            //  onExit: function() {
            //
            //  }
        });
    }
);
