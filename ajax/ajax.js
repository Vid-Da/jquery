function onSubmit (event) {
  event.preventDefault();
  console.debug('SUBMITTED');
	var newCharacter = {
    name: $('#name').val(),
    occupation: $('#occupation').val(),
    weapon: $('#weapon').val()  
  };

//mandar informacion al servidor

  var request = $.post('https://ironhack-characters.herokuapp.com/characters', newCharacter);

  function onSaveSuccess (response) {
    console.debug('BOOM', response);
    fetchCharacters();
  }

  function onSaveFailure (err) {
    console.error(err.responseJSON);
  }

  request.done(onSaveSuccess);
  request.fail(onSaveFailure);
}

//recibir los characters del servidor

function fetchCharacters () {
  var request = $.get('https://ironhack-characters.herokuapp.com/characters');

function handleCharacters (characters) {
  for (var i = 0; i < characters.length; i++) {
    // console.log(characters[i]); name occupation debt weapon id
   $('.js-character-list').append('<li>name: ' + characters[i].name + '</li>');
   $('.js-character-list').append('<li>occupation: ' + characters[i].occupation + '</li>');
   $('.js-character-list').append('<li>debt: ' + characters[i].debt + '</li>');
   $('.js-character-list').append('<li>weapon:' + characters[i].weapon + '</li>');
   $('.js-character-list').append('<li>id: ' + characters[i].id + '</li>');
    $('.js-character-list').append('<br>');  
  };
}

function handleError (err1, err2, err3) {
  console.error('OH NO!!', err1, err2, err3);
}

request.done(handleCharacters);
request.fail(handleError);
}

$('.js-submit').on('click', onSubmit);
$('.js-characters').on('click', fetchCharacters);