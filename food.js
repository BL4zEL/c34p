/*class Food {
    constructor(){
   foodStock
   lastFed
   this.image=image("images/milk.png")
    }
    
    display(){
        var x=80,y=100;
        imageMode(CENTER) ;
        image (this.image, 720, 220, 70, 70) ;
        if (this.foodStock!=0) {
        for(var i=0 ;i<this.foodStock;i++){
          if(i%10===0){
        x=80;
        y-y+50;
          }
        image(this. image, x, y, 50, 50) ;
        x=x+30;
          }
        }
      }
    
}   
 getCount();{
  var Countref = database.ref("Food")
    Countref.on("value",function (data){
      food= data.val();
  })

}
updateCount(count);{
database.ref("/").update({
  Count:count
})


}
update();{
 var index = "food"+this.index;
 database.ref(playerindex).set({
     name:this.name ,
     distance:this.distance
 })
}*/