const form=document.getElementById("registerForm")
const name=document.getElementById("name")
const surName=document.getElementById("surname")
const age=document.getElementById("age")
const nationality=document.getElementById("nationality")
const position=document.getElementById("position")
const experience=document.getElementById("experience")
const list=document.getElementById("list")
const tbody=document.getElementById("formTable")
const users=[]

form.addEventListener('submit', (e)=> {
    e.preventDefault()
   let newUser={
    name:name.value,
    surname:surName.value,
    age:age.value,
    nationality:nationality.value,
    position:position.value,
    experience:experience.value,
   
   }
   
   users.push(newUser)
   renderUi(users)
   console.log(users);
   
})

const renderUi = (items)=> {
    let innerHTML= ""
    for (let i = 0; i < items.length; i++) {
        innerHTML+=
        `<table class="table table-dark">  
    <tbody>
      <tr>
        <th scope="row">${[i]}</th>
        <td>${items[i].name}</td>
        <td>${items[i].surname}</td>
        <td>${items[i].age}</td>
        <td>${items[i].nationality}</td>
        <td>${items[i].position}</td>
        <td>${items[i].experience}</td>
        <td><button type='button' onclick='editHandler' class='btn btn-primary'>Edit</button></td>
        <td><button type='button' onclick='deleteHandler(${users[i].id}' class='btn btn-danger'>Delete</button></td>
      </tr>
   
    </tbody>
  </table>`
    }
    
    list.innerHTML=innerHTML
}
    
function deleteHandler  (id)  {
    let target=users.find ((x) => x.id==id) 
    let indexOfTarget =users.indexOf(target)
    users.splice(indexOfTarget,1)
    renderUi(users)
}


