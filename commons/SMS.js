	if (OS_IOS) {
		var module = require('com.omorandi');

		//create the smsDialog object
		var smsDialog = module.createSMSDialog();
		//check if the feature is available on the device at hand
		if (!smsDialog.isSupported()) {
			//falls here when executed on iOS versions < 4.0 and in the emulator
			var a = Ti.UI.createAlertDialog({
				title : 'warning',
				message : 'the required feature is not available on your device'
			});
			a.show();
		} else {
			//pre-populate the dialog with the info provided in the following properties
			//smsDialog.recipients = ['+<phone number>'];
			var shareTextTW_IOS;
			smsDialog.messageBody = "SMS content";

			//add an event listener for the 'complete' event, in order to be notified about the result of the operation
			smsDialog.addEventListener('complete', function(e) {
				Ti.API.info("Result: " + e.resultMessage);
				/*var a = Ti.UI.createAlertDialog({
				 title : 'complete',
				 message : 'Result: ' + e.resultMessage
				 });
				 a.show();*/
				if (e.result == smsDialog.SENT) {
					//do something
				} else if (e.result == smsDialog.FAILED) {
					//do something else
				} else if (e.result == smsDialog.CANCELLED) {
					//don't bother
				}
			});

			//open the SMS dialog window with slide-up animation
			smsDialog.open({
				animated : true
			});

		}
	} else if (OS_ANDROID) {
		try {
			// see https://gist.github.com/tzmartin/1018258
			var shareSMSIntent = Ti.Android.createIntent({
				action : Ti.Android.ACTION_VIEW,
				type : 'vnd.android-dir/mms-sms'
			});
			shareSMSIntent.putExtra('sms_body', "sms content");
			Ti.Android.currentActivity.startActivity(shareSMSIntent);
			Alloy.Globals.activityIndicator.hide();
		} catch (EE) {
			alert("Sorry, SMS is not enabled on this device.");
		}		
	}
