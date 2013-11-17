YUI().use('node', 'event', 'items-card-model', 'items-card-view', function(Y){
	
	Y.on('domready', function(e){
			
		var itemsCard = new Y.simpleTodo.ItemsCard({
			_id: '5286c4812ec115059b494cf4'
		});
		
		itemsCard.load();
		
		itemsCard.after('load', function(){
			itemsCardView.render();
		});
		
		var itemsCardView = new Y.simpleTodo.CardView({
			model: itemsCard,
			container: '.lists-container'
		});
		
	});
});
