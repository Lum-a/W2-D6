const addListItem = () => {
    let inputval = document.querySelector("input[type=text]");
    let ulElement = document.querySelector("ul");
    let liElement = document.createElement("li");

    liElement.innerHTML = inputval.value;
    ulElement.appendChild(liElement);
    inputval.value = "";
    liElement.onclick = completedTask
  };
    const completedTask = (e) => {
      let node = e.currentTarget;
      if (node.className.includes("completed")) {
        node.classList.remove("completed");
      } else {
        node.classList.add("completed");
      }
    };
const showNonCompleted =()=>{
    let checkbox = document.querySelector("input[type=checkbox]")
    let liElements = document.querySelectorAll("ul li");
    for(let i =0;i<liElements.length;i++){
        if(liElements[i].className.includes("completed")&& checkbox.checked === true){
            liElements[i].style.display="none"
        }else if (checkbox.checked === false){
            liElements[i].style.display="block"
        }
    }
}
const deleteItems=()=>{
    let ulParent=document.querySelector("ul")
    let ulElements=ulParent.querySelectorAll("li")
    for(let i=0;i<ulElements.length;i++){
        ulParent.removeChild(ulElements[i])
    }
}