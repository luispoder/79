menuListArray = ["pizza de calabreza",
                  "pizza de frago",
                  "pizza portuguesa",
                  "pizza quatro queijos",
                  "pizza de abacaxi",
                  "pizza havaiana",
                  "pizza de queijo"];
                    

function getMenu(){
var htmldata;
 menuListArray.sort();
 for(var i=0;i <menuListArray.lenght;i++){
    htmldata=htmldata+ menuListArray[i] +  <br></br>
 }
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata="" 
for (var i=0;i<menuListArray.lenght;1++){
     htmldata=htmldata+imgtags+ menuListArray[i]+ '<br>';
}
  Document.getElementById("displayaddedmenu"). innerhtml=htmldata;
}

function addTop(){
var item=document. getElementById("addItem").value;
  menuListArray.push(item);
  addItem();
}