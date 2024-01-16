let leftContainer  = document.querySelector(".leftContainer");
console.log(leftContainer);
let win  =()=>{
    let leftInner = document.createElement("div");
    leftInner.classList.add("leftInnerContainer");
    leftInner.innerHTML = `  <div class="textarea-button">
    <textarea rows="12" cols="60" placeholder ="//write your Secreat notes here 😉!" ></textarea>
    <div class="btn" id ="btnId">
        <button>Add note</button>
    </div>
</div>
<div class="img-input-Box">
    <div class="imgContainer">
        <figure>
            <a href="">
                <img src="./images/colorPicker.png">
            </a>
        </figure>
    </div>
    <input type="color" value="#CD5C5C">
</div>`
    //console.log(leftInner);
    leftContainer.appendChild(leftInner);
 
}
win();

/*add note */

//remove 
// function removeStickyNotes(){
//     let notesDelBtn = document.querySelectorAll(".notesDelBtn");
//     notesDelBtn.forEach((singlebtn)=>{
//         singlebtn.addEventListener("click", (e)=>{
//             alert("Are you Sure!");
//             e.target.parentElement.remove();
//         });
//     });
// }
//event deligation on button remove (removeStickyNotes)
let rightContainer = document.querySelector(".rightContainer");
rightContainer.addEventListener("click" , (e)=>{
    if(e.target.innerText === "Delete"){
        alert("are you sure!");
        e.target.parentElement.remove();
    }
});
//append 
let addCrds = document.querySelector(".addCrds");
let rightCaption = document.querySelector(".para");
// console.log(rightCaption.children);

function makeStickyNote(text , color){
    let note = document.createElement("div");
    note.classList.add("stickeyNote");
    note.innerHTML = `
    <p>${text}</p>
    <button class="notesDelBtn">Delete</button>
    `
    note.style.backgroundColor = color;
    rightCaption.innerHTML="<div>"
    addCrds.classList.add("addCrdsStyle");
    addCrds.appendChild(note);
    // addCrds.children[0].style.display = "none";
}




let text = document.querySelector(".textarea-button");
// let textAreaValue = text.children[0].value;
console.log();
let color = document.querySelector(".img-input-Box");
// let colorValue = color.children[1].value;
let addNote = document.querySelector("button");
console.log(addNote);
addNote.addEventListener("click", ()=>{
    let textAreaValue = text.children[0].value;
    let colorValue = color.children[1].value;
     if(text.children[0].value === ""){
        alert("Enter your Secreats here!");
        return;
     }
     makeStickyNote(text.children[0].value,colorValue);
    //  removeStickyNotes();
});
