const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	results = fruit.filter(currentFruit => currentFruit.toLowerCase().includes(str.toLowerCase()));
return results;
}

function searchHandler(e) {
	const inputValue = e.target.value;
	if (inputValue === "") {
		suggestions.innerHTML = "";
		return;
	}
	const results = search(inputValue);
	showSuggestions(results, inputValue);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = "";
	if (results.length > 0) {
		results.forEach(result => {
			const item = document.createElement("li");
			item.innerText = result;
			suggestions.appendChild(item);
		});

	}
}

function useSuggestion(e) {
	const chosenSuggestion = e.target.innerText;
	input.value = chosenSuggestion;
	suggestions.innerHTML = "";

}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);