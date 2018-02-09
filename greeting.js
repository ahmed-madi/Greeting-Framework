;(function(global, $){
	
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
		fullname: function(){
			return this.firstname + ' ' + this.lastname;
		},

		validate: function(){
			if (supportedLanguages.indexOf(this.language) === -1){
				throw this.language +' is not supported !';
			}
		},

		greetings: function(){
			return greetings[this.language] + ' ' + this.firstname;
		},

		formalGreetings: function(){
			return formalreetings[this.language] + ' ' + this.fullname();
		},

		//chanable method
		greet: function(formal){
			var msg;
			
			//if undefined or null it will be coerced to 'false'
			if(formal){
				msg = this.formalGreetings();
			}
			else{
				msg = this.greetings();
			}

			if(console){
				console.log(msg);
			}
			// make the method chainable
			return this;
		},

		log: function(){
			if(console){
				console.log(logMessages[this.language] + ': ' + this.fullname());
			}
			return this;
		},
		setLang: function(lang){
			this.language = lang;

			this.validate();

			return this;
		},

		HTMLGreeting: function(selector, formal){
			if(!$){
				throw "JQuery not loaded!";
			}
			if(!selector){
				throw "Missing jQuery selector";
			}

			var msg;
			if(formal){
				msg = this.formalGreetings();
			}
			else{
				msg = this.greetings();
			}
			$(selector).html(msg);
			return this;
		}
	};

	Greeter.init = function(firstname, lastname, language) {

		var self = this;
		self.firstname = firstname || "";
		self.lastname = lastname || "";
		self.language = language || "en";

		self.validate();
	}
	
	Greeter.init.prototype = Greeter.prototype;

	global.Greeter = global.G$ = Greeter;

}(window, jQuery));