// function blablabla() {
//   console.log("hello");
// }

// blablabla();

// function welcomeMessage(name, age) {
//   return `Bonjour ${name}, vous avez ${age} ans.`;
// }

// let str = welcomeMessage("Alex", 32);

// console.log(str);

// welcomeMessage2 = (name, age) => {
//   return `Bonjour ${name}, vous avez ${age} ans.`;
// };

// let str2 = welcomeMessage2("Alex", 33);
// console.log(str2);

// function bla() {
//   let name = prompt("quel est ton nom ?");
//   let age = prompt("quel est ton age ?");
//   return `Bonjour ${name}, vous avez ${age} ans.`;
// }

// let x = Math.floor(Math.random(1) * 100 + 1);
// console.log(x);

// if (x < 50 && x >= 55) {
//   console.log("X est compris entre 50 et 55: ", x);
// } else {
//   console.log("x n'est pas compris entre 50 et 55: ", x);
// }

// do {
//   y = Math.floor(Math.random(1) * 100 + 1);
//   console.log("y = ", y);

// } while (y < 50 || y >= 55);

/// LOTO ///

// let y;
// let countY = 0;

// y = Math.floor(Math.random(1) * 100 + 1);

// if (y < 50 || y >= 55) {
//   console.log(y);
//   y = Math.floor(Math.random(1) * 100 + 1);
//   countY = countY + 1;
// } else {
//   console.log(`Vous avez trouvé le chiffre ${y} en ${countY} coups.`);
// }

// while (y < 50 || y >= 55) {
//   console.log(y);
//   y = Math.floor(Math.random(1) * 100 + 1);
//   countY = countY + 1;
// }

// console.log(`Vous avez trouvé le chiffre ${y} en ${countY} coups.`);

/// LE JUSTE PRIX ///

// let randomNumber = Math.floor(Math.random(1) * 100 + 1);
// let countNumber = 0;

// let startTime;
// let endTime;
// let totalTime;

// let userNumber = parseInt(prompt("Donne moi un chiffre entre 0 et 100"));

// startTime = new Date().getTime();

// while (userNumber !== randomNumber) {
//   if (userNumber < randomNumber) {
//     userNumber = parseInt(
//       prompt("Trop petit, Veuillez choisir un autre nombre")
//     );
//   } else if (userNumber > randomNumber) {
//     userNumber = parseInt(
//       prompt("Trop grand, Veuillez choisir un autre nombre")
//     );
//   }

//   countNumber = countNumber + 1;
// }

// endTime = new Date().getTime();

// totalTime = (endTime - startTime) / 1000;

// alert(
//   `Vous avez trouvé le chiffre ${randomNumber} en ${countNumber} coups et en ${totalTime} secondes ! `
// );

// /// CHANGE MY VALUE ///

// let par = document.querySelector("p");
// let btn = document.querySelector("button");

// let darkTheme = false;

// par.textContent = 0;

// setInterval(function () {
//   par.textContent = parseInt(par.textContent) + 1;
//   if (parseInt(par.textContent) % 5 === 0) {
//     par.style.color = "red";
//   } else {
//     par.style.color = "black";
//   }
// }, 1000);

// if (parseInt(par.textContent) % 5 === 0) {
//   par.style.color = "red";
// } else {
//   par.style.color = "black";
// }

// console.log(parseInt(par.textContent));

// function changeTheme() {
//   if (!darkTheme) {
//     darkTheme = true;
//     document.body.style.backgroundColor = "blue";
//     par.style.color = "white";
//   } else {
//     darkTheme = false;
//     document.body.style.backgroundColor = "white";
//     par.style.color = "black";
//   }
// }

// btn.addEventListener("click", () => {
//   if (!darkTheme) {
//     darkTheme = true;
//     document.body.style.backgroundColor = "blue";
//     par.style.color = "white";
//     btn.textContent = "Mode Jour";
//   } else {
//     darkTheme = false;
//     document.body.style.backgroundColor = "white";
//     par.style.color = "black";
//     btn.textContent = "Mode Nuit";
//   }
// });

/// Requetes ///

fetch("http://localhost:3000/users")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
    const users = data;
    console.log(users);
    for (let user of users) {
      const firstname = user.firstname;
      const lastname = user.lastname;
      const email = user.email;
      const phone = user.phone;
      const password = user.password;
      const id = user.id;

      const row = document.createElement("tr");
      const array = document.querySelector("#userTable");

      row.innerHTML = `
    <td>${firstname}</td>
    <td>${lastname}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>${password}</td>
    <td><button onclick="deleted(${id})">Supprimer</button></td>`;

      array.appendChild(row);
    }
  });

function addUsers() {
  let newUser = {
    firstname: document.querySelector("#firstname").value,
    lastname: document.querySelector("#lastname").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    password: document.querySelector("#password").value,
  };

  fetch("http://localhost:3000/users", {
    method: "post",
    body: JSON.stringify(newUser),
  })
    .then((result) => result.json())
    .then((result) => console.log("resultats: ", result));
}

function deleted(id) {
  fetch(`http://localhost:3000/users/${id}`, {
    method: "delete",
  })
    .then((result) => result.json())
    .then((result) => console.log("resultats: ", result));
}
