var main = function (){
    console.log('gotowy do boju!');
    var a, b
    $('#sum').click(function(){
    	a=parseNumber('#number_a');
    	b=parseNumber('#number_b');

    	var sum = add(a,b);
    	printScore(sum);
    });

    $('#sub').click(function(){
    	a=parseNumber('#number_a');
    	b=parseNumber('#number_b');

    	var sub = substract(a,b);
    	printScore(sub);
    });

       $('#mul').click(function(){
    	a=parseNumber('#number_a');
    	b=parseNumber('#number_b');

    	var mul = multiply(a,b);
    	printScore(mul);
    });

	 $('#div').click(function(){
	    	a=parseNumber('#number_a');
	    	b=parseNumber('#number_b');

	    	var div = divide(a,b);
	    	printScore(div);
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
	var c= a+b;
	return c;
}


function substract(a,b){
	var c= a-b;
	return c;
}

function multiply(a,b){
	var c= a*b;
	return c;
}

function divide(a,b){
	var c= a/b;
	if(b==0){
		return 'Nie dzieli się przez 0!';
	}
	return c;
}


function printScore(score){
	$('#score_indicator').text(score);
}



$(document).ready(main);