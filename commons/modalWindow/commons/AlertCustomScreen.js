var myModal = Ti.UI.createWindow({
    title           : 'My Modal',
    backgroundColor : 'transparent'
});

var wrapperView    = Ti.UI.createView(); // Full screen
var backgroundView = Ti.UI.createView({  // Also full screen
    backgroundColor : '#000',
    opacity         : 0.5
});
var containerView  = Ti.UI.createView({  // Set height appropriately
    height          : 200,
    opacity 		: 1,
    right			: '10dp',
    left			: '10dp',
    
    borderRadius	: '4dp',
    backgroundColor : '#FFF'
});
var footerView  = Ti.UI.createView({  
    height          : 50,
    bottom			: '0dp',
    backgroundColor	: '#C2C2C2',
    width			: Ti.UI.FILL,
    layout			: 'horizontal'
});
var modalTitle      = Ti.UI.createLabel({
    text 	: 'Title goes here',    
    color	:'#000',
    top   : 20
});
var closeButton    = Ti.UI.createLabel({
    text 	 : 'x',
    opacity	 : 1,
    top 	 : '10dp',
    right	 : '10dp'
});
var leftButton    = Ti.UI.createLabel({
    text  		: 'Left Button',
    width		: '50%',
    textAlign	: 'center',
    top			: '12dp',
    color		:'blue'
});
var rightButton    = Ti.UI.createLabel({
    text  		: 'Right Button',
    width		: '50%',
    top			: '12dp',
    textAlign	: 'center',
    color		: 'blue'
});
closeButton.addEventListener('click', function () {
    myModal.close();
});

footerView.add(leftButton);
footerView.add(rightButton);

containerView.add(modalTitle);
containerView.add(footerView);
containerView.add(closeButton);


wrapperView.add(backgroundView);
wrapperView.add(containerView);

myModal.add(wrapperView);
exports.openScreen = function(){
		myModal.open({
	    animate : true
	});
};

