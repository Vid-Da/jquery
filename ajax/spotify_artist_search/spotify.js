//artist search

function fetchArtists () {
  var request = $.get('https://api.spotify.com/v1/search?type=artist&query=' + $('#artist_search').val());
  console.log(request)

	function handleArtists (request) {
		request.artists.items.forEach(function (artist) {
			$('.js-artists-list').append("<li><img class='pictures' src=" + artist.images[0].url + ">" + artist.name + "<button id='search_albums'>albums</button>" +"</li>");
		});
	}

	function handleError (err1, err2, err3) {
	  console.error('OH NO!!', err1, err2, err3);
	}

	request.done(handleArtists);
	request.fail(handleError);
}

$('#search').on('click', fetchArtists);

//albums search

$('#search_albums').on('click', fetchAlbums);

function fetchAlbums () {
	var artist_request = $.get('https://api.spotify.com/v1/search?type=artist&query=' + $('#artist_search').val());
	var artist_id = artist_request.artists.item.id
  var album_request = $.get('https://api.spotify.com/v1/artists/{' + artist_id + '}/albums');
  console.log(request)

	function handleAlbums (album_request) {
		album_request.album.forEach(function (album) {
			$('.js-albums-list').append("<li>" + album.name + "</li>");
		});
	}

	function handleError (err1, err2, err3) {
	  console.error('OH NO!!', err1, err2, err3);
	}

	request.done(handleArtists);
	request.fail(handleError);
}
