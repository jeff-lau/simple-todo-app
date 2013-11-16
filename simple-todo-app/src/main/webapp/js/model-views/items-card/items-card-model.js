YUI.add('items-card-model', function(Y){
	
	var ItemsCard = Y.Base.create('item-list', Y.Model, [Y.ModelSync.REST], {
		
		root: '/simple-todo-app/webresources/itemlists',
		url: '/simple-todo-app/webresources/itemlists/id/{id}',
		
		idAttribute : '_id',
		
		addItem: function(){
			alert('Add Item');
		},
		
		removeItem: function(){
			alert('Remove Item');
		}
		
	}, {
		
		ATTRS:{
			_id : {value : null},
			objectIdStr : {value : null}, 
			name : {value : null},
			summary : {value : null},
			items : {value : null},
			dateCreated : {value : null}
		}
	});
	
	Y.namespace('simpleTodo').ItemsCard = ItemsCard;
	
}, '0.0.1', {
	requires: ['node', 'model', 'model-sync-rest']
});