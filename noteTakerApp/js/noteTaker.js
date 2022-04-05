var notes = new Array();

function addNote(){

    var inputNote = document.getElementById("noteBox");

    if(inputNote.value==""){
        window.alert("Please enter the note.");
    }
    else{
        notes.push(inputNote.value);
        displayNotes();
        inputNote.value="";
    }
}

function displayNotes(){

    var noteHTML = "";

    if(notes.length!=0){ 
        
        for(var i=0; i<notes.length; i++){   
            noteHTML+="<div class='note'>";
            noteHTML+="<h2>Note "+ parseInt(i+1)+"</h2>";
            noteHTML+="<p>"+ (notes[i].length>100? notes[i].substring(0,100)+"...": notes[i]) +"</p>";
            noteHTML+="<button onclick='displayDetail("+ i +")'>Details</button>";
            noteHTML+= "</div>"
        }
        
        document.getElementById("noteSection").innerHTML = noteHTML;
    }
    else{
        document.getElementById("noteSection").innerHTML="";
    }

}

function displayDetail(index){
    document.getElementById("popupText").innerHTML = notes[index];
    document.getElementById("popupDetail").style.display="flex";
}

function closeDetail(){
    document.getElementById("popupDetail").style.display="none";
}