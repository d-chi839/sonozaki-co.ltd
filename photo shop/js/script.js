$(function(){
		var headNav = $(".menu-b");

	if (window.matchMedia("(max-width: 960px)").matches) {
		//画面横幅が768px以下のときの処理
		//scrollだけだと読み込み時困るのでloadも追加
		$(window).on('load scroll', function () {
			//現在の位置が666px以上かつ、クラスfixedが付与されていない時
			if($(this).scrollTop() > 666 && headNav.hasClass('fixed') == false) {
				//headerの高さ分上に設定
				headNav.css({"top": '-100px'});
				//クラスfixedを付与
				headNav.addClass('fixed');
				//位置を0に設定し、アニメーションのスピードを指定
				headNav.animate({"top": 0},700);
			}
			//現在の位置が666px以下かつ、クラスfixedが付与されている時にfixedを外す
			else if($(this).scrollTop() < 666 && headNav.hasClass('fixed') == true){
				headNav.removeClass('fixed');
			}
		});
	  } else {
		//画面横幅が769px以上のときの処理
		$(window).on('load scroll', function () {
			//現在の位置が824px以上かつ、クラスfixedが付与されていない時
			if($(this).scrollTop() > 711 && headNav.hasClass('fixed') == false) {
				//headerの高さ分上に設定
				headNav.css({"top": '-100px'});
				//クラスfixedを付与
				headNav.addClass('fixed');
				//位置を0に設定し、アニメーションのスピードを指定
				headNav.animate({"top": 0},700);
			}
			//現在の位置が666px以下かつ、クラスfixedが付与されている時にfixedを外す
			else if($(this).scrollTop() < 711 && headNav.hasClass('fixed') == true){
				headNav.removeClass('fixed');
			}
	  });
	};

	// if (window.matchMedia('(min-width: 768px)').matches) {
	// 	// PC表示の時の処理
	// 	console.log('海賊王におれはなる！');
	// 	} else {
	// 	// スマホ表示の時の処理
	// 	console.log('ルフィは海賊王になる男だ');
	// 	}
		
		$('.slide_li-item a').on('click', function(event) {
			$('#menu').prop('checked', false);
		});
	});

