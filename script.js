
function dark (){
const dark = document.getElementById("card")
  dark.style.backgroundColor = "#27292D" 
  const moons = document.getElementById("moon")
  moons.style.display ="none"
 const light = document.getElementById("light")
 light.style.display = "inline-block"
 light.style.marginLeft = "0.5rem"
}

const light = document.getElementById("light")

light.addEventListener("click", function lightMode(){
  const dark = document.getElementById("card")
  dark.style.backgroundColor = "white" 

  const moons = document.getElementById("moon")
  moons.style.display ="inline-block"
  const light = document.getElementById("light")
 light.style.display = "none"


})

  
const diffVar = document.getElementById("variations")

diffVar.addEventListener("click", function firstVar(){
  // const dark = document.getElementById("card")
  // dark.style.height = "270px"
  const firstList = document.querySelector("#hideList")
  firstList.style.display = "none"

  const secList = document.querySelector(".firstvar")
  secList.style.display = "block"


  // hideList.style.display = "none"

  const items = document.getElementById("items")
  
  
})
 
