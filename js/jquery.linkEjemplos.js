(function($){
	$.linkEjemplos = function(el, options){
		// To avoid scope issues, use 'base' instead of 'this'
		// to reference this class from internal events and functions.
		var base = this;
		
		// Access to jQuery and DOM versions of element
		base.$el = $(el);
		base.el = el;
		
		// Add a reverse reference to the DOM object
		base.$el.data("linkEjemplos", base);
		
		base.init = function(){
			base.options = $.extend({},$.linkEjemplos.defaultOptions, options);
			// Put your initialization code here
		};
		// Run initializer
		base.init();
		base.$el.addClass(base.options.clase).attr('target', base.options.target);
	};
	
	$.linkEjemplos.defaultOptions = {
		'clase' : "button",
		'target' : "blank",
	};
	
	$.fn.linkEjemplos = function(options) {
		return this.each(function(){
			(new $.linkEjemplos(this, options));

		});
	};
	
})(jQuery);
