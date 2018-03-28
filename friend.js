class Friend {
    constructor(s, m, d, y){
        this.name = s;
        this.m = Number(m);
        this.d = Number(d);
        this.y = Number(y);   
    }

    display(){

        if (mouseIsPressed) {
            stroke('blue');
            strokeWeight(10);
            line(this.m*100, this.d+200, this.y/4, 500);
        } else {
            stroke('pink');
            strokeWeight(20);
            line(this.m*100, this.d+200, this.y/4, 500);
            }
        }

    }

