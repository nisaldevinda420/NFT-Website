// function validateForm() {
//     let x = document.forms["form"]["name"].value;
//     let y = document.forms["form"]["email"].value;
//     let z = document.forms["form"]["pwd"].value;
  
//     if (x == "") {
//       alert("Name must be filled out");
//     }
  
//     if (y == "") {
//       alert("Email must be filled out");
//     }
  
//     if (z == "") {
//       alert("Password must be filled out");
//     }
  
//     getContent();
    
//   }
  
function getContent(){

    console.log("hello");
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const title = document.getElementById('title').value;
      const message = document.getElementById('questiondeets').value;
  
      const nameVal = document.getElementById('name-val');
      const emailVal = document.getElementById('email-val');
      const titleVal = document.getElementById('title-val')
      const messageVal = document.getElementById('message-val');

      nameVal.textContent = name;
      emailVal.textContent = email;
      titleVal.textContent = title;
      messageVal.textContent = message;
  }
  
  
  
  
  
  