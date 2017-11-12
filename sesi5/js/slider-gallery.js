var htg     = 0;
var kiric1  = parseInt($("#img-slider-1").css("margin-left"));
var kiric2  = parseInt($("#img-slider-2").css("margin-left"));
var kiric3  = parseInt($("#img-slider-3").css("margin-left"));
var kiric4  = parseInt($("#img-slider-4").css("margin-left"));
var kiric5  = parseInt($("#img-slider-5").css("margin-left"));


function prevImage(){
	if(htg < 0){

		kiric1 = kiric1 + 275;
		kiric2 = kiric2 + 275;
		kiric3 = kiric3 + 275;
		kiric4 = kiric4 + 275;
		kiric5 = kiric5 + 275;

		$("#img-slider-1").css("margin-left",kiric1 + "px");
		$("#img-slider-2").css("margin-left",kiric2 + "px");
		$("#img-slider-3").css("margin-left",kiric3 + "px");
		$("#img-slider-4").css("margin-left",kiric4 + "px");
		$("#img-slider-5").css("margin-left",kiric5 + "px");
		htg++;
	}
}

function nextImage(){
	if(htg >= -1){

		kiric1 = kiric1 - 275;
		kiric2 = kiric2 - 275;
		kiric3 = kiric3 - 275;
		kiric4 = kiric4 - 275;
		kiric5 = kiric5 - 275;

		$("#img-slider-1").css("margin-left",kiric1 + "px");
		$("#img-slider-2").css("margin-left",kiric2 + "px");
		$("#img-slider-3").css("margin-left",kiric3 + "px");
		$("#img-slider-4").css("margin-left",kiric4 + "px");
		$("#img-slider-5").css("margin-left",kiric5 + "px");
		htg--;
	}
	
}

$(function() {
	var availableData = [
		"Taman Balai Kota",
		"Taman Alun-Alun Bandung",
		"Taman Lansia",
		"Taman Alun-Alun Ujung Berung",
		"Taman Braga",
		"Taman Film",

	];

	$("#se").autocomplete({
		source: availableData,
		autoFocus:true
	});
});
					