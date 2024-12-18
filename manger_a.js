let full_name = document.getElementById('full_name');
let phone_number = document.getElementById('phone_number');
let locat = document.getElementById('locat');
let email = document.getElementById('email');
let membership_number = document.getElementById('membership_number');
let login_btn = document.getElementById('login_btn');
let mood = 'add';
let x;

login_btn.style.display = 'none'

//add user

let users;
if(localStorage.data !=null){
    users = JSON.parse(localStorage.data)
}else{
    users = [];
}

login_btn.onclick = function(){

    login_btn.style.display = 'none'

     const currentUser = JSON.parse(localStorage.getItem("currentUser"));

     if (currentUser && currentUser.type === "adm1"){
        alert("you dont have permission to add data !");
        return;
     }

    let newUsers = {
        full_name:full_name.value,
        phone_number:phone_number.value,
        locat:locat.value,
        email:email.value,
        membership_number:membership_number.value,
    }

    if(mood === 'add'){
        users.push(newUsers)
    }else{
        users[x] = newUsers;
        mood = 'add';
    }

    // save users data

    localStorage.setItem('data', JSON.stringify(users))

    clearData()
    viewUser()
}

// clear data

function clearData(){
    full_name.value = '';
    phone_number.value = '';
    locat.value = '';
    email.value = '';
    membership_number.value = '';
}

// view user

function viewUser(){

    let table = '';
    for(let i = 0; i < users.length;i++){
        table += `
        <tr>
             <td>${i+1}</td>
             <td>${users[i].full_name}</td>
             <td>${users[i].phone_number}</td>
             <td>${users[i].locat}</td>
             <td>${users[i].email}</td>
             <td>${users[i].membership_number}</td>
             <td>
             <button type="button" onclick="editUser(${i})" id="edit">Edit</button>
             <button type="button" onclick="deletUser(${i})" id="delet">Delet</button>
             </td>
         </tr>
        `
    }

    document.getElementById('tbody').innerHTML = table;


}

viewUser()

// delet users 

function deletUser(i){
    users.splice(i,1);
    localStorage.data = JSON.stringify(users);
    viewUser()
}

// edit users

function editUser(i) {
    full_name.value = users[i].full_name;
    phone_number.value = users[i].phone_number;
    locat.value = users[i].locat;
    email.value = users[i].email;
    membership_number.value = users[i].membership_number;
    login_btn.style.display = 'flex'
    mood = 'edit';
    x = i;
    scroll({
        top:0
    })
    
}