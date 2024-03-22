const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//goes through each value in fruit and returns a new array with any substring in fruit that contains what was searched
function search(str) {
	let results = fruit.filter((value) => {
		let eachFruit = value.toLowerCase();
		return eachFruit.includes(str.toLowerCase());
	});

	return results;
}

//seachHandler function will be called upon 'keyup'
function searchHandler(e) {
	//clear any old suggestions 
	suggestions.innerHTML = "";

	//everytime the user 'keyup', a new array will be generated with suggestions
	let currSuggestions = search(input.value);
	
	showSuggestions(currSuggestions, input.value);
}

//displays suggestions by adding the results to the dom.
//if the user deletes search, then suggestions will be removed
function showSuggestions(results, inputVal) {
	if(inputVal === ""){
		suggestions.innerHTML = "";
		return;
	}
	
	for (let eachFruit of results){
		const newLi = document.createElement("li");
		newLi.innerHTML = eachFruit.toLowerCase().split(inputVal).join(`<b>${inputVal}</b>`);
		suggestions.appendChild(newLi);
	}
}

//populates the search bar with the selected suggestion
function useSuggestion(e) {
	let selectedFruit = e.target.innerText;
	input.value = selectedFruit;
	suggestions.innerHTML = "";
}

//event listeners to trigger whenever the user hovers over a suggestion in dropdown list
suggestions.addEventListener('mouseover', (e) => {
	e.target.style.background = 'orangered';
	e.target.style.cursor = 'pointer';
})

suggestions.addEventListener('mouseout', (e) => {
	e.target.style.background = '';
	e.target.style.cursor = 'auto';
})


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);