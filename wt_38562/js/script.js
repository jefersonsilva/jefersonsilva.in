$(document).ready(function() {
	// hover
	
	$('footer a').hover(function(){
		$(this).stop().animate({color:'#38b88d'})						 
	}, function(){
		$(this).stop().animate({color:'#fff'})						 
	})
	
	$('#home span').css({opacity:0})
	
	$('#home').hover(function(){
		$(this).find('span').stop().animate({opacity:1})					  
	}, function(){
		$(this).find('span').stop().animate({opacity:0})					  
	})
	
	$('#content > ul > li').each(function(){
		var height=$(this).height();
		$(this).data({height:height})							  
	})
	
	$('.box .active').css({opacity:0})
	
	$('.box').hover(function(){
		$(this).find('.active').stop().animate({opacity:0.48})					 
	}, function(){
		$(this).find('.active').stop().animate({opacity:0})					 
	})
	
	$('.link1, .link3').hover(function(){
		$(this).stop().animate({color:'#8ce29d'})
	}, function(){
		$(this).stop().animate({color:'#fff'})
	})
	
	$('.link2').hover(function(){
		$(this).stop().animate({color:'#fff'})
	}, function(){
		$(this).stop().animate({color:'#8ce29d'})
	})
	
	$('.submenu_1 strong').css({opacity:0})
	
	$('.submenu_1 li').hover(function(){
		$(this).find('> a').stop().animate({color:'#fff'})			
		$(this).find('> strong').stop().animate({opacity:1}, function(){$(this).css({opacity:'none'})})							  
	}, function(){
		if (!$(this).hasClass('sfHover')) {
			$(this).find('> a').stop().animate({color:'#48413c'})			
			$(this).find('> strong').stop().animate({opacity:0})							  
		}
	})
	
	
	$('ul#menu').superfish({
      delay:       600,
      animation:   {height:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
    });
	
	//carousel
	
	$("#gallery1").jCarouselLite({
		btnNext: ".next",
		btnPrev: ".prev",
		mouseWheel: true,
		vertical: true,
		visible: 2,
		speed: 600,
		easing: 'easeOutCirc'
	});
	
	$('#gallery1 span').css({opacity:0})
	
	$('#gallery1 a').hover(function(){
		$(this).find('span').stop().animate({opacity:1}, function(){$(this).css({opacity:'none'})})							
	}, function(){
		$(this).find('span').stop().animate({opacity:0})							
	})
	
	// fancybox
	
	$('.fancybox span').css({opacity:0})
	
	$('.fancybox').hover(function(){
		$(this).find('span').stop().animate({opacity:1}, function(){$(this).css({opacity:'none'})}) 
	}, function(){
		$(this).find('span').stop().animate({opacity:0}) 
	})
	
	$('.fancybox').fancybox({
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'none'
	});
	
 });
$(window).load(function() {	
	// slider
	$('#slider')._TMS({
        show:0,
        pauseOnHover:false,
        duration:800,
        preset:'diagonalExpand',
		overflow:'visible',
        pagination:true,//'.pagination',true,'<ul></ul>'
        pagNums: false ,
        slideshow:8000,
        numStatus:false,
        banners:false
    })
	/*
	// scroll
	$('.scroll').cScroll({
		duration:700,
		step:63,
		trackCl:'track',
		shuttleCl:'shuttle'
	})	
	*/
	
	//content switch
	var content=$('#content'),
		nav=$('.menu');
	nav.navs({
		useHash:true,
		hoverIn:function(li){
			$('> a',li).stop().animate({color:'#fff'})		
			$('> a span',li).stop().animate({color:'#362a25'})		
			$('> strong',li).css({opacity:'none'}).stop().animate({opacity:1}, function(){$(this).css({opacity:'none'})})
		},
		hoverOut:function(li){
			if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('> a',li).stop().animate({color:'#42342d'})	
				$('> a span',li).stop().animate({color:'#a29284'})	
				$('> strong',li).stop().animate({opacity:0}, function(){$(this).css({opacity:'none'})})
			}
		}				
	})	
	content.tabs({
		actFu:function(_){
			if (_.prev && _.curr) {
				h_cont=_.curr.data('height');
				$('#content').css({height:h_cont})
				_.prev.stop().animate({height:0}, function(){
					_.curr.stop().animate({height:h_cont})
				})
				centre();
			} else {
				if (_.curr) {
					h_cont=_.curr.data('height')
					$('#content').css({height:h_cont})
					_.curr.stop().animate({height:h_cont})
					centre()
				}
				if (_.prev) {
					_.prev.stop().animate({height:0})
					$('#content').css({height:h_cont})
					centre();
				}
			}
		},
		preFu:function(_){						
			$('#content > ul > li').css({ position:'absolute', height:0, overflow:'hidden'})
			$('.hide_block').css({top:-100});
		}
	})
	nav.navs(function(n, _){	
		if (n=='close' || n=='#!/') {
			h_cont=0;
			$('.hide_block').stop().animate({top:-100})
			content.tabs(n);
		} else {
			$('header').stop().animate({height:139})
			$('.hide_block').stop().animate({top:0})
			content.tabs(n);
		}
	})
	
	
	var m_top=0;
	function centre() {
		var h=$(window).height();
		if (h_cont!=0) {
			if (h>h_cont+322) {
				m_top=(h-h_cont-322)/2;
			} else {
				m_top=0
			}
			$('#content').css({marginTop:m_top})
		} else {
			if (h>322) {
				h_head=(h-h_cont-322)/2+139;
			} else {
				h_head=139;
			}
			$('header').stop().animate({height:h_head})
		}
	}
	centre();
	$(window).resize(centre);
	
})