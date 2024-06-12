let easing = 0.05;


function setup() {
	createCanvas(600,400);
	
	pie1 = new Pie(
		150, 
		createVector(width/2,200), 
		easing, 
		[20,20,20,10,10,20], 
		color("#D3BCE8") 
	);
}

function draw() {
	background("#BCE8F7");
	noStroke();
	pie1.display();
}

class Pie{
	constructor(radius,position,easing,vals,col){
		angleMode(DEGREES);
		colorMode(HSB);

		this.radius = radius;
		this.easing = easing;
		this.vals = vals;
		this.col = col;
		this.position = position;
		
		this.degrees = []; 
		this.labels = []; 
		let h,s,b;
		this.posLabels = []; 
		this.angles = vals; 
		this.nbSet = vals.length;
		
		//Set-up
		this.percnt2deg();
		this.parseColor();
		this.label();
	}
	
	
	percnt2deg(){
		for(var i=0;i<this.nbSet;i++){
			if(i>=1){
				this.degrees[i] = this.degrees[i-1]+(360*this.vals[i])/100;	
				this.posLabels[i]=(((360*this.vals[i])/100)/2)+(this.degrees[i-1]);
			} else {
				this.posLabels[i]=((360*this.vals[i])/100)/2;
				this.degrees[i] =  (360*this.vals[i])/100;	
			}
		}
	}
	
	parseColor(){
		this.h = hue(this.col);
		this.s = saturation(this.col);
		this.b = brightness(this.col);
	}
	
	
	
	label(){
		for(var i=0;i<this.nbSet;i++){
			this.labels[i]=this.vals[i];
		}
	}
	
	update(){
		// EASING 
		for(var i=0;i<this.nbSet;i++){
			this.angles[i] += (this.degrees[i]-this.angles[i])*easing;
		}
	}
	
	
	display(){
		textFont("staatliches");
		textAlign(CENTER,CENTER);
		ellipseMode(CENTER);
		push();
		translate(this.position.x,this.position.y);

		this.update();
		
		for(var i=this.nbSet;i>=0;i--){	
			var x = cos(this.posLabels[i])*this.radius/1.5;	
			var y = sin(this.posLabels[i])*this.radius/1.5;
			
			fill(this.h,this.s,this.b-((this.b/this.nbSet)*i));
			arc(0,0,this.radius,this.radius,0,this.angles[i]);
			textSize(this.radius/5);
			text(this.labels[i],x,y);			
		}
		pop();
	}
}