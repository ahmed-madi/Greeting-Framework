(function(global, $){
	
	var Greeter = function(firstname, lastname, language){

		return new Greeter.init(firstname, lastname, language);
	}

	Greeter.prototype = {};

	Greeter.init(firstname, lastname, language){

		var self = this;
		self.firstname = firstname || "";
		self.lastname = lastname || "";
		self.language = language || "en";
	}

	Greeter.init.prototype = Greeter.prototype;

}(window, jquery));