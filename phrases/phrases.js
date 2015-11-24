var phrases = [
	'Random 1',
	'Random 2',
];

// Start random phrase button

$('.refresh').on('click', function () {
	var random_phrase = Math.floor(Math.random(1)*phrases.length);
	  $('.all_sentences').append('<li>' + phrases[random_phrase] + "<img src='trash.png' class='delete'></li>");
});

// Intro of new sentences

$('#intro_phrase').on('keypress', function (event) {
	var new_phrase = $('#add').val();
	phrases.push(new_phrase);
	  if (event.which == 13) {
			event.preventDefault();
			$('.main_phrase').html(new_phrase);
			$('.all_sentences').append('<li>' + new_phrase + "<img src='trash.png' class='delete'></li>");
			$('#add').val('');
		}
});

// Delete sentences

$('.delete').on('click','.delete',function (event) {
	$(event.currentTarget).parent().remove();
	n = $(event.currentTarget).id
	phrases.splice(n,1);
})

// Show / Hide button

$('.show_sentences').on('click', function () {
	if ($(this).text() === "Hide"){
		$(this).text('Show');
	}
	 else {
    $(this).text('Hide');
  }
  $('.all_sentences').toggle(300);
});

//change color last sentence
