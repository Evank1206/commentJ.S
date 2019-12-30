function start(){
    const userName = document.getElementById("userName").value;
    const textArea = document.getElementById("textArea").value;
    // console.log(userName);
    // console.log(textArea);
    const sameString = document.createTextNode("User: " + userName + "\n" + "Comment: " + textArea);
    
    // console.log(sameString);
    
    const comment = document.getElementById("commentOne");
    const pTag = document.createElement("p");
    // pTag.style.color = "black";
    comment.appendChild(pTag);

    pTag.appendChild(sameString);

}
