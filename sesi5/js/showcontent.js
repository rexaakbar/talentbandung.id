$.get('https://ariona.net/talentbandung/', function(data, status) {
	for (var i = 0; i < data.length; i++) {
		

		$('#belakangContentIndex').append('<div class="content" id="content'+ data[i].id +'"></div>');

		$('#content' + data[i].id).append('<div class="bungkus-photo-content" id="bungkusPhotoContent' + data[i].id + '"></div>');
		$('#bungkusPhotoContent' + data[i].id).append('<div class="photo-content" id="photoContent' + data[i].id + '"></div>');
		$('#photoContent' + data[i].id).append('<img src="' + data[i].image.thumbnail + '" class="img-content" id="imgContent' + data[i].id +'" />');
		$('#bungkusPhotoContent' + data[i].id).append('<a class="show-notif" href="" onclick="showNotifContent()" id="showNotif'+ data[i].id + '"></a> ');
		$('#showNotif' + data[i].id).append('<div class="photo-content-hover" id="photoContentHover' + data[i].id + '" ></div>');
		$('#photoContentHover' + data[i].id).append('<i class="ion-search" id="iconSearch' + data[i].id + '" ></i>');


		$('#content' + data[i].id).append('<div class="judul-content" id="judulContent' + data[i].id + '"></div>');

		$('#judulContent' + data[i].id).append('<div class="taman-content" id="tamanContent' + data[i].id + '" ></div>');
		$('#judulContent' + data[i].id).append('<div class="lokasi-content" id="lokasiContent' + data[i].id + '" ></div>');
		$('#judulContent' + data[i].id).append('<div class="alamat-content" id="alamatContent' + data[i].id + '" ></div>');
		

		var stepOne = data[i].nama;
		var stepTwo = stepOne.split(" ");
		var wadahTaman = "";
		if (stepTwo[0] == "Taman") {
			$('#tamanContent' + data[i].id).append(stepTwo[0]);
			for (var a = 0; a < stepTwo.length; a++) {
				if (a > 0) {
					wadahTaman = wadahTaman + stepTwo[a] + " " ;
				}
			}
			$('#lokasiContent' + data[i].id).append(wadahTaman);
		}else{
			$('#tamanContent' + data[i].id).append('Taman');
			for (var b = 0; b < stepTwo.length; b++) {
				wadahTaman = wadahTaman + stepTwo[b] + " " ;
			}
			$('#lokasiContent' + data[i].id).append(wadahTaman);
		}

			$('#alamatContent' + data[i].id).append(data[i].alamat);


		wadahTaman = "";
	}


} );

function showNotifContent(){
	alert("Coming soon");
}

function showNotifSearch(){
	alert("Ini cuman pajangan :(");

}

function filterTaman(){
	var filterTaman = $('#se').val().toLowerCase();

	var content = $('.content');

	for (var i = 0; i < content.length; i++) {
		var aidi = i + 1;
		var tamanContent = $('#tamanContent' + aidi).text().toLowerCase();
		var lokasiContent = $('#lokasiContent' + aidi).text().toLowerCase();
		var alamatContent = $('#alamatContent' + aidi).text().toLowerCase();

		if (tamanContent.indexOf(filterTaman) >= 0 || lokasiContent.indexOf(filterTaman) >= 0 || alamatContent.indexOf(filterTaman) >= 0 ) {
			$(content[i]).slideDown();
		}else{
			$(content[i]).slideUp();
		}
	}
}