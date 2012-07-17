/*
	Plugin TeraScroll V2.0 - Par Teraglehn (http://www.lepalaisdumaking.com/TeraScroll)

	Ce plugin est mis à disposition selon les termes de la licence 
	Creative Commons Attribution (http://creativecommons.org/licenses/by-nc-sa/3.0/fr/)
		- Pas d'Utilisation Commerciale 
		- Partage dans les Mêmes Conditions 3.0 France.
	Les autorisations au-delà du champ de cette licence peuvent être obtenues à teraglehn@gmail.com.
*/
(function( $ ){

	var methods = {
		scroll : function(sel){
			var y = sel[0].height();
			var x = sel[1].height();
			var w = sel[2].width();

			var h = (x <= y) ? 0 : ( 1/( x/y) )*y;
			h = (h < w && h !=0) ? w : h;
			
			var pos = parseInt(sel[2].css('top'));

			var scrolTp = ( (x-y) * pos)/(y-h);
			scrolTp2 = Math.round(scrolTp);
			scrolTp = (scrolTp2 > scrolTp) ? scrolTp2-1 : scrolTp2 ;

			sel[1].css("margin-top", -scrolTp);
		},

		move : function(sel, delta){
			var pos = parseInt( (sel[2].css('top')=="auto")? 0 : sel[2].css('top') );
			if(delta >0) {
				sel[2].css("top", (pos-5*delta > 0)? pos-5*delta+"px" : "0px");
			}
			else {
				sel[2].css("top", (pos-5*delta < sel[0].height()-sel[2].height())? pos-5*delta+"px" : sel[0].height()-sel[2].height()+"px");
			}
		}
	}

  $.fn.scrollable = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var sets = $.extend( {
      scrollable         : 'scrollable',
      scrollclass        : 'scrollbar'
    }, options);

    this.addClass(sets.scrollable);
	this.wrapInner("<div class='content' />");
	this.children(".content").before("<div class='"+sets.scrollclass+"'></div>");

    this.each(function() {

    	var sel =new Array( 
			$(this), 
			$(this).children(".content"),
			$(this).children("."+sets.scrollclass)
		);

		var y = sel[0].height();
		var x = sel[1].height();
		var w = sel[2].width();

		var h = (x <= y) ? 0 : ( 1/( x/y) )*y;
		if(h != 0){
			h = (h < w) ? w : h;

			sel[2].height(h);
			

			sel[2].css({ height : h, left : sel[0].width() - (w+1), "margin-right" : -w });
			sel[1].css({ "margin-right" : w+2 })


			sel[2].draggable({ 
				axis : "y",
				containment : "parent",

				start: function(event, ui) {
					sel[2].addClass(sets.scrollclass+"_drag");
				},

				drag : function(event, ui){
					methods.scroll(sel);
				},

				stop: function(event, ui) {
					sel[2].removeClass(sets.scrollclass+"_drag");
				}
			});


			sel[0].bind('mousewheel', function(event, delta) {

				methods.move(sel, delta);

				methods.scroll(sel);
				return false;
			});
		}

		
    });

  };
})( jQuery );
