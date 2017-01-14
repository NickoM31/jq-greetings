$("button").click(function(){

	var obj = {

		prenom : $("#first_name").val(),
		nom : $("#last_name").val(),
		ville : $("#city").val(),
	};
	console.log(obj);	
	$("#username").text("Bonjour" + " " + obj.prenom + " " + obj.nom + ", " + 
		"tu habites" + " " + obj.ville + ".");

});


















