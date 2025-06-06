document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = 1000;
    canvas.height = 800;
    const ctx = canvas.getContext("2d");

    const box = 20;
    let snake = [{ x: 10 * box, y: 10 * box }];
    let direction = "RIGHT";
    let food = {
        x: Math.floor(Math.random() * (canvas.width / box)) * box,
        y: Math.floor(Math.random() * (canvas.height / box)) * box
    };
    let score = 0;

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
        else if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
        else if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
        else if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
    });

    function draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "red";
        ctx.fillRect(food.x, food.y, box, box);

        for (let i = 0; i < snake.length; i++) {
            ctx.fillStyle = i === 0 ? "green" : "lightgreen";
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
        }

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (direction === "UP") snakeY -= box;
        if (direction === "DOWN") snakeY += box;
        if (direction === "LEFT") snakeX -= box;
        if (direction === "RIGHT") snakeX += box;

        // Wrap around screen boundaries
        if (snakeX < 0) snakeX = canvas.width - box;
        else if (snakeX >= canvas.width) snakeX = 0;
        if (snakeY < 0) snakeY = canvas.height - box;
        else if (snakeY >= canvas.height) snakeY = 0;

        if (snakeX === food.x && snakeY === food.y) {
            score++;
            food = {
                x: Math.floor(Math.random() * (canvas.width / box)) * box,
                y: Math.floor(Math.random() * (canvas.height / box)) * box
            };
        } else {
            snake.pop();
        }

        let newHead = { x: snakeX, y: snakeY };

        if (collision(newHead, snake)) {
            clearInterval(game);
            alert("Game Over! Score: " + score);
        }

        snake.unshift(newHead);
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Score: " + score, 10, 20);
    }

    function collision(head, array) {
        return array.some(segment => segment.x === head.x && segment.y === head.y);
    }

    let game = setInterval(draw, 100);
});
