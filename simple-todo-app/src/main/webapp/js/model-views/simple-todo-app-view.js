YUI.add('simple-todo-app-view', function(Y){
	var SimpleTodoAppView = Y.Base.create('simpleTodoAppView', Y.View, [], {
		
	    // Compiles the User Template into a reusable Handlebars template.
	    template: Y.Template.loadTemplate({templateName: 'simple-todo-app-template'}),
	    
	    events: {
	    },

	    intiailizer : function(){
	        var drop = Y.one('#deleteBar').plug(Y.Plugin.Drop);
		    drop.drop.on('drop:hit', function(e) {
		    	console.log('target hit');
		        drop.set('innerHTML', 'You dropped: <strong>' + e.drag.get('node').get('id') + '</strong>');
		    });

	    },

	    _attachDrag : function(){
	    	var del = new Y.DD.Delegate({
	            container: this.get('container'), //The common container
	            nodes: '.cardDiv' //The items to make draggable
	        });
	    	
	    	del.dd.plug(Y.Plugin.DDProxy,{
	    		moveOnEnd: false
	    	});
	    	
	    	var drop = new Y.DD.Drop({
	    		node : '#deleteBar'
	    	});
	    	
	    	del.on('drag:start', function(e){
	    		e.target.get('node').setStyle('z-index', 99);
	    	});
	    	
	    	del.on('drag:end', function(e){
	    		e.target.get('node').setStyle('z-index', 0);
	    	});

	    	Y.DD.DDM.on('drop:hit', function(){
	    		console.log('drop hit!');
	    	});
	    	
	    },

	    
	    render: function () {

	    	var content = this.template({});
	    	var	container = this.get('container');
	    	container.setHTML(content);
	    	
			var itemsCardList = new Y.simpleTodo.ItemsCardList();
			itemsCardList.load();
			itemsCardList.after('load', function(e){
				var view = new Y.simpleTodo.CardsGridView({modelList: this});
				container.one('#cardsContainer').appendChild(view.render().get('container'));
			});
			
			this._attachDrag();
	    }
	}, {
		ATTRS : {
			container : {
				value : '#app-container'
			}
		}
	});
	
	Y.namespace('simpleTodo').SimpleTodoAppView = SimpleTodoAppView;
}, '0.0.1', {
	requires: ['view', 'template-loader', 'cards-grid-view', 'card-edit-view', 'dd-plugin', 'dd-drop-plugin', 'dd-delegate', 'dd-drop', 'dd-proxy']
});

