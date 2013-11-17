YUI().use('node', 'event', 'items-card-model', function(Y){
	
	Y.on('domready', function(e){
			
		var itemsCard = new Y.simpleTodo.ItemsCard({
			_id: '5286c4812ec115059b494cf4'
		});
		
		itemsCard.load();
		
		itemsCard.after('load', function(){
			alert(itemsCard.get('objectIdStr'));
		});
		
		
		
		//var itemsCard = new Y.simpleTodo.ItemsCard({name : 'Another List!!'});
		//itemsCard.save();
		
		//alert(itemsCard.get('name'));
		//debugger;
		
	});
});
