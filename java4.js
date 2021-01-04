//object
var myPhone = newPhone
newPhone = "phone"
myPhone.length
myPhone.toUpperCase
var myPhone2 = "my phone";

//new object

var myPhone2 = new Object();
myPhone2.maxSpeed = 4.0
myPhone2.brightness = 10
myPhone2.open = function(){ console.log("now opening");};

var myPhone3 = {
	maxSpeed: 5.0, 
	brightness: 9,
	open: function(speed, time){ console.log(speed * time);}

};

myPhone3.open(10, 13);

//"THIS" keyword

var myPhone4 = {
	maxSpeed: 5.0, 
	brightness: 9,
	open: function(speed, time){ console.log(speed * time);},
	test: function(){console.log(this);},
	logPhone: function(){console.log("the max speed is" + this.maxSpeed);
}
};

//Constructor Function

var Nokia = function(maxSpeed, brightness){
	
	this.maxSpeed = maxSpeed;
	this.brightness = brightness;
	this.open = function(speed, time){ console.log(speed * time);};
	this.logPhone= function(){console.log("the max speed is" + this.maxSpeed);};
}

var myNokia = new Nokia(5.0, 10)
var myNokia1 = new Nokia(5.0, 11)
var myNokia2 = new Nokia(5.0, 12)
var myNokia3 = new Nokia(5.0, 13)

//the date object

var birthday = new Date(1988, 5, 16, 11, 15, 25)
var birthday2 = new Date(1988, 5, 16, 11, 15, 25)

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if(birthday.getTime() == birthday2.getTime()){
	console.log("birthdays are equal");
} else{
	console.log("birthdays are not equal")
}

//What is Dom?