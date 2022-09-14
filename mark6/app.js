let buttonEl= document.querySelector("#translate")  
let input=document.querySelector("#text")
let output= document.querySelector("#box")
console.log(output)


let api="	https://api.funtranslations.com/translate/minion.json"

function errorHandler(error){
    console.log("the error here is: "+ error)
}


function translate(){
    console.log("button clicked")
    // fetching the translation from the API
    fetch(api+"?text="+input.value)
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            output.innerHTML=data.contents.translated;
        })
        
        .catch(errorHandler)

}

buttonEl.addEventListener("click", translate)


