const generateTeam = (team) => {
  const managerCard = (manager) => {
    return `
    <div class="card p-1" style="width: 18rem;">
        <img src="./images/avatar-1577909_960_720.png" class="card-img-top" alt="Photo of Employee">
        <div class="card-body">
            <h5 class="card-title text-center">Manager <i class="fas fa-user-tie"></i></h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${manager.getName()}</li>
            <li class="list-group-item">Employee Id: ${manager.getId()}</li>
            <li class="list-group-item">Address: ${manager.getAddress()}</li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">${manager.getEmail()}</a>
        </div>
    </div>`
  };

  const internCard = (intern) => {
    return `
    <div class="card p-1" style="width: 18rem;">
        <img src="./images/avatar-1577909_960_720.png" class="card-img-top" alt="Photo of Employee">
        <div class="card-body">
            <h5 class="card-title text-center">Intern <i class="fas fa-graduation-cap"></i></h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${intern.getName()}</li>
            <li class="list-group-item">Employee Id: ${intern.getId()}</li>
            <li class="list-group-item">school: ${intern.getSchool()}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">${intern.getEmail()}</a>
        </div>
    </div>`
  };

  const engineerCard = (engineer) => {
    return `
    <div class="card p-1" style="width: 18rem;">
        <img src="./images/avatar-1577909_960_720.png" class="card-img-top" id="avatar" alt="Photo of Employee">
        <div class="card-body">
            <h5 class="card-title text-center">Engineer <i class="fas fa-cogs"></i></h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${engineer.getName()}</li>
            <li class="list-group-item">Employee Id: ${engineer.getId()}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">${engineer.getEmail()} </a>
            <a href="#" class="card-link">${engineer.getGithub()}</a>
        </div>
    </div>`
  }; // added TL to text area

  const html = []

  html.push(team.filter(employee => employee.getRole() === `Manager`)
  .map(manager => managerCard(manager)))

  html.push(team.filter(employee => employee.getRole() === `Engineer`)
  .map(engineer => engineerCard(engineer)).join(""))

  html.push(team.filter(employee => employee.getRole() === `Intern`)
  .map(intern => internCard(intern)).join(""))

  return html.join("")
};

module.exports = (team) => {
  return `
    <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/575f7ae1ac.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css">

    <title>Hello, world!</title>
  </head>
  <body>
      <div class="container-fluid bg-primary text-white">
          <div class="row">
              <div>
                  <h1 class="text-center m-5">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container-fluid">
          <div class="row">
              <div class="d-flex justify-content-center mt-3">
                ${generateTeam(team)}
              </div>
          </div>
      </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>`
};
