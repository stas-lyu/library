$(document).ready(function () {
    $('.tabs').tabs();
    let modalUserEdit = document.querySelector('#modal3');
});
let users = [{
    id: 1,
    fullName: "Oleg Olegov",
    phone: 0933033033
}, {
    id: 2,
    fullName: "Ivan Ivanov",
    phone: 0933033033
}, {
    id: 3,
    fullName: "Anton Antonov",
    phone: 0933033033
}, {
    id: 4,
    fullName: "Igor Igorev",
    phone: 0933033033
},];

let container = document.querySelector(".users_container");

let renderUsers = (array) => {
    users.forEach((user, index) => {
        if (index === 0) {
            container.innerHTML = `<ul>
            <li>ID</li>
            <li>Name</li>
            <li>Phone</li>
            <li>Edit</li>
            </ul>
            <ul>
            <li>${user.id}</li>
            <li>${user.fullName}</li>
            <li>${user.phone}</li>
            <a class="waves-effect waves-light btn modal-trigger user-edit" data-user="${user.id}" href="#modal3">
        <li><i class="fas fa-user-edit" data-user="${user.id}"></i></li></a></li>
            </li></ul>
            `

        } else
            container.innerHTML += `
       
        <ul>
        <li>${user.id}</li>
        <li>${user.fullName}</li>
        <li>${user.phone}</li>
        <a class="waves-effect waves-light btn modal-trigger user-edit" data-user="${user.id}" href="#modal3">
        <li><i class="fas fa-user-edit"></i></li></a></li>
        </ul>
        `
    })
}

let editUser = () => {
    let editBtns = document.querySelectorAll('.user-edit');
    editBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            console.log(e.target);
        })
    })
}

renderUsers(users);

editUser();