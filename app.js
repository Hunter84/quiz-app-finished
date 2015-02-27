$(document).ready(function() {
		var questNum = 'start';
		var picked;
		var clicked;
		var correct;

	    var questions = [{
        question: "what is 55 * 10?",
        choices: ["550", "555", "505", "055"],
        Num : 0,
        correct : 0
        },
        {
        question: "what time is it in Romania?",
        choices: ["11pm", "6am", "Party Time!", "3pm"],
        Num : 2,
        correct : 2
        },
        {
        question: "When I said 'Quiz' did I really mean it? ",
        choices: ["Quiz", "Qiz", "Qize", "Quez"],
        Num : 0,
        correct : 0
        },
        {
        question: "Are there any risks in computer science?",
        choices: ["Brain Exploding", "Getting Fat", "12 Hours of your day", "All of the above"],
        Num : 3,
        correct : 2
        },
        {
        question: "What is 9 plus 10?",
        choices: ["21", "21", "21", "21"],
        Num : 4,
        correct : 0
    }]
    $('.answer').mouseenter(function(){
		$(this).css('border-radius', '15px');
		$(this).css('background-color', 'darkseagreen');
		$(this).css('cursor', 'pointer');
	});
	$('.answer').mouseleave(function(){
		$(this).css('border-radius', '0px');
		$(this).css('background-color', 'bisque');
	});
	$('#1').on('click', function(){
		clicked = 1;
	});
	$('#2').on('click', function(){
		clicked = 2;
	});
	$('#3').on('click', function(){
		clicked = 3;
	});
	$('#4').on('click', function(){
		clicked = 4;
	});
	$('.answer').on('click', function() {
		switch(questNum) {
			case 'start':
			    $('.circle').css('background-color', 'lightblue');
			    if(clicked == 1) {
			    	$('#00').css('background-color', 'darkseagreen');
			    }
				questNum = 0;
				correct = 0;
				questNum++;
			case 1:
				$('#question').html(questions[0].question);
			    $('#1').html(questions[0].choices[0]);
			    $('#2').html(questions[0].choices[1]);
			    $('#3').html(questions[0].choices[2]);
			    $('#4').html(questions[0].choices[3]);

			    questNum++;
			    console.log(questNum);
			    break;
		    case 2:
		    	$('#question').html(questions[1].question);
			    $('#1').html(questions[1].choices[0]);
			    $('#2').html(questions[1].choices[1]);
			    $('#3').html(questions[1].choices[2]);
			    $('#4').html(questions[1].choices[3]);
			    if(clicked == 1) {
			    	$('#11').css('background-color', 'darkseagreen');
			    	correct++;
			    }
			    else {
			    	$('#11').css('background-color', 'tomato');
			    }
			    questNum++;
			    console.log(questNum);
			    break;
		    case 3:
		    	$('#question').html(questions[2].question);
			    $('#1').html(questions[2].choices[0]);
			    $('#2').html(questions[2].choices[1]);
			    $('#3').html(questions[2].choices[2]);
			    $('#4').html(questions[2].choices[3]);
			    questNum++;
			    console.log(questNum);
			    if(clicked == 3) {
			    	$('#22').css('background-color', 'darkseagreen');
			    	correct++;
			    }
			    else {
			    	$('#22').css('background-color', 'tomato');
			    }
			    break;
		    case 4:
		    	$('#question').html(questions[3].question);
			    $('#1').html(questions[3].choices[0]);
			    $('#2').html(questions[3].choices[1]);
			    $('#3').html(questions[3].choices[2]);
			    $('#4').html(questions[3].choices[3]);
			    questNum++;
			    console.log(questNum);
			    if(clicked == 1) {
			    	$('#33').css('background-color', 'darkseagreen');
			    	correct++;
			    }
			    else {
			    	$('#33').css('background-color', 'tomato');
			    }
			    break;
		    case 5:
		    	$('#question').html(questions[4].question);
			    $('#1').html(questions[4].choices[0]);
			    $('#2').html(questions[4].choices[1]);
			    $('#3').html(questions[4].choices[2]);
			    $('#4').html(questions[4].choices[3]);
			    questNum++;
			    console.log(questNum);
			    if(clicked == 4) {
			    	$('#44').css('background-color', 'darkseagreen');
			    	correct++;
			    }
			    else {
			    	$('#44').css('background-color', 'tomato');
			    }
			    break;
		    case 6:
				$('#question').html(correct + "of 5 questions correct");
			    $('#1').html("Start Again?");
			    $('#2').html('');
			    $('#3').html('');
			    $('#4').html('');
			    console.log(questNum);
			    	$('#55').css('background-color', 'tomato');
		    	questNum = 'start';
			    break;
		    // case 4:
		    // 	$('#question').html(questions[4].question);
			   //  $('#1').html(questions[4].choices[0]);
			   //  $('#2').html(questions[4].choices[1]);
			   //  $('#3').html(questions[4].choices[2]);
			   //  $('#4').html(questions[4].choices[3]);
			   //  questNum++;
			   //  console.log(questNum);
			   //  if(clicked == 4) {
			   //  	$('#44').css('background-color', 'green');
			   //  }
			   //  else {
			   //  	$('#44').css('background-color', 'red');
			   //  }
			   //  break;
		};

	});


	// if (questNum === 1) {
	// 	$('.answer').on('click', function() {
	// 	    $('#1').html(questions[1].choices[0]);
	// 	    $('#2').html(questions[1].choices[1]);
	// 	    $('#3').html(questions[1].choices[2]);
	// 	    $('#4').html(questions[1].choices[3]);
	// 	    questNum++;
	// 	    console.log(questNum);
	// 	});
	// }	else if (questNum === 2) {
	// 	$('.answer').on('click', function() {
	// 	    $('#1').html(questions[2].choices[0]);
	// 	    $('#2').html(questions[2].choices[1]);
	// 	    $('#3').html(questions[2].choices[2]);
	// 	    $('#4').html(questions[2].choices[3]);
	// 	    prompt('areyouok?');
	// 	});
	// }
});
