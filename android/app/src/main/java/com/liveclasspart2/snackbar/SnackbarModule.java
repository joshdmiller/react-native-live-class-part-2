package com.liveclasspart2.snackbar;

import android.support.design.widget.Snackbar;
import android.app.Activity;
import android.view.View;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class SnackbarModule extends ReactContextBaseJavaModule {
  private static final String DURATION_INDEFINITE_KEY = "INDEFINITE";
  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  private View rootView = null;

  public SnackbarModule( ReactApplicationContext reactContext, Activity activity ) {
    super( reactContext );

    rootView = activity.getWindow().getDecorView().getRootView();
  }

  @Override
  public String getName () {
    return "SnackbarAndroid";
  }

  @Override
  public Map<String, Object> getConstants () {
    final Map<String, Object> constants = new HashMap<>();

    constants.put( DURATION_INDEFINITE_KEY, Snackbar.LENGTH_INDEFINITE );
    constants.put( DURATION_SHORT_KEY, Snackbar.LENGTH_SHORT );
    constants.put( DURATION_LONG_KEY, Snackbar.LENGTH_LONG );

    return constants;
  }

  @ReactMethod
  public void show( String message, int duration ) {
    Snackbar.make( rootView, message, duration ).show();
  }
}

