YUI().use('node', 'event', 'items-card-model', 'items-card-modellist', 'simple-todo-app-view', function(Y){
	
	Y.on('domready', function(e){
		

		var appView = new Y.simpleTodo.SimpleTodoAppView();
		appView.render();
		
		Y.one('#createNewCardButton').on('click', function(e){
			var newCard = new Y.simpleTodo.ItemsCard({
				name: '<Card Title>',
				summary: '<Card Summary>'
			});
			
			var newCardView = new Y.simpleTodo.CardEditView({model: newCard});
			newCardView.addTarget(appView);
			newCardView.render();
		});
	});
});
