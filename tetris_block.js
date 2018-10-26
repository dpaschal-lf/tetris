


class TetrisBlock{
	constructor(x,y, color){
		this.location = {
			x: x,
			y: y
		}
		this.color = color;
		this.domElement = null;
	}
	setSize(width, height){
		this.domElement.css({
			width: width,
			height: height
		})
	}
	position( left, top){
		this.domElement.css({
			left: left,
			top: top
		})
	}
	render(){
		this.domElement = $("<div>",{
			'class': 'tetris-block',
			css: {
				'background-color': this.color
			}
		});
		return this.domElement;
	}
}