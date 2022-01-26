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
    `
}

const engineerCard = engineer => {
    return`
    `
}