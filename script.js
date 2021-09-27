const board = document.querySelector('#board');
const colors = ['#9B3CED','#B1BAED','#ED70B9','#5484ED','#EDED7D','#76ED66','#F4EE3E','#F48A3E','#F4604D','#8DA399','#1F13A3','#07C800']
const SQUARES_NUMBER = 1000;
//'#9B3CED','#B1BAED','#ED70B9','#5484ED','#EDED7D','#76ED66','#F4EE3E','#F48A3E','#F4604D','#8DA399','#1F13A3','#07C800'

//'#F4413D','#014408','#111111','#FDB9AA','#E1E1E1','#59000E','#1F1C18'
for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => {
		
		setColor(square);
	})

	square.addEventListener('mouseleave', () => {
		removeColor(square);
	})

	board.append(square);
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	 element.style.backgroundColor = 'transparent';
	element.style.boxShadow = `0 0 2px transparent`;
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}