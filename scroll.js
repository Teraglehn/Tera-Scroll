/*
	Plugin TeraScroll V1.0 - Par Teraglehn (http://www.lepalaisdumaking.com/TeraScroll)

	Ce plugin est mis à disposition selon les termes de la licence 
	Creative Commons Attribution (http://creativecommons.org/licenses/by-nc-sa/3.0/fr/)
		- Pas d'Utilisation Commerciale 
		- Partage dans les Mêmes Conditions 3.0 France.
	Les autorisations au-delà du champ de cette licence peuvent être obtenues à teraglehn@gmail.com.
*/
function scroll(sel){
	var y = $(sel[0]).height();
	var x = $(sel[1]).height();
	var w = $(sel[2]).width();

	var h = (x <= y) ? 0 : ( 1/( x/y) )*y;
	h = (h < w && h !=0) ? w : h;
	
	var pos = parseInt($(sel[2]).css('top'));

	var scrolTp = ( (x-y) * pos)/(y-h);
	scrolTp2 = Math.round(scrolTp);
	scrolTp = (scrolTp2 > scrolTp) ? scrolTp2-1 : scrolTp2 ;

	$(sel[1]).css("margin-top", -scrolTp);
}
function move(sel, delta){
	var pos = parseInt( ($(sel[2]).css('top')=="auto")? 0 : $(sel[2]).css('top') );
	if(delta >0) {
		$(sel[2]).css("top", (pos-5*delta > 0)? pos-5*delta+"px" : "0px");
	}
	else {
		$(sel[2]).css("top", (pos-5*delta < $(sel[0]).height()-$(sel[2]).height())? pos-5*delta+"px" : $(sel[0]).height()-$(sel[2]).height()+"px");
	}
}
function scrollable(selecteur, scrollclass, scrollable){

	scrollclass= (!scrollclass)? "scrollbar" : scrollclass;
	scrollable= (!scrollable)? "scrollable" : scrollable;

	var sel =new Array( 

		selecteur, 
		selecteur+" .content", 
		selecteur+" ."+scrollclass

	);

	$(sel[0]).addClass(scrollable);
	$(sel[0]).wrapInner("<div class='content' />");
	$(sel[1]).before("<div class='"+scrollclass+"'></div>")

	var y = $(sel[0]).height();
	var x = $(sel[1]).height();
	var w = $(sel[2]).width();

	var h = (x <= y) ? 0 : ( 1/( x/y) )*y;
	if(h != 0){
		h = (h < w) ? w : h;

		$(sel[2]).height(h);

		$(sel[2]).css({ left : $(sel[0]).width() - (w+1), "margin-right" : -w });
		$(sel[1]).css({ "margin-right" : w+2 })

		$(sel[2]).draggable({ 
			axis : "y", 
			containment: sel[0],

			start: function(event, ui) {
				$(sel[2]).addClass(scrollclass+"_drag");
			},

			drag : function(event, ui){
				scroll(sel);
			},

			stop: function(event, ui) {
				$(sel[2]).removeClass(scrollclass+"_drag");
			}
		});


		$(sel[0]).bind('mousewheel', function(event, delta) {

			move(sel, delta);

			scroll(sel);
			return false;
		});
	}
	
}
