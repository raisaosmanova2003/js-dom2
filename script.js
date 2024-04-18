const form = document.getElementById("registerForm");
const name = document.getElementById("name");
const surName = document.getElementById("surname");
const age = document.getElementById("age");
const nationality = document.getElementById("nationality");
const position = document.getElementById("position");
const experience = document.getElementById("experience");
const list = document.getElementById("list");
const tbody = document.getElementById("formTable");
const users = [];
let counter = 0;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newUser = {
    id: counter,
    name: name.value,
    surname: surName.value,
    age: age.value,
    nationality: nationality.value,
    position: position.value,
    experience: experience.value,
    };
    counter++;
    users.push(newUser);
    renderUi(users);
    console.log(users);
});

const renderUi = (items) => {
    let innerHTML = "";
    for (let i = 0; i < items.length; i++) {
    innerHTML += `
        <tr>
        <th scope="row">${items[i].id}</th>
        <td>${items[i].name}</td>
        <td>${items[i].surname}</td>
        <td>${items[i].age}</td>
        <td>${items[i].nationality}</td>
        <td>${items[i].position}</td>
        <td>${items[i].experience}</td>
        <td><button type='button' onclick='editHandler(${items[i].id})' class='btn btn-primary'>Edit</button></td>
        <td><button type='button' onclick='deleteHandler(${items[i].id})' class='btn btn-danger'>Delete</button></td>
        </tr>`;
}

tbody.innerHTML = innerHTML;
};

function deleteHandler(id) {
    let target = users.find((x) => x.id == id);
    let indexOfTarget = users.indexOf(target);
    users.splice(indexOfTarget, 1);
    renderUi(users,target,indexOfTarget);
}
function editHandler(id) {
    let idloc=users.find(x => x.id == id)
    let newname=prompt("New name")
    let newsurname=prompt("New surname")
    let newage=prompt("New age")
    let newposition=prompt("new position")
    let newexperience=prompt("New experience")
    idloc.name=newname
    idloc.surname=newsurname
    idloc.age=newage
    idloc.position=newposition
    idloc.experience=newexperience
    renderUi(users)
}