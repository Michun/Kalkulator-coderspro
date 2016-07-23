var main = function (){
	console.log('gotowy do boju!');
	var a, b;

	$('#sum').click(function(){
		a = parseNumber('#number_a');
		b = parseNumber('#number_b');
		
		var sum = add(a,b);
		printScore(sum);
	});
}

function parseNumber (id){
	var number = $(id).val();
	number = checkCommas(number);
	number = parseFloat(number);
	return number;
}

function checkCommas(temp){
	if(temp.indexOf(',') > -1){
		temp.replace(',', '.');
	}
	return temp;
}

function add(a,b){
	var c = a + b;
	return c;
}

function printScore(score){
	$('#score_indicator').text(score);
}






$(document).ready(main);