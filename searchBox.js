var pokemonN = [
    " #001 Bulbasaur",
    " #002 Ivysaur",
    " #003 Venusaur",
    " #004 Charmander",
    " #005 Charmeleon",
    " #006 Charizard",
    " #007 Squirtle",
    " #008 Wartortle",
    " #009 Blastoise",
    " #010 Caterpie",
    " #011 Metapod",
    " #012 Butterfree",
    " #013 Weedle",
    " #014 Kakuna",
    " #015 Beedrill",
    " #016 Pidgey",
    " #017 Pidgeotto",
    " #018 Pidgeot ",
    " #019 Rattata",
    " #020 Raticate"];

    var pokemonDes=[
        "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight..",
        "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
        "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
        "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
        "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
        "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
        "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
        "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
        "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
        "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
        "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
        "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
        "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
        "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
        "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey."
    ] 

    var Img = ["pokemon/1.png","pokemon/2.png","pokemon/3.png","pokemon/4.png","pokemon/5.png","pokemon/6.png","pokemon/7.png","pokemon/8.png","pokemon/9.png","pokemon/10.png",
 "pokemon/11.png","pokemon/12.png","pokemon/13.png","pokemon/14.png","pokemon/15.png","pokemon/16.png","pokemon/17.png","pokemon/18.png","pokemon/19.png","pokemon/20.png"];




function nameFunction() {//check if the input value is avaliable
    var inputname = document.getElementById('searchName').value;
    var d = document.getElementById("result");
       if(inputname==''){
        while(d.firstChild){
            d.removeChild(d.firstChild);}
        }
        else{
            searchNameFunction();
        }
    }

function searchNameFunction(){
    let arrN= []; //set a array to save the name searched result
    let arrD= [];//set a array to save the description
    let input = document.getElementById('searchName').value;
    input=input.toLowerCase(); 
    //set up for loop to find the matched pokemon name with the input letter
    for (i = 0; i < pokemonN.length; i++) {  
        if (pokemonN[i].toLowerCase().includes(input)){ 
           arrN.push(pokemonN[i] + "\n");
           arrD.push(pokemonDes[i] +"\n" +"\n");
           arrayImg.push(Img(i));
        }
    }
    //use array to add description into the result array
    for(i=0;i<arrN.length/2;i++){
        arrN.splice(2*i+1,0,arrD[i]);
    }
   
     for (var i = 0; i < arrN.length; i++) {
        //create list for pokemon name in search results
          var currentNameList = arrN[i];
          var list = document.createElement("p");
          var node = document.createTextNode(currentNameList);
          list.appendChild(node);
          var searchResultsList = document.getElementById('result');
          searchResultsList.appendChild(list);
}

//create list for pokemon image in search results

   var currentImgList = arrayImg[i];
   let imgList = document.createElement("p");
   let image = document.createElement("img");
   image.setAttribute("src",currentImgList);
   imgList.appendChild(image)
   var searchResultsList = document.getElementById('searchResultsList');
searchResultsList.appendChild(imgList);




}
function numberFunction(){
    var inputnumber = document.getElementById('searchNumber').value;
    var d=document.getElementById('result');
    if(inputnumber==''){
        while(d.firstChild){
            d.removeChild(d.firstChild);}
    }
    else {
           searchNumberFunction();
      }
}

function searchNumberFunction(){//set a function using the popup box to show the result of number searching
    let arrN= []; //set a array to save the name searched result
    let arrD= [];//set a array to save the description
    let input = document.getElementById('searchNumber').value; 
 
    //set up for loop to find the matched pokemon name with the input letter
    for (i = 0; i < pokemonN.length; i++) {  
        if (pokemonN[i].toString().toLowerCase().includes(input.toString())){ 
           arrN.push(pokemonN[i] + "\n");
           arrD.push(pokemonDes[i] +"\n" +"\n");
        }
    }
//use array to add description into the result array
for(i=0;i<arrN.length/2;i++){
    arrN.splice(2*i+1,0,arrD[i]);
}

    for (var i = 0; i < arrN.length; i++) {
        //create list for pokemon name in search results
             var currentNameList = arrN[i];
          var list = document.createElement("p");
          var node = document.createTextNode(currentNameList);
          list.appendChild(node);
          var searchResultsList = document.getElementById('result');
          searchResultsList.appendChild(list);
       
        }

}

function searchNumberf(){
    let list = document.createElement("div");
    let Name =  document.createElement("p"); 
    let pName = document.createTextNode(num + name); 
    Name.appendChild(pName);
    let Des =  document.createElement("p"); 
    let pDes = document.createTextNode(description); 
    Des.appendChild(pDes);
    list.appendChild(image);
    list.appendChild(Name);
    list.appendChild(Des);

    for (i=0; i<20;i++){
        if((i+1).toString().includes(value.toString())){
            document.getElementById("result").appendChild(list);
        }
    }
    var div = document.getElementById("result");
    while(div.firstChild){div.removeChild(div.firstChild);}
    var pokeNum = document.getElementById("pokenumber").value;
    searchNumber(pokeNum,myPokemon);
    if(pokeName==''){
        while(div.firstChild){div.removeChild(div.firstChild);}
    }


    }











function addTextNode(text) {
    var newtext = document.createTextNode(text),
        p1 = document.getElementById("name");
    p1.appendChild(newtext);
  }




