// common script for IOS and ANDROID
var shareTextEmailSubjext_CrossPlatform;
var emailDialog = Ti.UI.createEmailDialog();
emailDialog.subject = "subject text";
emailDialog.messageBody = "messsahe text";
emailDialog.open();
