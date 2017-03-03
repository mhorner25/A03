var riddle = "";
var answer = "";

var app = {
	load: function() {
		var riddles = [
			"What can travel around the world while staying in a corner?",
			"What has a head and a tail but no body?"
		];
		var answers = [
			"stamp",
			"coin"
		];
		
		var rand = Math.random() * riddles.length;
		riddle = riddles[Math.floor(rand)];
		answer = answers[Math.floor(rand)];
		
		$("#rText").html(riddle);
	},
	check: function() {
		var user = $("#answerfield").value;
		
		if (user === answer) {
			$("#yn").html("correct");
		} else {
			$("#yn").html("incorrect");
		};
	}
};

app.load();