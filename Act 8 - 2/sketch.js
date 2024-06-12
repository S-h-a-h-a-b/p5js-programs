let easing = 0.05;

function setup() {
	createCanvas(600,400);
	
	bar1 = new Bar(
		300,200, 
		createVector(width/2,300), 
		easing, 
		[200,300,200,56,78,23], 
		color("#F7BCA4") 
	);
	
}

function draw() {
	background("#BCE8F7");
	noStroke();
	bar1.display();
}

class Bar{
	constructor(bsWidth,hMax,position,easing,vals,color){
		colorMode(HSB);
		this.position = position;
		this.bsWidth = bsWidth;
		this.col = color;
		this.nbSet = vals.length;
		this.labels = []; 
		this.posLabels = []; 
		this.vals = vals;
		this.hMax = hMax;
		this.shiftx = 5;
		this.barheights=[];
		let h,s,b;	
		this.bWidth = 0;
		this.parseColor();
		this.calcWidths(this.bsWidth);
		this.initBar();
		this.label();
		this.mapVals();
		
	}
	initBar(){
		for(var i=0;i<this.nbSet;i++){
			this.barheights[i] = 0;
		}
	}
	parseColor(){
		this.h = hue(this.col);
		this.s = saturation(this.col);
		this.b = brightness(this.col);
	}
	
	calcWidths(bsWidth){
		this.bWidth = this.bsWidth/this.nbSet;
		return this.bWidth;
		
	}
	mapVals(){
		let maxVal = max(this.vals);
		for(var i=0;i<this.nbSet;i++){
		 this.vals[i] = map(this.vals[i],0,maxVal,0,this.hMax);	
		}
	}
	
	label(){
		for(var i=0;i<this.nbSet;i++){
			this.labels[i]=round(this.vals[i]);
		}
	}
	
	update(){ 
		for(var i=0;i<this.nbSet;i++){
			this.barheights[i] += (this.vals[i]-this.barheights[i])*easing;
		}
	}
	
	display(){
		textFont("staatliches");
		textAlign(CENTER,CENTER);
		push();
		translate(this.position.x-(this.bsWidth/2),this.position.y);
		this.update();
		
		for(var i=0;i<this.nbSet;i++){
			fill(this.h,this.s,this.b-((this.b/this.nbSet)*i));
			rect((i*this.bWidth)+(this.shiftx*i)/2,0,this.bWidth,-this.barheights[i]);	
			textSize(this.bWidth/3.5);
			text(this.labels[i],((i*this.bWidth)+(this.shiftx*i))+(this.bWidth/2)-(this.shiftx*i/2),-this.barheights[i]-20);
		}
		pop();
	}
}