package com.kth.timeview.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.ui.*;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.http.client.*;
import com.kth.timeview.client.resources.CssResources;
import com.kth.timeview.client.resources.GeneralResources;

import java.util.ArrayList;

/**
 * Entry point classes define <code>onModuleLoad()</code>
 */
public class timeview implements EntryPoint {

    public static GeneralResources resources;
    public static CssResources css;
    public static final String URL = "http://127.0.0.1:5984/schemareport/_design/acttype/_view/actbycode";

    public void onModuleLoad() {

        resources = GeneralResources.INSTANCE; //GWT.create(GeneralResources.class);
        resources.timeviewStyle().ensureInjected();
        css = resources.timeviewStyle();

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
        RootPanel.get("slot3").add(getLocationDropDown());

    }

    public VerticalPanel getLocationDropDown(){
        initRemoteIndata(URL);


        return vpanel;
    }

    public void initRemoteIndata(String url){

        RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, url);


        try {

            Request request = builder.sendRequest(null, new RequestCallback() {
                public void onError(Request request, Throwable exception) {
                    // Couldn't connect to server (could be timeout, SOP violation, etc.)
                    exception.printStackTrace();
                }


                JSONArray jsonArray;
                public void onResponseReceived(Request request, Response response) {
                    if (200 == response.getStatusCode()) {


                        // Process the response in response.getText()
                        JSONValue jsonValue = JSONParser.parseStrict(response.getText());
                        JSONObject jsonObject = jsonValue.isObject();
                        jsonValue = jsonObject.get("rows");
                        jsonArray = jsonValue.isArray();

                        labeldd.setText(jsonArray.toString());

                        ArrayList<String> testArray = new ArrayList<String>();
                        for(int i = 0; i < jsonArray.size(); i++){
                            //System.out.println(jsonArray.get(i).isObject().get("key").isString().stringValue());
                            //System.out.println(jsonArray.get(i).isObject().get("value").isObject().get("name_sv").isString().stringValue());

                            oracle.add(jsonArray.get(i).isObject().get("value").isObject().get("name_sv")
                                    .isString().stringValue());

                            testArray.add(jsonArray.get(i).isObject().get("value").isObject().get("name_sv")
                                    .isString().stringValue());
                        }



                        oracle.setDefaultSuggestionsFromText(testArray);

                        suggestBox = new SuggestBox(oracle);
                        suggestBox.ensureDebugId("cwSuggestBox");
                        suggestBox.setText("Aktivitetstyp");
                        suggestBox.setAutoSelectEnabled(true);

                        vpanel.add(new HTML("Aktivitetstyp"));
                        vpanel.add(suggestBox);





                    } else {
                        // Handle the error.  Can get the status text from response.getStatusText()

                    }
                }
            });
        } catch (RequestException e) {
            // Couldn't connect to server
            e.printStackTrace();
        }


    }



    public final VerticalPanel vpanel = new VerticalPanel();
    public final Label labeldd = new Label();

    public final ArrayList<JSONArray> indataList = new ArrayList<JSONArray>();
    public MultiWordSuggestOracle oracle = new MultiWordSuggestOracle();
    public SuggestBox suggestBox;



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


