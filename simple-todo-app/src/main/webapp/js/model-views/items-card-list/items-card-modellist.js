YUI.add('items-card-modellist', function(Y){
	
	var ItemsCardList = Y.Base.create('item-list', Y.Model, [Y.ModelSync.REST], {
		
		root: '/simple-todo-app/webresources/itemlists/',
		model: Y.simpleTodo.ItemsCard
		
	}, {
		
		ATTRS:{
		}
	});
	
	Y.namespace('simpleTodo').ItemsCardList = ItemsCardList;
	
}, '0.0.1', {
	requires: ['node', 'model-list', 'model-sync-rest']
});