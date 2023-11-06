package com.sap.sp.sourcingProjectService.handlers;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.expression.spel.ast.BooleanLiteral;
import org.springframework.stereotype.Component;

import com.sap.cds.services.cds.CdsCreateEventContext;
import com.sap.cds.services.cds.CdsReadEventContext;
import com.sap.cds.services.cds.CqnService;
import com.sap.cds.services.handler.EventHandler;
import com.sap.cds.services.handler.annotations.On;
import com.sap.cds.services.handler.annotations.ServiceName;
@Component
@ServiceName("MacrosService")
public class gswithdraftservice implements EventHandler {
    private Map<Object, Map<String, Object>> SourcingProjectHeader = new HashMap<>();
    @On(event = CqnService.EVENT_READ, entity = "MacrosService.SourcingProjectHeader")
    public void onRead(CdsReadEventContext context) {
    List<Map<String, Object>> result = new ArrayList<>();
    System.out.println( context.toString());
    for (Map<String, Object> entry : SourcingProjectHeader.values()) {
        Map<String, Object> modifiedEntry = new HashMap<>(entry);
        modifiedEntry.put("name_fc", "#ReadOnly");
        result.add(modifiedEntry);
    }
    context.setResult(result);

    }

}
