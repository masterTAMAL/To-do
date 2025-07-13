const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("List-container");

function addTask(){
    if(inputBox.value==='')
    {
        alert("you must to rite something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li); //display
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        }
        inputBox.value="";
        saveData();
       
}
       inputBox.addEventListener("keypress",function(e){
            if(e.key ==="Enter"){
                addTask();
                
            }
        });
listContainer.addEventListener("click",function(e)
{
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
     //console.log(e);
     saveData();
  }
 
  else if(e.target.tagName==="SPAN")
  {
     e.target.parentElement.remove();
     saveData();
  }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
