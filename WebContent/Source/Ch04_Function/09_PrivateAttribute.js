function Person() {
	var id = 'root';
	var name = 'root';
	
	return {
		getId: function() {
			return id;
		},
		getName: function() {
			return name;
		}
	};
};

var person = new Person();
alert(person.getId()+'---'+person.getName());