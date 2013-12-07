YUI().use('node', 'event', 'items-card-model', 'items-card-view', 'items-card-modellist', 'cards-grid-view', 'card-edit-view', 'dd-plugin', function(Y){
	
	Y.on('domready', function(e){
		var itemsCardList = new Y.simpleTodo.ItemsCardList();
		itemsCardList.load();

		
		itemsCardList.after('load', function(e){
			var view = new Y.simpleTodo.CardsGridView({modelList: this});
			view.render();
		});
		
		Y.one('#createNewCardButton').on('click', function(e){
			var newCard = new Y.simpleTodo.ItemsCard({
				name: '<Card Title>',
				summary: '<Card Summary>'
			});
			var newCardView = new Y.simpleTodo.CardEditView({model: newCard});
			newCardView.render();
		});
	});
});
