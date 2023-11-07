package com.sap.sp.sourcingProjectService.handlers;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.expression.spel.ast.BooleanLiteral;
import org.springframework.stereotype.Component;

import com.sap.cds.CdsDataProcessor;
import com.sap.cds.Result;
import com.sap.cds.ql.Select;
import com.sap.cds.ql.cqn.CqnAnalyzer;
import com.sap.cds.ql.cqn.CqnSelect;
import com.sap.cds.reflect.CdsModel;
import com.sap.cds.reflect.CdsService;
import com.sap.cds.services.cds.CdsCreateEventContext;
import com.sap.cds.services.cds.CdsReadEventContext;
import com.sap.cds.services.cds.CqnService;
import com.sap.cds.services.draft.DraftService;
import com.sap.cds.services.handler.EventHandler;
import com.sap.cds.services.handler.annotations.After;
import com.sap.cds.services.handler.annotations.On;
import com.sap.cds.services.handler.annotations.Before;
import com.sap.cds.services.handler.annotations.ServiceName;
import com.sap.cds.services.persistence.PersistenceService;

import cds.gen.macrosservice.MacrosService_;
import cds.gen.macrosservice.SourcingProjectHeader;
import cds.gen.macrosservice.SourcingProjectHeader_;
@Component
@ServiceName("MacrosService")
public class gswithdraftservice implements EventHandler {

    // private final DraftService draftService;
    private final PersistenceService db;
    private final CqnAnalyzer analyzer;

    // private Map<Object, Map<String, Object>> SourcingProjectHeader = new HashMap<>();

        public gswithdraftservice(PersistenceService db, CdsModel model) {
            // this.draftService = draftService;
            this.db = db;
            this.analyzer = CqnAnalyzer.create(model);
    }

    @After(event = CqnService.EVENT_READ, entity = "MacrosService.SourcingProjectHeader")
    public void onRead(CdsReadEventContext context) {
        Result result = context.getResult();
        List<SourcingProjectHeader> resultList = result.listOf(SourcingProjectHeader.class);
        if (resultList.isEmpty()) {
            // The result is empty
            System.out.println("No records found for 'MacrosService.SourcingProjectHeader'");
            // Handle empty result as needed, e.g. throw an exception, return a default value, etc.
        }
        System.out.println(resultList);
       /*  CqnSelect select = Select.from(MacrosService_.SOURCING_PROJECT_HEADER);
Result results = db.run(select);

List<SourcingProjectHeader> resultList = results.listOf(SourcingProjectHeader.class);
*/
for (SourcingProjectHeader header : resultList) {
    header.setNameFc("1");
}
        //List<Map<String, Object>> result = new ArrayList<>();
   /* context.getModel().entities().forEach(e -> {
        if(e.toString().equals("MacrosService.SourcingProjectHeader")) {
            e.elements().forEach(el -> {
                System.out.println(el.getName());
            });
        }
        
    });*/
        // (context.getModel().getEntity(SourcingProjectHeader_.CDS_NAME)).put("name_fc", "#ReadOnly");
        //result.add(project);
        //context.setResult(result);
        //CdsDataProcessor processor = CdsDataProcessor.create();
        /*try {
            String projectHeaderId = (String) analyzer.analyze(context.getCqn()).targetKeys().get(SourcingProjectHeader.ID);
            System.out.println(projectHeaderId);
            if(projectHeaderId != null) {
                //CqnSelect selectResult = Select.cqn(context.getCqn().toJson());
                //Result res = db.run(selectResult);
                
                List<SourcingProjectHeader> res = db.run(context.getCqn()).listOf(SourcingProjectHeader.class);
                //CqnSelect fullquery = Select.from(SourcingProjectHeader_.CDS_NAME).columns(o -> o._all()).where(a -> a.get(SourcingProjectHeader.ID).eq(projectHeaderId).and(a.get(SourcingProjectHeader.IS_ACTIVE_ENTITY).eq(false)));
               //List<SourcingProjectHeader> res = db.run(fullquery).listOf(SourcingProjectHeader.class);
                System.out.println("response ================>" + res);
                if(!res.isEmpty()) {
                res.forEach(records -> {
                    if(records != null) {
                        records.setNameFc("#ReadOnly");
                    }
                });
                context.setResult(res);
                }
                }
        } catch(Exception e) {
            e.printStackTrace();
        }*/
        /*if(header != null) {
            header.setNameFc("#ReadOnly");
        }*/
        //processor.process(res)
        //SourcingProjectHeader project = res.first(SourcingProjectHeader.class).get();

        /*CqnSelect fullquery = Select.from(SourcingProjectHeader_.CDS_NAME).columns(o -> o._all()).where(a -> a.get(SourcingProjectHeader.ID).eq(projectHeaderId));
        SourcingProjectHeader project = draftService.run(fullquery).single(SourcingProjectHeader.class);*/
       /* project.put("name_fc", "#ReadOnly");
        result.add(project);
        context.setResult(result);*/
    
    /**/

    }

}
