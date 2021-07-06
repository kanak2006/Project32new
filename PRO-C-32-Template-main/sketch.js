const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getbackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImage){
   background (backgroundImage)
}

    Engine.update(engine);

    // write code to display time in correct format here
if(hour>=12){
    textSize(25);
    fill ("orange")
    text("Time:"+hour%12+"pm",50,100) 

} else if(hour===0){
    text("Time:12am",50,100)
} else {
    text("Time:"+hour%12+"am",50,100)
}

}

async function getbackgroundImage(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();
var datetime = responseJSON.datetime;
hour = datetime.slice(11,13);
    if(hour >= 04 && hour <= 06){
        bg = "sunrise1.png" 
    }
    else if(hour>=06 && hour<=08){
        bg = "sunrise2.png"
    }
    else if(hour>=23 && hour==0){
        bg = "sunrise10.png"
    }
    else if(hour==0 && hour<=03){
        bg = "sunrise11.png"
    }else{
        bg = "sunset12.png";
    }
        backgroundImage=loadImage(bg)

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
