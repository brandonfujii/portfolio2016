var $slider = $('.container .carousel .articles');
var $prev = $('.prev-left');
var $next = $('.next-right');
var $indicator = $('.indicators li');
var timer;
var hammertime = new Hammer($slider);

$prev.on('click', function() {
  goPrev();
});

$next.on('click', function() {
  goNext();
});


$indicator.on('click', function() {
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  var slide = '.slide-' + $(this).data('nav');
  $('article').removeClass('active');
  $(slide).addClass('active');
});

function goNext() {
  var curr = $slider.find('article.active');
  if (curr.is(':last-child')) {
    $('article').first().addClass('active');
    $indicator.removeClass('active');
    $indicator.first().addClass('active');
  } else {
    var next = curr.next();
    next.addClass('active');
    var $slide = $('.indicators li[data-nav="' + next.data('slide') + '"]');
    $indicator.removeClass('active');
    $slide.addClass('active');

  }
  curr.removeClass('active');
}

function goPrev() {
  var curr = $slider.find('article.active');
  if (curr.is(':first-child')) {
      $('article').last().addClass('active');
      $indicator.removeClass('active');
      $indicator.last().addClass('active');
  } else {
    var prev = curr.prev();
    prev.addClass('active');
    var $slide = $('.indicators li[data-nav="' + prev.data('slide') + '"]');
    $indicator.removeClass('active');
    $slide.addClass('active');
    
  }
  curr.removeClass('active');
}

$('body').keydown(function(e) {
  if (e.keyCode == '37') {
    goPrev();
  } 
  if (e.keyCode == '39') {
    goNext();
  }
});

hammertime.on('swipeleft', function(e) {
  goNext();
});


// $(document).ready(function() {
//   var timer = setInterval(goNext, 10000);
// });