var data = [];
data.push({
			template : 'usersOptionTemplate',
			userdID	 : 1
});
jobResLV.addEventListener('itemclick', function(e){

    if (e.bindId == 'but1' ) {
        var item = e.section.getItemAt(e.itemIndex);
		Ti.API.info('You have Clicked the userID'+item.userID);
    }      
});
$.section.setItems(data);
$.index.open();

