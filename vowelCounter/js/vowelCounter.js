var vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"];


function countVowel(){
    var inputText = document.getElementById("inputText").value;
    var result = document.getElementById("result");


    if(inputText==""){
        window.alert("Please enter a piece of text!");
    }
    else{
        var count = 0;
        var stringHTML ="<span id='resultString'>";
        

        inputText.split("").forEach(element => {

            var isVowel = Boolean(false);

            for(var i=0; i<vowels.length; i++){
                if(element == vowels[i]){
                    isVowel = true;
                }
            }

            if(isVowel){
                stringHTML += "<b>" + element + "</b>";
                count++;
            }
            else{
                stringHTML += element;
            }

        });

        stringHTML += "</span>";
        result.innerHTML = "There are <b>"+count+"</b> vowels!</br></br>" +  stringHTML;
    }

}