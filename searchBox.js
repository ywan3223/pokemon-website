//make a list of pokemon so my js function can search through by number or name       
var Names = ["00N/A",
" 1. Bulbasaur",
" 2. Ivysaur",
" 3. Venusaur & Mega",
" 4. Charmander",
" 5. Charmeleon",
" 6. Charizard & MegaX & MegaY",
" 7. Squirtle",
" 8. Wartortle",
" 9. Blastoise & Mega",
" 10. Caterpie",
" 11. Metapod",
" 12. Butterfree",
" 13. Weedle",
" 14. Kakuna",
" 15. Beedrill & Mega",
" 16. Pidgey",
" 17. Pidgeotto",
" 18. Pidgeot & Mega",
" 19. Rattata",
" 20. Raticate"];

function searchName(){
    var a,x;
    //create an space for 5 search results
    var array = [];
    var counter=0;
    var newLine = "\r\n"
    // Get the value of the input field with id="pokename"
    x = document.getElementById("name").value;

       //find whether there is any letter include in the array
        for(i=1; i<=20; i++){
            if(Names[i].toString().toLowerCase().includes(x.toString().toLowerCase()) && counter<5){ //use toLowerCase to make this search case insensitive 
            array.push(Names[i]);
            array += newLine;
            counter ++; //counter to limit only 5 search results
            }
        }
//print the 5 search results by alert()
    alert(array);
}

function numberFunction(){
    var a,x;
    var array = [];
    var counter=0;
    // Get the value of the input field with id="pokenumber"
    x = document.getElementById("pokenumber").value;
    
    //mostly the same as the name search
    for(i=1; i<=20; i++){
        if(i.toString().includes(x.toString()) && counter<5){
        array.push(Names[i]);
        counter ++;
        }
    }
    alert(array);

}