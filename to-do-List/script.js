function clickButton(e) {
    e.preventDefault()
    addtodo()
}
  const textarea =document.querySelector('.textarea');
  const input =document.querySelector('.buttoninput');
  const todolist =document.querySelector('.todolist');

     // function who write what ever you write in text area it will simply write in div
     function addtodo(){
        const itemall= document.createElement('div')
        //simple it add class name to spesific div
        itemall.classList.add('itemall')
        let todo =textarea.value;
        if(todo===""){
            alert("value is empty")
        }
        else{
        const item = document.createElement("p");
        item.classList.add('item')
        item.textContent=todo;
        itemall.appendChild(item);

        const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)


    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)
    

    todolist.appendChild(itemall)
    textarea.value = ''
     }
    }
     function check_and_delete(e)
     {
          let item =e.target
          if(item.classList[0]==="check-button")
          {
             const todolist = item.parentElement
            todolist.classList.toggle('checklist')
          }
          else if(item.classList[0]==="trash-button")
          {
            const todolist = item.parentElement
            //console.log(todolist);
            todolist.remove()
          }
     }
     input.addEventListener('click',clickButton);
     todolist.addEventListener('click',check_and_delete)