function changePage(target){
    window.location.href= `./${target}`;
};

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("First Name must be filled out");
      return false;
    }
  }