package com.kth.timeview.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface timeviewServiceAsync {
    void getMessage(String msg, AsyncCallback<String> async);
}
