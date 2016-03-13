(function (root) {
    var EMPTY = root.maze.EMPTY;
    var WALL = root.maze.WALL;
    var PATH = root.maze.PATH;
    var CURRENT = root.maze.CURRENT;

    /**
     * Функция находит путь к выходу и возвращает найденный маршрут
     *
     * @param {number[][]} maze карта лабиринта представленная двумерной матрицей чисел
     * @param {number} x координата точки старта по оси X
     * @param {number} y координата точки старта по оси Y
     * @returns {[number, number][]} маршрут к выходу представленный списоком пар координат
     */
    function solution(maze, x, y) {
        // todo: построить правильный маршрут к выходу
        var p = [], 
            point,
            i = 1,
            flag = "d",
            current = [x,y];
            p[0] = [x,y];
        while(maze[y + 1][x] == 0){
            funY(current, 1);
        }
        while (y < maze.length - 1){
        i++;
        current = [x,y];
        switch (flag){
            case "d":{
                if (maze[y][x - 1] == 0){
                    funX(current, -1);
                    flag = "l";
                } else if(maze[y + 1][x] == 0){
                    funY(current, 1);
                }
                else  if (maze[y][x + 1] == 0){
                    funX(current , 1);
                    flag = "r";
                } else {
                    funY(current, -1);
                    flag = "u";
                }
                break;
            }
            case "r":{
                if (maze[y + 1][x] == 0){
                    funY(current, 1);
                    flag = "d";
                } else if(maze[y][x + 1] == 0){
                    funX(current, 1);
                }else if (maze[y - 1][x] == 0){
                    funY(current, -1);
                    flag = "u";
                } else {
                    funX(current, -1);
                    flag = "l";
                }
                break;
            }
            case "l":{
                if (maze[y - 1][x] == 0){
                    funY(current, -1);
                    flag = "u";
                } else if(maze[y][x - 1] == 0){
                    funX(current, -1);
                }else if (maze[y + 1][x] == 0){
                    funY(current, 1);
                    flag = "d";
                } else {
                    funX(current, 1);
                    flag = "r";
                }
                break;
            }
            case "u": {
                if (maze[y][x + 1] == 0){
                    funX(current, 1);
                    flag = "r";
                } else if(maze[y - 1][x] == 0){
                    funY(current, -1);
                }else if (maze[y][x - 1] == 0){
                    funX(current, -1);
                    flag = "l";
                } else {
                    funY(current, 1);
                    flag = "d";
                }
                break;
            }
            default: break;
        }
        }
        function funX(current, index){
            point = [x + index * 1,y];
            x = x + index;
            p[i] = point;
        }
        function funY(current, index){
            point = [x,y + index * 1];
            y = y + index;
            p[i] = point;
        }
        return p;
    }

    root.maze.solution = solution;
})(this);
