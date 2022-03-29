package com.baeldung.springsoap;

import com.baeldung.springsoap.gen.*;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class CalculatorEndpoint {

    private static final String NAMESPACE_URI = "http://www.baeldung.com/springsoap/gen";

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "calculatorRequest")
    @ResponsePayload
    public CalculatorResponse calculator(@RequestPayload CalculatorRequest request) {
        CalculatorResponse response = new CalculatorResponse();
        Calculator calculator = new Calculator(request.getA(),request.getB(),request.getOperator());
        response.setResult(calculator.calc());
        return response;
    }
}