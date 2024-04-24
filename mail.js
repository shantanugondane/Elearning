const firebaseConfig = {
    apiKey: "AIzaSyD5AhRI1aXIhtrZznBNPE47UcUmwTrsCGk",
    authDomain: "contactform-63e18.firebaseapp.com",
    databaseURL: "https://contactform-63e18-default-rtdb.firebaseio.com",
    projectId: "contactform-63e18",
    storageBucket: "contactform-63e18.appspot.com",
    messagingSenderId: "49653723370",
    appId: "1:49653723370:web:fc564301e70339b2a3a793"
  };


  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  