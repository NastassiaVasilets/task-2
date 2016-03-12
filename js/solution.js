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
            current = fun3(current);
        }
        while (y < maze.length - 1){
        switch (flag){
            case "d":{
                if (maze[y][x - 1] == 0){
                    current = fun1(current);
                    flag = "l";
                } else if(maze[y + 1][x] == 0){
                    current = fun3(current);
                }
                else  if (maze[y][x + 1] == 0){
                    current = fun2(current);
                    flag = "r";
                } else {
                    current = fun4(current);
                    flag = "u";
                }
                break;
            }
            case "r":{
                if (maze[y + 1][x] == 0){
                    current = fun3(current);
                    flag = "d";
                } else if(maze[y][x + 1] == 0){
                    current = fun2(current);
                }else if (maze[y - 1][x] == 0){
                    current = fun4(current);
                    flag = "u";
                } else {
                    current = fun1(current);
                    flag = "l";
                }
                break;
            }
            case "l":{
                if (maze[y - 1][x] == 0){
                    current = fun4(current);
                    flag = "u";
                } else if(maze[y][x - 1] == 0){
                    current = fun1(current);
                }else if (maze[y + 1][x] == 0){
                    current = fun3(current);
                    flag = "d";
                } else {
                    current = fun2(current);
                    flag = "r";
                }
                break;
            }
            case "u": {
                if (maze[y][x + 1] == 0){
                    fun2(current);
                    flag = "r";
                } else if(maze[y - 1][x] == 0){
                    fun4(current);
                }else if (maze[y][x - 1] == 0){
                    fun1(current);
                    flag = "l";
                } else {
                    fun3(current);
                    flag = "d";
                }
                break;
            }
            default: break;
        }
        }
        function fun1(current){
            point = [x - 1,y];
            p[i] = point;
            i++;
            x--;
            current = [x,y];
            return current;
        }
        function fun2(current){
            point = [x + 1,y];
            p[i] = point;
            i++;
            x++;
            current = [x,y];
            return current;
        }
        function fun3(current){
            point = [x,y + 1];
            p[i] = point;
            i++;
            y++;
            current = [x,y];
            return current;
        }
        function fun4(current){
            point = [x, y - 1];
            p[i] = point;
            i++;
            y--;
            current = [x,y];
            return current;
        }
        return p;
    }

    root.maze.solution = solution;
})(this);
