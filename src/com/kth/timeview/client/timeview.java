package com.kth.timeview.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.core.client.JsonUtils;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.DOM;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.http.client.*;

/**
 * Entry point classes define <code>onModuleLoad()</code>
 */
public class timeview implements EntryPoint {

    /**
     * This is the entry point method.
     */
    public void onModuleLoad() {
        final Button button = new Button("Click me");
        final Label label = new Label();

        button.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                if (label.getText().equals("")) {
                    timeviewService.App.getInstance().getMessage("Hello, World!", new MyAsyncCallback(label));
                } else {
                    label.setText("");
                }
            }
        });

        // Assume that the host HTML has elements defined whose
        // IDs are "slot1", "slot2".  In a real app, you probably would not want
        // to hard-code IDs.  Instead, you could, for example, search for all
        // elements with a particular CSS class and replace them with widgets.
        //
        RootPanel.get("slot1").add(button);
        RootPanel.get("slot2").add(label);
        RootPanel.get("slot3").add(getTest());
    }


    public final Label getTest(){

        String url = "http://127.0.0.1:5984/schemareport/_design/acttype/_view/actbycode";
        RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, url);

        final Label label = new Label("halo halo");

        try {

            Request request = builder.sendRequest(null, new RequestCallback() {
                public void onError(Request request, Throwable exception) {
                    // Couldn't connect to server (could be timeout, SOP violation, etc.)
                    exception.printStackTrace();
                }

                public void onResponseReceived(Request request, Response response) {
                    if (200 == response.getStatusCode()) {
                        // Process the response in response.getText()

                        System.out.println("#######test2 " + response.getText());
                    } else {
                        // Handle the error.  Can get the status text from response.getStatusText()
                        System.out.println("########test3 " + response.getStatusText());
                        System.out.println("########alotest ");

                    }

                    System.out.println("vad det fuck. something should happen");
                    JSONValue jsonValue = JSONParser.parseStrict(response.getText());
                    JSONObject jsonObject = jsonValue.isObject();
                    jsonValue = jsonObject.get("rows");
                    JSONArray jsonArray = jsonValue.isArray();




                    label.setText(jsonArray.toString());
                }
            });
        } catch (RequestException e) {
            // Couldn't connect to server
            e.printStackTrace();
        }
        System.out.println("#######test4");



        return label;
    }









    private static class MyAsyncCallback implements AsyncCallback<String> {
        private Label label;

        public MyAsyncCallback(Label label) {
            this.label = label;
        }

        public void onSuccess(String result) {
            label.getElement().setInnerHTML(result);
        }

        public void onFailure(Throwable throwable) {
            label.setText("Failed to receive answer from server!");
        }
    }
}