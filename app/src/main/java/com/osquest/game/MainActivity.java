package com.osquest.game;
import android.app.Activity; import android.os.Bundle; import android.webkit.WebView; import android.view.View;
public class MainActivity extends Activity {
 WebView web;
 @Override public void onCreate(Bundle b){super.onCreate(b); web=new WebView(this); web.getSettings().setJavaScriptEnabled(true); web.getSettings().setDomStorageEnabled(true); web.getSettings().setAllowFileAccessFromFileURLs(false); web.getSettings().setAllowUniversalAccessFromFileURLs(false); web.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE); setContentView(web); web.loadUrl("file:///android_asset/index.html");}
 @Override public void onBackPressed(){web.evaluateJavascript("home()",null);}
}
