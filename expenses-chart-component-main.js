'use strict'; 



const colors ={
	'White': 'hsl(0, 0%, 100%)',
	'Off black': 'hsl(0, 0%, 8%)',
};

$(window).resize(function(){
	location.reload();
});

const data ={
	
}

function getJson(){
	import * as data from 'data.json';
    const days = data.day;
    console.log(days); // output 'testing'
}


$(window).on('load',function(){
	
	 getJson();
	 
	 
	 
	 
	 
});
