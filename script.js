const textBox = document.getElementById("input-box");
const listContainer =document.getElementById("listContainer");

function addTask(){
    if(textBox.value === ""){
        swal({
            title: "What the Hell! Brother",
            text: "You don't have entered anything, enter a Task",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Good! You got my Point", {
                icon: "success",
              });
            } else {
              swal("Please enter a Task...I hope you got my point");
            }
          });
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = textBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    textBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();