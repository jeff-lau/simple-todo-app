YUI.add('items-card-model', function(Y){
	
	var ItemsCard = Y.Base.create('item-list', Y.Model, [Y.ModelSync.REST], {
		
		root: '/simple-todo-app/webresources/itemlists/',
		url: '/simple-todo-app/webresources/itemlists/id/{_id}'
			
	}, {
		
		ATTRS:{
			_id : {value : null},
			objectIdStr : {value : null}, 
			name : {value : null},
			summary : {value : null},
			items : {value : null},
			dateCreated : {value : null},
			someRandom : {value : null},
			partialObject : {value : null}
		}
	});
	
	
	Y.namespace('simpleTodo').ItemsCard = ItemsCard;
	
}, '0.0.1', {
	requires: ['node', 'model', 'model-sync-rest']
});