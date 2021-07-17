//(my_teachable_machine_link)https://teachablemachine.withgoogle.com/models/x13k1yEXH/modle.json

function setup(){
canvas=createCanvas(300,300);
canvas.center();
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/x13k1yEXH/modle.json', modelloaded);
    }
    
    function modelloaded(){
        console.log('modelloaded');
    }
    
    function draw(){
    image(video,0,0,300,300);
    }
    