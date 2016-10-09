$("button").click(function(){

	var obj = {

		prenom : $("#first_name").val(),
		nom : $("#last_name").val(),

	};

	console.log(obj);	

	$("#username").text(obj.prenom + " " + obj.nom);

});


















