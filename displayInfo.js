"use strict";

const userName = {
	user: "My name is Nonye",
	height: `I am 5"7ft tall`,
	country: `I am from Nigeria`,
};
alert(userName.user);
alert(userName.height);

alert(userName.country);

document.write(`<h2>Student's Name:</h2> ${userName.user}.`);
document.write(`<h2>Student's Height:</h2> ${userName.height}.`);
document.write(`<h2>Student's Country:</h2> ${userName.country}.`);
