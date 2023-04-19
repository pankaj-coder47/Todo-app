let submit = document.getElementById("submit")

submit.addEventListener("click",(e)=>{
    e.preventDefault()//isase page load nahi hoga 
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem("todo", JSON.stringify([titlec,descc]))
    let todo = document.getElementById("todo")
    todo.innerHTML = `
    <h1>${titlec}</h2>
    <p>${descc}</p>    
    `
    title.value =""
    desc.value = ""
    console.log(e)
})



deletebn.addEventListener("click",(e)=>{
    e.preventDefault()
   localStorage.removeItem("todo")
   let todo = document.getElementById("todo")
   todo.innerHTML =""
})
