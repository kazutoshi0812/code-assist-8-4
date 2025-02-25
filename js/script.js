window.onload = function() {
  window.scrollTo(0, 0);
};



// ハンバーガーメニュー
$(function() {
   // ハンバーガーメニュー
    $(".header__burger").click(function(){
    $(this).toggleClass('active');
    $(".header__nav").toggleClass('is-active');
    $("#mask").toggleClass('open');
  });
  
  // リンク、ボタンをクリックしたらクラス除去
  $(".header__nav--item a").click(function(){
    $(".header__burger").removeClass('active');
    $(".header__nav").removeClass('is-active');
    $("#mask").removeClass('open');
  });

  // スライダー
  $(".slick__slider--list").slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
    {
        breakpoint: 768,
        settings: {
            centerPadding: '50px',
            slidesToShow: 1
    }
  }
]
});
});

function hamburger() {
  const hamburgerEl = document.querySelector('.header__burger');
  const navEl = document.querySelector('.header__nav');

  // activeクラスの切り替え
  hamburgerEl.classList.toggle('active');

  // ナビゲーションメニューの表示/非表示
  if (hamburgerEl.classList.contains('active')) {
    // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
    navEl.classList.add('active');
  } else {
    // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
    navEl.classList.remove('active');
  }
}

// メインビジュアルのスライドショー
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.main-visual__images--item');
  let currentSlide = 0;
  
  function showSlide(index) {
    // 全てのスライドを非表示にする
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // 指定されたスライドを表示
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  // 5秒ごとにスライドを切り替え
  setInterval(nextSlide, 5000);
});


// スクロールでフェイドインする
$(function () {
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();

    // .reason__inner--slide-left要素と.voice--inner-left要素に対する処理
    $(
      `.reason__inner--slide-left,
       .reason__inner--slide-right,
       .voice--inner-left,
       .voice--inner-right`).each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 60) {
        if (!$(this).hasClass("fadeIn")) {
          $(this).addClass("fadeIn");
        }
      } else {
        $(this).removeClass("fadeIn");
      }
    });
  });
});


// 各セクションへスムーススクロール
$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('.s_01 a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top + adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
// ページトップボタンを押すとしたから上に上がる
$(function(){
  var topBtn=$('#pagetop');
  topBtn.hide();
  //◇ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      //---- 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    }else{
      //---- 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });
  // ◇ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
  })

  // faqセクション
//アコーディオンをクリックした時の動作
// jQuery(function ($) {
// $('.faq__accordion-area-q').on('click', function() {//タイトル要素をクリックしたら
//   $('.faq__accordion-area-a').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
//   var findElm = $(this).next(".faq__accordion-area-a");//タイトル直後のアコーディオンを行うエリアを取得
    
//   if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
//     $(this).removeClass('close');//クラス名を除去    
//   }else{//それ以外は
//     $('.close').removeClass('close'); //クラス名closeを全て除去した後
//     $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
//     $(findElm).slideDown(500);//アコーディオンを開く
//   }
// });
// });
