// Write your Pizza Builder JavaScript in this file.
$('.sauce-white').hide();
$('.crust > .crust-gluten-free').hide()

$('.btn.btn-pepperonni.active').on('click',function () {
	$('.allpepperonni').toggle();
});

$('.btn.btn-mushrooms.active').on('click',function () {
	$('.allmushrooms').toggle();
});

$('.btn.btn-green-peppers.active').on('click',function () {
	$('.allpeppers').toggle();
});

$('.btn.btn-sauce.active').on('click',function () {
	$('.sauce-white').toggle();
});

$(".btn.btn-crust.active", this).on('click',function(){
   $(".crust-gluten-free").toggle();
});