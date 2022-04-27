const dog = {
	name: "Bobobobo",
	ageInDogYears: 5,
	ageInHumanYears() {
		console.log(this.ageInDogYears*15)
	},
	faveFood: ['bacon', 'chicken', 'sausage'],
	species: 'afghan hound',
	isAdopted: true,
	dogSize: "huge",
	call: "arrrrrf arrrrrrf"
}

console.log(`${dog.name} is an ${dog.species} and it measures ${dog.dogSize}`); // "Bobobobo is an afghan hound and it measures huge"

console.log(`Look, a cat! ${dog.name} barks: ${dog.call}!`); // outputs "Look, a cat! Bobobobo barks: arrrrrf arrrrrrf!"

dog.ageInHumanYears(); // outputs 75

dog.faveFood.push('blueberries');
console.log(dog.faveFood.join(' ')); // outputs "bacon chicken sausage blueberries"

if (dog.isAdopted !== true) {
	console.log('Ready for adoption!');
} else {
	console.log('This baby is already adopted');
	
} /// outputs "This baby is already adopted"

