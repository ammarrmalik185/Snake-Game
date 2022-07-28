function snake() {
    this.snake = [];
    this.speed = 2;
    this.radius = 10;
    this.snakeColor = color(255);

    this.initSnake = function () {
        this.movement = [0, 0]
        this.snake = [];
        let end = 60;
        for (let start = end; start>30; start--){
            snake.push([start, 50])
        }
        this.snakeColor = color(255, 0, 0);
        frameRate(60);
    }

    this.update = function () {
        if (keyIsDown(LEFT_ARROW)){
            if (this.movement[0] !== 1)
                this.movement = [-1, 0]
        }else if (keyIsDown(RIGHT_ARROW)){
            if (this.movement[0] !== -1)
                this.movement = [1, 0]
        }else if (keyIsDown(UP_ARROW)){
            if (this.movement[1] !== 1)
                this.movement = [0, -1]
        }else if (keyIsDown(DOWN_ARROW)){
            if (this.movement[1] !== -1)
                this.movement = [0, 1]
        }

        if (this.movement[0] !== 0 || this.movement[1] !== 0 ) {
            let previous = [this.snake[0][0], this.snake[0][1]];
            this.snake[0][0] += this.movement[0] * this.speed;
            this.snake[0][1] += this.movement[1] * this.speed;

            if (this.snake[0][0] > width){
                this.snake[0][0] = this.snake[0][0] - width;
            }
            if (this.snake[0][0] < 0){
                this.snake[0][0] = this.snake[0][0] + width;
            }
            if (this.snake[0][1] > height){
                this.snake[0][1] = this.snake[0][1] - height;
            }
            if (this.snake[0][1] < 0){
                this.snake[0][1] = this.snake[0][1] + height;
            }

            for (let index = 1; index < this.snake.length; index++) {
                let prev_new = [this.snake[index][0], this.snake[index][1]];
                this.snake[index][0] = previous[0]
                this.snake[index][1] = previous[1]
                previous = prev_new;
            }
        }
    }

    this.eatFood = function (food) {
        let head = this.snake[0];
        let yHit = food.coords[0] < head[0] + this.radius && food.coords[0] > head[0] - this.radius;
        let xHit = food.coords[1] < head[1] + this.radius && food.coords[1] > head[1] - this.radius;
        if (yHit && xHit){
            food.foodExists = false;
            score += food.score;
            for (let x = 0; x<10; x++)
                this.snake.push([-50,-50])
            document.getElementById("score").innerText = score.toString();
        }
    }

    this.hitSelf = function () {
        for (let index = 1; index < this.snake.length; index++){
            if (this.snake[index][0] === this.snake[0][0] && snake[index][1] === this.snake[0][1]){
                frameRate(0);
                document.getElementById("status").innerText = "gameover"
            }
        }
    }

    this.renderSnake = function () {
        strokeWeight(0);
        fill(this.snakeColor);
        for (let cord of this.snake){
            ellipse(cord[0], cord[1], 5);
        }
        ellipse(this.snake[0][0], this.snake[0][1], 10);
    }

    return this;
}