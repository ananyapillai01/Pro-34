//Create variables here
var dog, happyDog;
var database, foodS, foodStock;


function preload()
{
  //load images here
  dog1 = loadImage("images/dogImg.png");
  dog2 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  
  dog = creatSprite(250, 250, 20, 20);
  dog(dog1);

  dog = createSprite(250, 250, 20, 20);
  dog(dog2);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  foodStock = foodStock - 1;
  writeStock(foodS);
  dog.addImage(dog2);
}
  drawSprites();
  //add styles here
  textSize(25);
  fill("red");
  text("NOTE: Press UP_ARROW Key To Feed Drago Milk!");
  readStock();
  writeStock();
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x <= 0){
    x = 0;
  }
  else{
    x = x - 1;
  }
  database.ref('/').update({
    Food:x
  })
}