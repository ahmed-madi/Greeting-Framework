(function(global, $){
	
	var Greeter = function(firstname, lastname, language){

		return new Greeter.init(firstname, lastname, language);
	}

	/*I can creat a function to declare and expose these variable globaly and use
	arguments keyword to access the passed parameters "this will increase readabilty,
	reusabilty, maintainability and scalability.
	*/
	var supportedLanguages = ['en', 'es'];

	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	var formalreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};

	Greeter.prototype = {
		fullname = function(){
			return this.firstname + ' ' + this.lastname;
		},

		validate = function(){
			if (supportedLanguages.indexOf(this.language) === -1){
				throw this.language +' is not supported !';
			}
		},
	};

	Greeter.init(firstname, lastname, language){

		var self = this;
		self.firstname = firstname || "";
		self.lastname = lastname || "";
		self.language = language || "en";
	}
	
	Greeter.init.prototype = Greeter.prototype;

	global.Greeter = global.G$ = Greeter;

}(window, jquery));