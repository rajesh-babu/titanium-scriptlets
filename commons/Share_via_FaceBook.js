try {
							// see https://gist.github.com/oroce/1334424
			var intFB = Ti.Android.createIntent({
	        action: Ti.Android.ACTION_SEND,
	        packageName: "com.facebook.katana",
	        className: "com.facebook.katana.ShareLinkActivity",
	        flags: 0x30000000,
	        type: "text/plain"
			});
			intFB.putExtra( Ti.Android.EXTRA_TEXT, 'shareurl'); //facebook only supports LINKS(!!!)
			intFB.addCategory( Ti.Android.CATEGORY_LAUNCHER );
			Ti.Android.currentActivity.startActivity( intFB );
		}
		catch(ee){
			try {
				var intFB1 = Ti.Android.createIntent({
					action : Ti.Android.ACTION_SEND,
					packageName : "com.facebook.katana",
					className : "com.facebook.composer.shareintent.ImplicitShareIntentHandler",
					flags : 0x30000000,
					type : "text/plain"
				});
				intFB1.putExtra(Ti.Android.EXTRA_TEXT, shareTextFB_Android);
				intFB1.addCategory(Ti.Android.CATEGORY_LAUNCHER);
				Ti.Android.currentActivity.startActivity(intFB1);
			} catch (EE) {
				var intFB2 = Ti.Android.createIntent({
					action : Ti.Android.ACTION_SEND,
					type : "text/plain"
				});
				intFB2.putExtra(Ti.Android.EXTRA_TEXT, shareurl);
				Ti.Android.currentActivity.startActivity(intFB2);
			}
		}
