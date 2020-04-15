const toDoList = [];


const form = document.querySelector('form');
const formInput = document.querySelector('form input');
const btnRemove = document.querySelector('button.remove');
const spanNumber = document.querySelector('h1 span');
const inputSearch = document.querySelector('input.search');
const ul = document.querySelector('ul');


const removeTask = (e) => {
	const numberKey = e.target.parentNode.dataset.key;
	toDoList.splice(numberKey, 1);
	spanNumber.textContent = toDoList.length;
	renderFunction();

}

crossWord = (e) => {
	e.target.parentNode.classList.toggle('checked');
}

addTask = (e) => {
	e.preventDefault()
	const wordsInput = formInput.value;
	if (wordsInput === "") {
		return;
	}
	const liElements = document.createElement('li');
	liElements.innerHTML = '<input type="checkbox"> </input>' + wordsInput + "<span> [X]</span>";
	toDoList.push(liElements);
	renderFunction();
	formInput.value = "";
	spanNumber.textContent = toDoList.length;
	liElements.querySelector('span').addEventListener('click', removeTask);
	liElements.querySelector('input').addEventListener('click', crossWord)

}

const renderFunction = () => {
	ul.textContent = "";
	toDoList.forEach((li, index) => {
		li.dataset.key = index;
		ul.appendChild(li);
	})
}

removeAll = () => {
	ul.textContent = "";
	toDoList.length = 0;
	spanNumber.textContent = 0;
}

searchTask = (e) => {
	const searchTxt = e.target.value.toLowerCase();
	console.log(searchTxt);
	let elementList = toDoList;
	elementList = elementList.filter(li => li.textContent.toLowerCase().includes(searchTxt));
	ul.textContent = "";
	elementList.forEach(li => ul.appendChild(li));
}


form.addEventListener('submit', addTask);
btnRemove.addEventListener('click', removeAll);
inputSearch.addEventListener('input', searchTask);