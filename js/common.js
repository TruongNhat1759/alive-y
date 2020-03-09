$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.smoothScroll();
			this.toTop();
			this.Gnavi();
		},
		
		smoothScroll : function(){
			$('a[href^="#"]').click(function () {
	        	var vW = $(window).width();
					$('.menu-icon').removeClass('active');
	        	if(vW <= 640){
					$('#gnavi').fadeOut('fast');
	        	}
				if ($($(this).attr('href')).length) {
					var p = $($(this).attr('href')).offset();
					if($(window).width() > 640){
						$('html,body').animate({ scrollTop: p.top - 80 }, 600);
					}else{
						$('html,body').animate({ scrollTop: p.top - 70 }, 600);
					}
				}
				return false;
			});
			$(window).load(function(){
				var hash1= location.hash;
				var $root = $('html, body');
				if(hash1!==""){  
					var top01 = $(hash1).offset().top;
					if($(window).width() > 640){   
						$root.animate({ scrollTop:top01 - 80 }, 600);
					}else{
						$root.animate({ scrollTop:top01 - 70 }, 600);
					}
				}
			});
		},
		
		toTop : function(){
			$(window).bind('load scroll', function () {
				var vW = $(window).width();
				if ($(this).scrollTop() > 100) {
					$('#totop').fadeIn();
					if(vW < 641){
						$('.f-call').addClass('show');
					}
					else {
						$('.f-call').removeClass('show');
					}
				} else {
					$('#totop').fadeOut();
					$('.f-call').removeClass('show');
				}
			});
		},
		
		Gnavi : function(){
			$('.menu-icon').click(function(){
				$(this).toggleClass('active');
				$('#gnavi').stop().toggleClass('active');
				$('.close-menu').stop().toggleClass('active');
			});
			$('.close-menu').click(function(){
				$(this).removeClass('active');
				$('.menu-icon').removeClass('active');
				$('#gnavi').removeClass('active');
			});
			$(window).bind('load', function () {
				$('#index #mainvisual').addClass('onload');
				$('.main-content').fadeIn();
				new WOW().init();
			});
			$(window).bind("load resize scroll", function() {
				var vW = $(window).width(),
					Hhead = $('#header').outerHeight(),
					HGnavi = $('#gnavi').outerHeight(),
					top = $(this).scrollTop();
				if(vW > 640){
					$('.menu-icon').removeClass('active');
					$('#gnavi').removeAttr('style');
					$('#gnavi').removeClass('active');
					if (top > Hhead) {
						$('#gnavi').addClass('fixed');
						$('#mainvisual').css('margin-top', HGnavi);
					}
					else {
						$('#gnavi').removeClass('fixed');
						$('#mainvisual').css('margin-top', '');
					}
				}
				else {
					$('#mainvisual').css('margin-top', '');
					$('#gnavi').removeClass('fixed');
					$('#gnavi').css('display','unset');
				}
			
			});
			
		},
	
	};
	
	obj.init();
	
});