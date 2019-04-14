//local storage and session storage is identical only change in chrome closing.
//stored in browser stored in application in developer tool. they are dictionary. website ki js mein save nahi hngi. refresh krne pe nahi ure gi.
//agr chrome ki cache ura di tou ure ga nai tou save hoti rahe gi.
//js dega double quotes mein. is mein ya tou strings de ge ya tou numbers. even list bhi inverted commas mein aayen ge.and comma is zaroori.

///console.log(JSON.stringify("aalo"));

//JSON.parse bahir nikalne k liye kaam aata hai.
//pehle stringify kren ge and phr bahir nikale gein.
//json mein convert kring ta k local storage mei ja ske.

// let getparse = ["baby", "kakal", "ASSQW"];
// let getjson = JSON.stringify(getparse);
// console.log(getjson);
// let c = JSON.parse(getjson);
// console.log(c);

// let getbody = document.getElementsByTagName('body')[0];
// let getemail = document.getElementById("email");
// let getpass = document.getElementById("pass");
// let button = document.createElement('button');
// button.innerHTML = 'Enter please';
// getbody.appendChild(button);
//
// // click hone pe dictionary bane and us mein value add ho.
//
// getpass.onkeyup = function(e) {
//   if (e.key == "Enter") {
//     let makedict = { email: getemail.value, password: getpass.value };
//     let makejson = JSON.stringify(makedict);
//     // localStorage.setItem('user',make)
//     console.log(makejson);
//     local('UserProfile',makejson)
//
//   }
// };
// function local(key, value) {
//   localStorage.setItem(key, value);
// }
// button.onclick = function () {
//     console.log(localStorage.getItem('UserProfile'));
//   }
