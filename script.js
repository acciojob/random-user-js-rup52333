//your code here
const url =' https://randomuser.me/api/ ';

let img = document.getElementById('avatar');
let fullname = document.getElementById('fullname');

let additionalinfo = document.getElementById("additionalinfo");
let age= document.querySelector('[data-attr="age"]');
let email = document.querySelector('[data-attr="email"]');
let phone = document.querySelector('[data-attr="phone"]');
let getUser = document.getElementById('getUser');
//    email.onclick = function(){
// 	   additionalinfo.innerText = "andrea.sørensen@example.com";
// }
//    age.onclick = function(){
// 	   additionalinfo.innerText = "22";
// }
//  phone.onclick = function(){
// 	   additionalinfo.innerText ="01-28-27-83-25";
// }
getUser.addEventListener("click", function() {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError)
});

function handleErrors (res){
  if(!res.ok){
    throw error(res.status);
  }
  console.log(res);
  return res;
}

function parseJSON (res){
  return res.json();
}

function updateProfile (profile){
  img.src = profile.results[0].picture.large;
  fullname.innerHTML = profile.results[0].name.first +" "+profile.results[0].name.last; 
   additionalinfo.innerText="";
	email.onclick = function(){
	   additionalinfo.innerText = profile.results[0].email;
}
   age.onclick = function(){
	   additionalinfo.innerText = profile.results[0].dob.age;
}
   phone.onclick = function(){
	   additionalinfo.innerText = profile.results[0].phone;
}

  return 1;
}

function printError (error){
  console.log(error);
	
}

