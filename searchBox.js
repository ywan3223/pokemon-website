var PokemonList = [//set a list for all information about pokemon
    {'name':'#001 Bulbasaur', 'img':'pokemon/1.png', 'description':'Description: There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.'},
    {'name':'#002 Ivysaur', 'img':'pokemon/2.png', 'description':'Description:When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.'},
    {'name':'#003 Venusaur', 'img':'pokemon/3.png', 'description':'Description: Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.'},
    {'name':'#004 Charmander', 'img':'pokemon/4.png', 'description':'Description:It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.'},
    {'name':'#005 Charmeleon', 'img':'pokemon/5.png', 'description':'Description:It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.'},
    {'name':'#006 Charizard', 'img':'pokemon/6.png', 'description':'Description:It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.'},
    {'name':'#007 Squirtle', 'img':'pokemon/7.png', 'description':'Description:When it retracts its long neck into its shell, it squirts out water with vigorous force.'},
    {'name':'#008 Wartortle', 'img':'pokemon/8.png', 'description':'Description:It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.'},
    {'name':'#009 Blastoise', 'img':'pokemon/9.png', 'description':'Description:It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.'},
    {'name':'#010 Caterpie', 'img':'pokemon/10.png', 'description':'Description:For protection, it releases a horrible stench from the antenna on its head to drive away enemies.'},
    {'name':'#011 Metapod', 'img':'pokemon/11.png', 'description':'Description:It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.'},
    {'name':'#012 Butterfree', 'img':'pokemon/12.png', 'description':'Description:In battle, it flaps its wings at great speed to release highly toxic dust into the air.'},
    {'name':'#013 Weedle', 'img':'pokemon/13.png', 'description':'Description:Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.'},
    {'name':'#014 Kakuna', 'img':'pokemon/14.png', 'description':'Description:Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.'},
    {'name':'#015 Beedrill', 'img':'pokemon/15.png', 'description':'Description:It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.'},
    {'name':'#016 Pidgey', 'img':'pokemon/16.png', 'description':'Description:Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.'},
    {'name':'#017 Pidgeotto', 'img':'pokemon/17.png', 'description':'Description:This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.'},
    {'name':'#018 Pidgeot', 'img':'pokemon/18.png', 'description':'Description:This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.'},
    {'name':'#019 Rattata', 'img':'pokemon/19.png', 'description':'Description:Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.'},
    {'name':'#020 Raticate', 'img':'pokemon/20.png', 'description':'Description:Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.'}
]

function nameFunction() {//check if the input value is avaliable and return correct information to user
    var inputname = document.getElementById('searchName').value;
    var d = document.getElementById("result");
       if(!/^[a-zA-Z]+$/.test(inputname)){//check if input value is between a to z
        while(d.firstChild){
            d.removeChild(d.firstChild);}//nothing will appear if the input value is not meet the requirement
        }
        else if (inputname.length > 20){//check no more than 20 character
            alert('Please enter a name less than 20 characters');//use alert box to notify user.
          return;
        }
        else{
        searchNameFunction();//search the value function with name
        }
    }

    function searchNameFunction(){
        var pokeName = document.getElementById("searchName").value;
        var d = document.getElementById("result");
        while(d.firstChild){d.removeChild(d.firstChild);}//delete pokemon to prepare for the next search
        for (i=0; i<20;i++){//use for loop to search the pokemon matched input value
        if(PokemonList[i].name.toLowerCase().includes(pokeName.toLowerCase())){
            document.getElementById("result").appendChild(DataList(PokemonList[i].img, PokemonList[i].name, PokemonList[i].description));
            }//find the matched pokemon and abstruct the infomation from the pokemonlist using datalist function
    }
    }



function numberFunction(){
    var inputnumber = document.getElementById('searchNumber').value;
    var d = document.getElementById("result");
    if (inputnumber > 20 || inputnumber < 1) {
        while(d.firstChild){d.removeChild(d.firstChild);}
      } 
    else {
           searchNumberFunction();
      }
}
function searchNumberFunction(){
    var pokemonNum = document.getElementById("searchNumber").value;
    var d = document.getElementById("result");
    while(d.firstChild){d.removeChild(d.firstChild);}
    for (i=0; i<20;i++){
        if((1+i).toString().includes(pokemonNum.toString())){
            document.getElementById("result").appendChild(DataList(PokemonList[i].img, PokemonList[i].name, PokemonList[i].description));
        }
    }
}



function DataList(img,name,description){ //use DOM function to add the name, image and description
   //create element and textnode
    let arr = document.createElement("div");
    let Images = document.createElement("img");
    let Name =  document.createElement("p"); 
    let DescriptionD = document.createElement("p"); 
    let pName = document.createTextNode(name); 
    let pDescriptionD = document.createTextNode(description); 
    //use appendchild to add text
    Images.setAttribute("src",img);
    Name.appendChild(pName);
    DescriptionD.appendChild(pDescriptionD);
    //use appendchild add text into the datalist
    arr.appendChild(Images);
    arr.appendChild(Name);
    arr.appendChild(DescriptionD);
    return arr; 
}


