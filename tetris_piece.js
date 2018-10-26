


class TetrisPiece{
	constructor(blockMap, color, blockSize){
		this.blocks = [];
		this.originalColor = color;
		this.containerElement = null;
		this.blockSize = blockSize;
		for( var blockIndex = 0; blockIndex < blockMap.length; blockIndex++){
			var currentBlock = blockMap[blockIndex];
			var newBlock = this.addBlock(currentBlock.x, currentBlock.y, color);
		}
	}
	addBlock( x, y, color){
		var block = new TetrisBlock(x,y,color);
		this.blocks.push( block );
		return block
	}
	render(){
		this.containerElement = $("<div>",{
			'class': 'tetris-piece'
		})
		var blockDomElements = [];
		for(var i=0; i<this.blocks.length; i++){
			var renderedBlock = this.blocks[i].render();
			blockDomElements.push( renderedBlock);
			this.blocks[i].setSize( this.blockSize.width + this.blockSize.unit, this.blockSize.height + this.blockSize.unit)
			this.blocks[i].position(
				((this.blocks[i].location.x * this.blockSize.width ) + this.blockSize.unit),
				((this.blocks[i].location.y * this.blockSize.height ) + this.blockSize.unit)
			);
		}
		this.containerElement.append(blockDomElements)
		return this.containerElement;
	}
}