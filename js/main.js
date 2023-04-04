//main.js

var mainScene = new Phaser.Class({
	Extends: Phaser.Scene,
	
	initialize: function() {
		Phaser.Scene.call(this, { "key" : "mainScene"});
	},
	
	
	init: function(){},
	
	
	preload: function() {
		this.load.image("house", "assets/house.png");
	},
	
	
	create: function() {
		this.plane = this.add.image(300,200,"house");
		
		let clickCount = 0;
		this.clickCountText = this.add.text(100,200, "");
		const clickButton = this.add.text(100,100, "Click", {fill: "#0f0"}).setInteractive().on("pointerdown", () => this.updateClickCountText(++clickCount));
		this.updateClickCountText(clickCount);
	},
	update: function(){},
	
	updateClickCountText(clickCount){
		this.clickCountText.setText(`Button has been clicked ${clickCount} times.`);
	}
	
});