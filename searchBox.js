function nameFunction() {//check if the input value is avaliable
    var inputname = document.getElementById('searchName').value;
       //only accept A-Z or a-z 
        if (!/^[a-zA-Z]+$/.test(inputname)) {
          alert('Invalid entry, please try again');
          return;
        //no more than 20 characters
        } else if (inputname.length > 20) {
          alert('Please enter a name less than 20 characters');
          return;
        }
        else{
            searchNameFunction();
        }
    }

function searchNameFunction(){//set a function using the popup box to show the result
   
    let arrN= []; //set a array to save the name searched result
    let arrD= [];//set a array to save the description
    let input = document.getElementById('searchName').value;
    input=input.toLowerCase(); 
    var max = 0; //set a max variable to control the number of result
    //set pokemon name and description database
    let pokemonDes = document.getElementsByClassName('description');
    let pokemonName = document.getElementsByClassName('name');
    //set up for loop to find the matched pokemon name with the input letter
    for (i = 0; i < pokemonName.length; i++) {  
        if (pokemonName[i].innerHTML.toLowerCase().includes(input)&& max<5){ 
           arrN.push(pokemonName[i].innerText + "\n");
           arrD.push(pokemonDes[i].innerText +"\n" +"\n");
           max++;
        }
    }
    //use array to add description into the result array
    for(i=0;i<2*arrD.length;i++){
        arrN.splice(2*i+1,0,arrD[i]);
    }
    
    //Take out the comma at the beginning of every line
    var b = arrN.join('');
     alert(b);
}

function numberFunction(){
    var inputnumber = document.getElementById('searchNumber').value;
    if (inputnumber > 20 || inputnumber < 1) {
        alert('Please enter a number between 1 to 20');
        return;
      } 
    else {
           searchNumberFunction();
      }
}
function searchNumberFunction(){//set a function using the popup box to show the result of number searching
    let arrN= []; //set a array to save the name searched result
    let arrD= [];//set a array to save the description
    let input = document.getElementById('searchNumber').value; 
    var max = 0; //set a max variable to control the number of result
    //set pokemon name and description database
    let pokemonDes = document.getElementsByClassName('pokemonh');
    let pokemonName = document.getElementsByClassName('name');
    //set up for loop to find the matched pokemon name with the input letter
    for (i = 0; i < pokemonName.length; i++) {  
        if (pokemonName[i].innerHTML.toString().toLowerCase().includes(input.toString())&&max<5){ 
           arrN.push(pokemonName[i].innerText + "\n");
           arrD.push(pokemonDes[i].innerText +"\n" +"\n");
           max++;
        }
    }
//use array to add description into the result array
for(i=0;i<2*arrD.length;i++){
    arrN.splice(2*i+1,0,arrD[i]);
}
    //Take out the comma at the beginning of every line
    var b = arrN.join('');
    return b;

}





