package com.kth.timeview.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

@RemoteServiceRelativePath("timeviewService")
public interface timeviewService extends RemoteService {
    // Sample interface method of remote interface
    String getMessage(String msg);

    /**
     * Utility/Convenience class.
     * Use timeviewService.App.getInstance() to access static instance of timeviewServiceAsync
     */
    public static class App {
        private static timeviewServiceAsync ourInstance = GWT.create(timeviewService.class);

        public static synchronized timeviewServiceAsync getInstance() {
            return ourInstance;
        }
    }
}
