// login 

const admin = [
    { eml: "admin", pass: "12345", type: "adm"},
    { eml: "admin1", pass: "67890", type: "adm"}
];

const seconderAdmin = [
    { eml: "admin2", pass: "00000", type: "usr"},
    { eml: "admin3", pass: "11111", type: "usr"}
];

const thirdAdmin = [
    { eml: "admin4", pass: "22222", type: "adm1"},
    { eml: "admin5", pass: "33333", type: "adm1"}
]

document.getElementById('loginForm').addEventListener("submit",function(event){
    event.preventDefault();
    const eml = document.getElementById('eml').value;
    const pass = document.getElementById('pass').value;
    const message = document.getElementById("message");

    const user = admin.find(user => user.eml === eml && user.pass === pass) || 
                 seconderAdmin.find(user => user.eml === eml && user.pass === pass) ||
                 thirdAdmin.find(user => user.eml === eml && user.pass === pass);

                 if(user){
                    message.style.color = "green";
                    message.textContent = `welcome, ${eml}! login successful. `;

                    let redirectPage = "";
                    switch (user.type){
                        case "adm" : redirectPage = "manger.html";
                        break;
                        case "usr" : redirectPage = "volunteer.html";
                        break;
                        case "adm1" : redirectPage = "manger_a.html";
                        break;
                    }

                    setTimeout(() => {
                        window.location.href = redirectPage;
                    }, 2000);
                 }else{
                    message.style.color = "red";
                    message.textContent = "invalid username or password!";
                 }

});