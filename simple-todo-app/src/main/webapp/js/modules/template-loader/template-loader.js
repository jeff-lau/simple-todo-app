/**
 * Y.Collections.Template is a module used for compiling handlebars template and loading them together with a JavaScript resource on to a page/container.
 */
YUI.add('template-loader', function(Y) {

	Y.Template = (function() {

		/**
		 * Private variables
		 */
		var _compiledTemplates = {};
		var _templateUri = 'templates/';


		/**
		 * Private functions
		 */
		var _compileTemplate = function(name, onsuccess, onfailure) {
			Y.io(_templateUri + name + '.html', {
				method: 'GET',
				sync: true,
				on: {
					success: function(transactionid, response, args) {
						_compiledTemplates[name] = Y.Handlebars.compile(response.responseText);
						if (onsuccess) {
							onsuccess();
						}
					},
					failure: function(transactionid, response, args) {
						Y.log('Failed to compile template: ' + name);
						if (onfailure) {
							onfailure();
						}
					}
				}
			});
		};

		return {

			/**
			 * Loads handlebar template and related JavaScript.
			 *
			 * @param templateName The name of the template. If the template is PatientTemplate.html then PatientTemplate should be passed.
			 * @param data JavaScript object that contains variables to be substituted into the handlebar template.
			 * @param container The container in which the template will be loaded. If this is not set or null then the template will be loaded on to <body>
			 * @returns
			 */
			loadTemplate: function(cfg) {
				if (!_compiledTemplates[cfg.templateName]) {
					_compileTemplate(cfg.templateName);
				}
				return _compiledTemplates[cfg.templateName];
			}
		};
	}());

}, '1.0.0', {
	requires: ['io', 'handlebars', 'node']
});