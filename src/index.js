let addToy = false;

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault()
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  fetch('http://localhost:3000/toys')
   .then((resp)=>resp.json())
   .then((data)=>{
    data.forEach((element)=>{
       const toyColllection = document.getElementById('toy-collection')
       const newDiv = document.createElement('div')
       const card = document.getElementsByClassName('card')
       const h2 = document.createElement('h2')
       const img = document.createElement('img')
       const p = document.createElement('p')
       const btn = document.createElement('button')
   

     h2.textContent = element.name
     newDiv.append(h2)
     img.src = element.image
     newDiv.append(img)
     img.className = 'toy-avatar'
     p.textContent = element.likes+' likes'
     newDiv.append(p)
     btn.className = 'like-btn'
     btn.id = element.id
     btn.innerText = 'Like ❤️'
     newDiv.append(btn) 
     newDiv.className = 'card'
     toyColllection.append(newDiv)
    })
   })
   const submit = document.querySelector('.add-toy-form')
   submit.addEventListener('submit', addNewToy)

});

function addNewToy(inputData){
  inputData.preventDefault()
  console.log(inputData.target.image.value)
  console.log(inputData.target.name.value)
  fetch('http://localhost:3000/toys',{
    method: 'POST',
    headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      "name": inputData.target.name.value,
      "image": inputData.target.image.value,
      "likes": 0
    })
    })
    .then(resp=>resp.json())
    .then(element=>{
      const toyColllection = document.getElementById('toy-collection')
      const newDiv = document.createElement('div')
      const card = document.getElementsByClassName('card')
      const h2 = document.createElement('h2')
      const img = document.createElement('img')
      const p = document.createElement('p')
      const btn = document.createElement('button')
  

    h2.textContent = element.name
    newDiv.append(h2)
    img.src = element.image
    newDiv.append(img)
    img.className = 'toy-avatar'
    p.textContent = element.likes+' likes'
    newDiv.append(p)
    btn.className = 'like-btn'
    btn.id = element.id
    btn.innerText = 'Like ❤️'
    newDiv.append(btn) 
    newDiv.className = 'card'
    toyColllection.append(newDiv)
    })
}
