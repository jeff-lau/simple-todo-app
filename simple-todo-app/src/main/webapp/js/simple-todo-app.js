YUI().use('node', 'event', 'items-card-model', 'items-card-view', 'items-card-modellist', 'cards-grid-view', function(Y){
	
	Y.on('domready', function(e){
		
		
		/*
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
		*/
		
		
		var itemsCardList = new Y.simpleTodo.ItemsCardList();
		itemsCardList.load();

		
		itemsCardList.after('load', function(e){
			var view = new Y.simpleTodo.CardsGridView({modelList: this});
			view.render();
		});
		
		Y.one('#createNewCardButton').on('click', function(e){
			var newCard = new Y.simpleTodo.ItemsCard({
				name: Y.one('#cardTitle').get('value'),
				summary: Y.one('#cardSummary').get('value')
			});
			newCard.save();
		});
	});
});
