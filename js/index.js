(function(){
	var kill_time = document.getElementsByClassName("kill_time")[0];
	var nums = kill_time.getElementsByClassName("num");

	var times = 6 * 60 * 60;



	setInterval(function(){
		times--;
		// 小时数
		var h = Math.floor( times / 60 / 60 ); 
		var m = Math.floor(  times / 60 % 60 );
		var s = times % 60;

		nums[0].innerHTML = h > 10 ? Math.floor( h/10) : 0;
		nums[1].innerHTML = h % 10;

		nums[2].innerHTML = m > 10 ? Math.floor( m/10) : 0;
		nums[3].innerHTML = m % 10;

		nums[4].innerHTML = s> 10 ? Math.floor( s/10) : 0;
		nums[5].innerHTML = s % 10;
	},1000)


window.mySwipe = new Swipe(document.getElementById('slider'), {
// startSlide: 4,  //起始图片切换的索引位置
auto: 3000, //设置自动切换时间，单位毫秒
// continuous: true,  //无限循环的图片切换效果
// disableScroll: true,  //阻止由于触摸而滚动屏幕
// stopPropagation: false,  //停止滑动事件
// callback: function(index, element) {},  //回调函数，切换时触发
// transitionEnd: function(index, element) {}  //回调函数，切换结束调用该函数。
});




})()