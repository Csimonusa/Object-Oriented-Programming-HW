const managerCard = manager => {
    return `
    <div class="card p-1" style="width: 18rem;">
        <img src="./images/avatar-1577909_960_720.png" class="card-img-top" alt="Photo of Employee">
        <div class="card-body">
            <h5 class="card-title text-center">Manager <i class="fas fa-user-tie"></i></h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${manager.name}</li>
            <li class="list-group-item">Employee Id: ${manager.employeeId}</li>
            <li class="list-group-item">Address: ${manager.address}</li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
        <div class="card-body">
            <a href="${manager.email}" class="card-link">Email</a>
        </div>
    </div>`
}

const internCard = intern => {
    return `
    <div class="card p-1" style="width: 18rem;">
        <img src="./images/avatar-1577909_960_720.png" class="card-img-top" alt="Photo of Employee">
        <div class="card-body">
            <h5 class="card-title text-center">Intern <i class="fas fa-graduation-cap"></i></h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${intern.name}</li>
            <li class="list-group-item">Employee Id: ${intern.employeeId}</li>
            <li class="list-group-item">school: ${intern.school}</li>
        </ul>
        <div class="card-body">
            <a href="${intern.email}" class="card-link">Email</a>
        </div>
    </div>`
}

const engineerCard = engineer => {
    return`
    <div class="card p-1" style="width: 18rem;">
        <img src="./images/avatar-1577909_960_720.png" class="card-img-top" id="avatar" alt="Photo of Employee">
        <div class="card-body">
            <h5 class="card-title text-center">Engineer <i class="fas fa-cogs"></i></h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${engineer.name}</li>
            <li class="list-group-item">Employee Id: ${engineer.employeeId}</li>
        </ul>
        <div class="card-body">
            <a href="${engineer.email}" class="card-link">Email</a>
            <a href="${engineer.github}" class="card-link">Github</a>
        </div>
    </div>`
}