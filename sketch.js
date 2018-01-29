
let modelPath = "cat.obj";
let cat;

let rVal = 0;
let inc = 0.01;
let angle = 0;
let numCats=20;
let closer = 100;
let closerInc=20;

function preload() {
     cat = loadModel(modelPath);
}

function setup() {
    
    createCanvas(1000,800,WEBGL);
    frameRate(4);
    // toilet = createGraphics(500,500);
    // toilet.background(0);
    // body.image(img,50,0,950,00);

    setInterval(cats,250);
setTimeout(function(){
    setInterval(black,250);
},125);

}

function draw() {
    background(0);
    ambientLight(10);

    
    rVal = sin(angle);

    //  rotateY(rVal/10);
    //  rotateZ(rVal*10);

    rotateY(-45);
 
    

    angle+=inc;
    
    closer += closerInc;
}


function cats() {
    background(0);
    directionalLight(random(100),10,random(100),0,0,-100);
    directionalLight(random(10),10,random(10),-100,0,0);
    for(let i=0;i<numCats;i++) {
        push();
        translate(closer*random(-3,3)-1000,200*random(-2,2)+200,-400*random(-1,1));
        model(cat);
        pop();
        // noLoop();
    }
}

function black() {
    background(0);
}