
function autoComplete(){
	var availableData = [
		"Taman Balai Kota",
		"Taman Alun-Alun Bandung",
		"Taman Lansia",
		"Taman Alun-Alun Ujung Berung",
		"Taman Braga",
		"Taman Film",

	];

	$("input#se").autocomplete({
	  source: availableData
	});

}