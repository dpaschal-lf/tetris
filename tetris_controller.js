



class TetrisGame{
	constructor(blockSize){
		this.domElements = {
			mainGameBoard: $("#pieceContainer"),
			score: $("#info"),
			nextPiece: $("#nextPiece")
		}
		this.updateTimeDuration = 1000;
		this.blockSize = blockSize;
		this.pieces = [];
		this.theme = 'theme.mp3';
		this.player = null;
		this.updateTimer = null;
	}
	startGameUpdate(){
		if(this.updateTimer !== null){
			this.stopUpdateTimer();
		}
		this.updateTimer = setInterval( this.handleUpdate.bind(this), this.updateTimeDuration);
	}
	stopUpdateTimer(){
		clearInterval(this.updateTimer);
		this.updateTimer = null;
	}
	showStartScreen(){
		$("#startGameButton").click(this.startGame.bind(this));
	}
	startGame(){
		this.closeModal();
		this.playSong(.09);
		this.startGameUpdate();
	}
	closeModal(){
		$("#modal").hide(200);
	}
	handleUpdate(){
		for(var piecesI=0; piecesI < this.pieces.length; piecesI++){
			var piecesLoc = this.pieces[piecesI].getLocation();
			this.pieces[piecesI].moveToLocation(piecesLoc.x, piecesLoc.y++);
		}
	}
	playSong(volume){
		this.player = new Audio();
		this.player.src = this.theme;
		this.player.volume = volume;
		this.player.play();
	}
	createPiece( pieceMap, color){
		var pieceContainer = new TetrisPiece(pieceMap, color, this.blockSize);
		var containerWidth = this.domElements.mainGameBoard.width();
		var blockWidth = containerWidth / this.blockSize.width;
		var middleBlock = Math.floor((blockWidth / 2))-1;
		pieceContainer.setLocation( middleBlock, 0);
		this.pieces.push( pieceContainer );
	}
	render(){
		for( var i=0; i< this.pieces.length; i++){
			var domElement = this.pieces[i].render();
			this.domElements.mainGameBoard.append(domElement);
		}
	}
}