



class TetrisGame{
	constructor(blockSize){
		this.domElements = {
			mainGameBoard: $("#pieceContainer"),
			score: $("#info"),
			nextPiece: $("#nextPiece")
		}
		this.blockSize = blockSize;
		this.pieces = [];
		this.theme = 'theme.mp3';
		this.player = null;
	}
	playSong(volume){
		this.player = new Audio();
		this.player.src = this.theme;
		this.player.volume = volume;
		this.player.play();
	}
	createPiece( pieceMap, color){
		var pieceContainer = new TetrisPiece(pieceMap, color, this.blockSize);
		this.pieces.push( pieceContainer );
	}
	render(){
		for( var i=0; i< this.pieces.length; i++){
			var domElement = this.pieces[i].render();
			this.domElements.mainGameBoard.append(domElement);
		}
	}
}