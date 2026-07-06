import React from 'react'
import hero from "./assets/hero.png"
// youlang

const App = () => {
  // function clickFunction() {
  //   alert('Hello, welcome to class!')
  // }


  // function handleAge() {
  //   let ageInput = document.getElementById('ageInput').value
  //   if (ageInput >=11 || ageInput < 18) {
  //     alert('You Cannot drive this car.')
  //   } else if (ageInput <= 10 || ageInput >= 85) {
  //     alert("Not allowed to drive")
  //   }
  //   else {
  //     alert('You are an adult, you are good to go, take the keys.')
  //   }
  // }
  function handleAge() {
    let ageInput = document.getElementById('ageInput').value
    let response = document.getElementById("response")
    if (ageInput < 0 || ageInput >= 85) {
      // alert('Age is invalid for drivers')
      response.innerHTML = "Age is invalid for drivers"
    } else if (ageInput >= 1 && ageInput < 18) {
      // alert("You are under age you'll will get to drive soon")
      response.innerHTML = "You are under age you'll will get to drive soon"
    }
    else {
      // alert('You are an adult, you are good to go, take the keys.')
      response.innerHTML = "You are an adult, you are good to go, take the keys."
    }
  }

  return (
    <>
      <button onClick={() => alert('Hello, welcome to class!')}>Click to greet</button>
      <input type="text" placeholder="Your Name" id="nameInput" />
      <button onClick={() => console.log(document.getElementById('nameInput').value)}>Submit</button>

      <input type="number" placeholder="Your Age" id="ageInput" />
      <button onClick={handleAge}>Submit</button>
      <div id="response"></div>
      <img src={hero} alt="" />
    </>
  )
}

export default App