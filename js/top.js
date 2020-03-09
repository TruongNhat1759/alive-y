// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.Kijkaku();
		},
		Kijkaku : function() {
			$.ajax({
				'url' : 'news/_custom/',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						var $li_ind = $('<li><span>' + val.date + '</span><a href="news/'+ val.url +'">' + val.title + '</a></li>');
						$li_ind.appendTo('.b06-news ul');
					});
				} 
			});
		},
	};
	obj.init();
	
});