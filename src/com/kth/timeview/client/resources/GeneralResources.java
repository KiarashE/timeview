package com.kth.timeview.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;

/**
 * Created by Kiarash on 2014-09-08.
 */
public interface GeneralResources extends ClientBundle {
    public static final GeneralResources INSTANCE = GWT.create(GeneralResources.class);

    @Source("timeview.css")
    public CssSource timeviewStyle();


}
