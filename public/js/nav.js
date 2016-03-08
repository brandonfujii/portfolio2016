var $menuTrigger = $('.menu-trigger');
var $navItems = $('.nav-items');
var $navItem = $('.nav-item a');
var $nestedItems = $('.nested-items');

$menuTrigger.on('click', function() {
  $(this).toggleClass('active');
  $navItems.toggleClass('active');
});

$nestedItems.on('mouseover', function() {
	$(this).siblings('a').addClass('active');
});

$nestedItems.on('mouseleave', function() {
	$(this).siblings('a').removeClass('active');
});