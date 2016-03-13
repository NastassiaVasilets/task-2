(function (root) {
    var map = root.maze.MAZE_Y;
    var path = root.maze.solution(map, 1, 0);
	var tempPath = [],
    	i = 0;
	setInterval(function(){
    	if (i < path.length){
            document.querySelector('.outer').innerHTML = "";
    	   tempPath[i] = path[i];
    	   document.querySelector('.outer').appendChild(root.maze.render(map, tempPath));
    	   i++;
    	}
    },1);
})(this);
