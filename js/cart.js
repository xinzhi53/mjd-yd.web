(function(){
	// console.log("wwwwwww");


	var delete_top;
	$(".delete_box").on('tap',function(){
		// 显示出弹出框
		$(".alert").css({'display':'block'});
		// console.log(1234);
		// 计算出动画的距离
		// 'translateY(100px)';
		var top = (window.innerHeight - $(".alert_box").height())/2;
		$(".alert_box").css({
			transition:'1s',
			transform:'translateY('+top+'px)'
		});
// console.log($(".delete_top"));
		delete_top = $(this).find(".delete_top");
		delete_top.css({
			transition:'1s',
			transform:'translateY(-5px) rotate(-30deg)'
		})
	})	
	// 隐藏弹出框
	function close(){

		// 隐藏   弹出框回到原来位置   垃圾桶盖复原
		$(".alert").css({'display':'none'});
		$(".alert_box").css({
			transition:'1s',
			transform:'translateY(0px)'
		});

		delete_top.css({
			transition:'1s',
			transform:'translateY(0px) rotate(0deg)'
		})

	}
	$('.btn_box .submit').on('tap',function () {
		close();
		// 发送ajax请求
	})
	$('.btn_box .cancel').on('tap',function () {
		close();
	})


// checkbox
	$('.checkbox').on('tap',function(){
		
		if ($(this).attr('checked')) {
			$(this).removeAttr('checked');
		}else {
			$(this).attr('checked',true);
		}
	})

// 店铺全选
	$('.shop_header .checkbox').on('tap',function(){
		/*
		if ($(this).attr('checked')) {
			$('.product_check .checkbox').attr('checked',true);
		}else {
			$('.product_check .checkbox').removeAttr('checked');
		}
		*/
		if ($(this).attr('checked')) {
			// $(this).parent().parent().parent().find('.product .checkbox').attr('checked',true);
			$(this).parents('.shop').find('.product .checkbox').attr('checked',true);
		}else {
			$(this).parents('.shop').find('.product .checkbox').removeAttr('checked');
		}
	})


})()