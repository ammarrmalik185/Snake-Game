let score = 0;
let current_snake;
let current_food;

function setup(){
    let myCanvas = createCanvas(600, 400);
    myCanvas.parent("canvas");

    current_snake = snake();
    current_snake.initSnake();

    current_food = food();
}


function draw(){
    background(0);
    current_snake.update();
    current_snake.hitSelf();
    current_snake.renderSnake();

    current_food.generateFood();
    current_food.renderFood();

    current_snake.eatFood(current_food);

}