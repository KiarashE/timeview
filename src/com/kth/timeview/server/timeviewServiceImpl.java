package com.kth.timeview.server;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.kth.timeview.client.timeviewService;

public class timeviewServiceImpl extends RemoteServiceServlet implements timeviewService {
    // Implementation of sample interface method
    public String getMessage(String msg) {
        return "Client said: \"" + msg + "\"<br>Server answered: \"Hi!\"";
    }
}