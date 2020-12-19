window.addEventListener('load', function() {
 
    var leftArrow = this.document.querySelector('.lf');
    var rightArrow = this.document.querySelector('.lr');
 
    // 鼠标移动到左右箭头的位置更换图片 有灰色背景的图片
    leftArrow.addEventListener('mouseenter', function() {
        this.style.backgroundPosition = '0 0';
    });
 
    leftArrow.addEventListener('mouseleave', function() {
        this.style.backgroundPosition = '-83px 0';
    });
 
    rightArrow.addEventListener('mouseenter', function() {
        this.style.backgroundPosition = '-42px 0';
    });
 
    rightArrow.addEventListener('mouseleave', function() {
        this.style.backgroundPosition = '-123px 0';
    });
 
    // 获取图片 和 小点
    var imgs = this.document.querySelectorAll('.img');
    var dots = this.document.querySelector('.dots').querySelectorAll('span');
 
    // 给图片设置index 属性，好判断当前的图片是哪一张
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute('data-index', i);
    }
 
    // 获取当前图片 和 图片的index（数组下标）
    var current = this.document.querySelector('.current');
    var currentIndex = current.getAttribute('data-index');
 
    // 左箭头的点击事件，点击了就返回前一张图片 
    // 如果当前图片为第一张那么需要更换到最后一张图片也就是第四张
    leftArrow.addEventListener('click', function() {
        if (currentIndex > 0) {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            imgs[--currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        } else {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            currentIndex = 4;
            imgs[currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        }
    });
 
    // 点击右箭头下一张图片切换
    // 如果当前为第五张图片，那么切换回第一张图片
    rightArrow.addEventListener('click', changeImage);
 
    var timer = this.setInterval(changeImage, 8000);
 
    function changeImage() {
        if (currentIndex < 4) {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            imgs[++currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        } else {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            currentIndex = 0;
            imgs[currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        }
    };
    // 小圆点的点击事件
    for (let k = 0; k < dots.length; k++) {
        dots[k].setAttribute('data-index', k);
        dots[k].addEventListener('click', function() {
            var index = this.getAttribute('data-index');
            if (index != currentIndex) {
                imgs[currentIndex].classList.remove('current');
                dots[currentIndex].classList.remove('square');
                imgs[index].classList.add('current');
                dots[index].classList.add('square');
                currentIndex = index;
            }
 
        })
    }
 
});
//自动轮播
 window.onload=function(){
        function $(content){
            return document.getElementById(content);
        }
        var num=0;
        function autoplay(){
            num--;
            $("content").style.left=num+"px";
            if(num==-440){
                num=0;
            }
        }
		
        var int=setInterval(autoplay,15);
        $("content").onmouseover=function(){
            clearInterval(int);
        }
        $("content").onmouseout=function(){
            int=setInterval(autoplay,15);
        }
    }
function play(obj) {
    var play = obj.getElementsByTagName("p")[0];
    play.style.display = "block";
}
 
function playout(obj) {
    var play = obj.getElementsByTagName("p")[0];
    play.style.display = "none";
}

// 人物切换
// 切换为岑缨
function tou_cy(a){
				$('.bl_rw').fadeOut('slow')
				$('.bl_text').fadeOut('slow',function(){
					$('.cy_rw').fadeIn('slow',function(){
						$('.cy_text').fadeIn('slow')
						$('.j_14').fadeIn('slow')
					})
					})
			}
// 切换回北洛
function tou_bl(b){
				$('.j_14').fadeOut('slow')
				$('.cy_rw').fadeOut('slow')
				$('.cy_text').fadeOut('slow',function(){
					$('.bl_rw').fadeIn('slow',function(){
						$('.bl_text').fadeIn('slow')
						$('.j_6').fadeIn('slow')			
					})
					})
			}
//切换为光明野
function guanmy(c){
			$('.yyw').fadeOut('slow')
			$('.tlc').fadeOut('slow')
			$('.yl').fadeOut('slow',function(){
			$('.gmy').fadeIn('slow',function(){
			})
			})
}
// 切换为鄢陵
function yanl(d){
			$('.yyw').fadeOut('slow')
			$('.tlc').fadeOut('slow')
			$('.gmy').fadeOut('slow',function(){
			$('.yl').fadeIn('slow',function(){
			})
			})
}
// 切换为天鹿城
function tianlc(e){
			$('.yyw').fadeOut('slow')
			$('.yl').fadeOut('slow')
			$('.gmy').fadeOut('slow',function(){
			$('.tlc').fadeIn('slow',function(){
			})
			})
}
// 切换为遥夜湾
function yaoyw(f){
			$('.yl').fadeOut('slow')
			$('.tlc').fadeOut('slow')
			$('.gmy').fadeOut('slow',function(){
			$('.yyw').fadeIn('slow',function(){
			})
			})
}
// 登录注册页面
// 鼠标点击事件-注册页面
function signup(g){	
			$('.user').fadeOut('slow',function(){
			$('.register').fadeIn('slow',function(){				
			})
			})	
}
// 转换回登录
function enter(h){	
			$('.register').fadeOut('slow',function(){
			$('.user').fadeIn('slow',function(){				
			})
			})	
}
// 音乐
function playPause(Img){
				var player = document.getElementById('musicBtn')
				if(player.paused)
				{
					player.play()
					Img.src = 'img/musicBtn.png'
				}else
				{
					player.pause()
					Img.src = "img/musicBtnOff.png"
				}
			}
			