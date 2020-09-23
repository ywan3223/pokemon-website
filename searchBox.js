//make a list of pokemon so my js function can search through by number or name       
var pokemonNameList = [
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
 
  
    
    function searchNameFunction(){
        
        //create an space for 5 search results
        var array = [];
        var counter=0;
        // Get the value of the input field with id="pokename"
       var input = document.getElementById("searchName").value;
    
           //find whether there is any letter include in the array
            for(i=0; i<=19; i++){
                if(pokemonNameList[i].toString().toLowerCase().includes(input.toString().toLowerCase()) && counter<5){ //use toLowerCase to make this search case insensitive 
                array.push(pokemonNameList[i]+"\n");
                counter ++; //counter to limit only 5 search results
                }
            }
    //print the 5 search results by alert()
        alert(array);
    }
