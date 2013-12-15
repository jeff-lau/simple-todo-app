YUI.add('model-sync-customrest', function(Y){
	
	var CustomSync = Y.Base.create("customsync");
	
	var CustomSync = Y.Base.mix(CustomSync, Y.ModelSync.REST.prototype);
	

	var temp = function(){}
	temp.prototype = CustomSync;
	Y.namespace('ModelSync').CustomREST = temp;
	
}, '0.0.1', {
	requires: ['node', 'model-list', 'model-sync-rest', 'io']
});