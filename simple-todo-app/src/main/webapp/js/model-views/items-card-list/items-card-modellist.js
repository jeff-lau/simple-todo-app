YUI.add('items-card-modellist', function(Y){
	
	var ItemsCardList = Y.Base.create('item-list', Y.ModelList, [Y.ModelSync.REST], {
		
		root: '/simple-todo-app/webresources/itemlists/',
		url: '/simple-todo-app/webresources/itemlists/',
		model: Y.simpleTodo.ItemsCard
		
	});
	
	Y.namespace('simpleTodo').ItemsCardList = ItemsCardList;
	
}, '0.0.1', {
	requires: ['node', 'model', 'model-list', 'model-sync-rest', 'io', 'items-card-model', 'json']
});