var vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"];


function countVowel(){
    var inputText = document.getElementById("inputText").value;

    if(inputText==""){
        window.alert("Please enter a piece of text!");
    }
    else{
        var count = 0;
        inputText.split("").forEach(element => {for(var i=0; i<vowels.length; i++){if(element == vowels[i]) count+=1;}});
        window.alert("There are "+count+" vowel(s)!");
    }

}