//canvas - находим блок по id и даем контекст ему
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//задаём в константы картинки еды и поля
const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

/*
в box количество пикселей на одну клетку
в score начальный счёт равный 0
в food объект содержащий координаты еды
в snake массив, из объектов с координатами частей тела змейкм
*/
let box = 32;

let score = 0;

let food = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 3)) * box
}

let snake = [];
snake[0] = {
	x: 9 * box,
	y: 10 * box
}

/*создаём обработчик событий, который будет реагировать на клавиши и передавать
их в функцию direction*/
document.addEventListener("keydown", direction);

let dir;

function direction(event) {
	if(event.keyCode == 37 && dir != "right")
		dir = "left";
	else if(event.keyCode == 38 && dir != "down")
		dir = "up";
	else if(event.keyCode == 39 && dir != "left")
		dir = "right";
	else if(event.keyCode == 40 && dir != "up")
		dir = "down";
}

//Функция на проверку столкновения в себя
function eatTail(head, arr) {
	for (var i = 0; i < arr.length; i++) {
		if (head.x == arr[i].x && head.y == arr[i].y) 
			clearInterval(game);
	}
}

//функция, которая рисует в браузере элементы
function drawGame() {
	//рисуем поле
	ctx.drawImage(ground, 0, 0);

	//рисуем еду
	ctx.drawImage(foodImg, food.x, food.y);

	//через цикл рисуем змейку т.к. у нее много эл-в
	for (let i = 0; i < snake.length; i++) {
		ctx.fillStyle = i == 0 ? "green" : "red";
		ctx.fillRect(snake[i].x, snake[i].y, box, box); 
	}

	//рисуем счёт
	ctx.fillStyle = "white";
	ctx.font = "50px Arial";
	ctx.fillText(score, box * 2.5, box * 1.7);

	//сохраняем координату первого элемента змейки
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	//Если координаты головы и еды совпадают, 
	// то счёт увеличивается, еда появляется в новом месте
	if(snakeX == food.x && snakeY == food.y) {
		score++;

		food = {
			x: Math.floor((Math.random() * 17 + 1)) * box,
			y: Math.floor((Math.random() * 15 + 3)) * box
		}
	} else {
		//удаляем последний эл-т в массиве через функцию .pop
		snake.pop();
	}

	//Если змея уходит за границы, игра заканчивается
	if(snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17) {
		clearInterval(game);
	}

	//новые координаты
	if (dir == "left") snakeX -= box;
	if (dir == "right") snakeX += box;
	if (dir == "up") snakeY -= box;
	if (dir == "down") snakeY += box;

	//новый эл-т змейки
	let newHead = {
		x: snakeX,
		y: snakeY
	}

	eatTail(newHead, snake);

	//передаём элемент в самое начало змейки
	snake.unshift(newHead);
} 

//для отоброжения игры с интервалом в 100мс
let game = setInterval(drawGame, 150);