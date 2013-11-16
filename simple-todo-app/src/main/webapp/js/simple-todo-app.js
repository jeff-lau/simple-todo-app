YUI().use('node', 'event', 'items-card-model', function(Y){
	
	Y.on('domready', function(e){
			
//		var itemsCard = new Y.simpleTodo.ItemsCard({
//			id: '5286c4812ec115059b494cf4'
//		});
//		
//		itemsCard.on('load', function(parsed, response){
//			
//			debugger;
//		});
//		
//		itemsCard.load();
		
		
		
		var itemsCard = new Y.simpleTodo.ItemsCard({name : 'Another List!!'});
		itemsCard.save();
		
		//alert(itemsCard.get('name'));
		//debugger;
		
	});
});
