let buttons = document.querySelectorAll("button");
let container = document.querySelector(".container")
let backdrop = document.querySelector(".backdrop")
buttons.forEach(element=>{
    if(element.classList[0]=="show-modal"){
        element.addEventListener("click",e=>{
            container.style.opacity = "1"
            backdrop.style.display = "block"
            container.style.transform = "translateY(2vh)"

        })
    }
    else if(element.classList[0] == "close"){
        element.addEventListener("click",showModal)
    }
    else if(element.classList[0] == "confirm"){
        element.addEventListener("click",()=>{
            showModal()
            alert("This Window Is So Important !!!")
        })
    }
})

backdrop.addEventListener("click",showModal)

function showModal(){
    container.style.opacity = "0"
    backdrop.style.display = "none"  
    container.style.transform = "translateY(-100vh)"
}