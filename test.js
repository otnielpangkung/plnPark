let moment = require('moment');

let a = new Date();
let b = moment(a).format('YYYY-MM-DD');
let c = new Date().getTime();
let d = a.getTime();
console.log(b);
console.log(c, d);

let bb = 2000000;
let cc = 3000000;

let cities = [
	{ name: 'Los Angeles', population: 3792621 },
	{ name: 'New York', population: 8175133 },
	{ name: 'Chicago', population: 2695598 },
	{ name: 'Houston', population: 2099451 },
	{ name: 'Philadelphia', population: 1526006 },
];

if (bb) {
	cities = cities.filter(function (e) {
		return e.population > bb;
	});
}
if (cc) {
	cities = cities.filter(function (e) {
		return e.population > cc;
	});
}

console.log(cities.length);

let aaa = null;
let bbb = false;
if (aaa == bbb) console.log('Yesss');
