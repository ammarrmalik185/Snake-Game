function food() {
    this.foodExists = false;
    this.coords = [0, 0];
    this.score = 0;
    this.radius = 5;
    this.super = false;
    this.foodColor = color(255);

    this.generateFood = function () {
        if (!this.foodExists){
            this.coords = [Math.floor(Math.random() * width), Math.floor(Math.random() * height)];
            this.foodExists = true;
            let rng = Math.random() * 10;

            if (rng >= 8){
                this.super = true;
                this.score = 5;
                this.foodColor = color(255, 0, 0)
                this.radius = 10;
            }else{
                this.super = false;
                this.score = 1;
                this.foodColor = color(255);
                this.radius = 5;
            }
        }
    }

    this.renderFood = function () {
        fill(this.foodColor);
        rect(this.coords[0], this.coords[1], this.radius, this.radius);
    }

    return this;
}