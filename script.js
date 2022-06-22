let input = document.getElementById('input')
let toDoList = document.getElementsByClassName('to-do-items') [0]


input.addEventListener('keydown',function(event){
    if(event.key === "Enter")
    addItem()
})

function addItem(){
    let parent = document.createElement('div')
    let child = document.createElement('div')
    let checkIcon = document.createElement('i')
    let trashIcon = document.createElement('i')

    parent.className = "items"
    parent.innerHTML = "<div>" + input.value + "</div>"

    checkIcon.className = 'bx bxs-check-square'
    checkIcon.style.color = "darkgray"
    checkIcon.addEventListener('click',()=>{
        checkIcon.style.color = "limegreen"
    })

    child.appendChild(checkIcon)


    trashIcon.className ='bx bxs-trash-alt'
    trashIcon.style.color = 'lightgray'
    trashIcon.addEventListener('click',()=>{
        parent.remove()
    })
    child.appendChild(trashIcon)

    parent.appendChild(child)
    toDoList.appendChild(parent)

    input.value = ''
}




let icons = document.querySelector('.icons');

icons.addEventListener('click',()=>{
    icons.classList.toggle('active')
})