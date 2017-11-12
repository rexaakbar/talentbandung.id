var buahBuahan = ['Jambu' , 'Persik' , 'Apel' , 'Mangga' , 'Sirsak'];


for (var i = 0; i < buahBuahan.length; i++) {
	$('#buah').append('<li class="buah">'+buahBuahan[i]+'</li>');
}



// var text = "Talent Bandung";

// text.length;                        // 14
// text.toUpperCase();                 // TALENT BANDUNG
// text.toLowerCase();                 // talent bandung
// text.indexOf('Band');               // 7
// text.replace('Bandung','Jakarta');  // Talent Jakarta
// var pisah = text.split(" ");		  // ['Talent','Bandung']


function filter(){

	var fifilter = $('#filter');

	var wadahFilter = fifilter.val().toLowerCase();

	var buah = $('.buah');
		for (var a = 0; a < buah.length; a++) {

			var wadahLi = $(buah[a]).text().toLowerCase();
			
			if(wadahLi.indexOf(wadahFilter) >= 0){
					$(buah[a]).slideDown();
			}else{
					$(buah[a]).slideUp();
			}
		}

	// buah.each(function(){
	// 	var bubuah = $(this);
	// 	var namaBuah = bubuah.text().toLowerCase();

	// 	if(namaBuah.indexOf(wadahFilter) >= 0 ){
	// 		$(this).slideDown();
	// 	}else{
	// 		$(this).slideUp();
	// 	}
	// });
	

}

	// console.log(buahBuahan.length);            // 4
	// console.log(buahBuahan.join('/'));         // Mangga/Apel/Jeruk/Melon
	// console.log(buahBuahan.pop());            // ["Mangga","Apel","Jeruk"]
	// console.log(buahBuahan.push('Sirsak'));     // ["Mangga","Apel","Jeruk","Melon"]
	// console.log(buahBuahan.shift());           // ["Apel","Jeruk","Melon"]
	// console.log(buahBuahan.unshift('Jambu')); // ["Mangga","Apel","Jeruk","Melon"]

	$.get('https://ariona.net/talentbandung/', function(data, status) {
		for (var i = 0; i < data.length; i++) {
			var stepOne = data[i].nama;
			var stepTwo = stepOne.split(" ");
			var wadahTaman = "";
			if (stepTwo[0] == "Taman") {
				for (var a = 0; a < stepTwo.length; a++) {
					if (a > 0) {
						wadahTaman = wadahTaman + stepTwo[a] + " " ;
					}
				}
			}else{
				for (var b = 0; b < stepTwo.length; b++) {
					wadahTaman = wadahTaman + stepTwo[b] + " " ;
				}
			}
			$('#listTaman').append('<li class="taman"><h2>' + wadahTaman + '</h2><img src="'+ data[i].image.thumbnail +'"/></li>');
			
			wadahTaman = "";
		}
	} );

	function filterTaman(){
		var filterTmn = $('#filterTaman');

		var wadahFilter = filterTmn.val().toLowerCase();

		var taman = $('.taman');
			for (var a = 0; a < taman.length; a++) {

				var wadahLi = $(taman[a]).text().toLowerCase();
				
				if(wadahLi.indexOf(wadahFilter) >= 0){
						$(taman[a]).slideDown();
				}else{
						$(taman[a]).slideUp();
				}
			}
	}
	var asdasd = "1";
	$('#yangPertama').append('<div id="yangKe'+asdasd+'"></div>');
	$('#yangPertama').append('HAHAHA');
	$('#yangKe'+asdasd).append('<ul></ul>');
