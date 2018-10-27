
$(document).ready( startApp );
var blockTemplates = [
 //S piece
	[    
		{x: 0, y: 1},
		{x: 0, y: 2},
		{x: 1, y: 0},
		{x: 1, y: 1}
	],
 	//Z piece
	[    
		{x: 0, y: 0},
		{x: 1, y: 0},
		{x: 1, y: 1},
		{x: 2, y: 1}
	],
	//O piece
	[
		{x: 0, y: 0},
		{x: 0, y: 1},
		{x: 1, y: 1},
		{x: 1, y: 0}		
	],

	//I piece
	[
		{x: 0, y: 0},
		{x: 0, y: 1},
		{x: 0, y: 2},
		{x: 0, y: 3}		
	],	
 /*
    0   1   2   3
 0  x   x   x
 1      x     
 2     
 3  
 */
	//T piece
	[
		{x: 0, y: 0},
		{x: 1, y: 0},
		{x: 2, y: 0},
		{x: 1, y: 1}		
	],	
	//L piece
	[
		{x: 0, y: 0},
		{x: 0, y: 1},
		{x: 0, y: 2},
		{x: 1, y: 2}		
	],	
	//J piece
	[
		{x: 1, y: 0},
		{x: 1, y: 1},
		{x: 1, y: 2},
		{x: 0, y: 2}		
	],	
]
var game;

var defaultBlockSize = {
	height: 60,
	width: 60,
	unit: 'px'
}

function startApp(){
	game = new TetrisGame(defaultBlockSize);
	game.showStartScreen();
	game.createPiece(blockTemplates[1], 'lime');
	game.render();

}








