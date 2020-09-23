
//write a list for all pokemon name  
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

function nameFunction() {//check if the input value is avaliable
    var inputname = document.getElementById('searchName').value;
       //only accept A-Z or a-z 
        if (!/^[a-zA-Z]+$/.test(inputname)) {
          alert('Invalid entry, please try again');
          return;
        //no more than 20 characters
        } else if (inputname.length > 20) {
          alert('Input letter should less than 20 characters');
          return;
        }
        else{
            searchNameFunction();
        }
    }

function searchNameFunction(){//set a function using the popup box to show the result
    //set a array to save the name searched result
    var arr = [];
    //set a max variable to control the number of result
    var max=0;
    //chang input variables from the search bar to value
    var input = document.getElementById("searchName").value;
            
    //set up for loop to find the matched pokemon name with the input letter
    for(i=0; i<=19; i++){
        if(pokemonNameList[i].toString().toLowerCase().includes(input.toString().toLowerCase()) && max<5){ 
            arr.push(pokemonNameList[i]+"\n");//push the result from name list to the result list
            max ++; 
            }
    }
    //wipe the comma betwenn every element of the result array
    var b = arr.join('');
    //use the alert popup box to show the result
    alert(b);
}
