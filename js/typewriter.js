class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

//Contact
function validateform1(){  
  var name=document.myform.name.value;
  var subject=document.myform.subject.value; 
  var email=document.myform.email.value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var phone=document.myform.phone.value;
  var message=document.myform.message.value;
    
  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;
  }else if (subject==null || subject==""){  
    alert("Subject can't be blank");  
    return false;
  }else if (!filter.test(email)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
  }else if (phone==null || phone==""){  
    alert("Phone Number can't be blank");  
    return false;
  }else if (message==null || message==""){  
    alert("Message section can't be blank");  
    return false;
}
}

 //Login
function validateform2(){  
  var name=document.myform.name.value;  
  var password=document.myform.password.value;  
    
  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }else if(password.length<8){  
    alert("Password must be at least 8 characters long.");  
    return false;  
    }  
  }

  //Register
  function validateform3(){  
    var name=document.myform.name.value;  
    var name2=document.myform.name2.value;
    var email=document.myform.email.value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var password=document.myform.password.value;
    var password1=document.myform.password1.value;  
      
    if (name==null || name==""){  
      alert("First Name can't be blank");  
      return false;  
    }else if (name2==null || name2==""){  
      alert("Last Name can't be blank");  
      return false;   
    }else if (!filter.test(email)) {
      alert('Please provide a valid email address');
      email.focus;
      return false;
    }else if(password.length<8){  
      alert("Password must be at least 8 characters long.");  
      return false;  
    }else if(password1!=password){  
      alert("Password do not match");  
      return false;    
    }
  }


  //Admin Login

  // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

  

