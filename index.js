function validate() 
{
    
  const name = document.querySelector("#name");
  const number = document.querySelector("#number");
  const password = document.querySelector("#password");
  const course = document.querySelector("#course");
  const gender = document.querySelector("input[name='gender']:checked");

  console.log("name : " + name.value);
  console.log("number : " + number.value);
  console.log("password : " + password.value);
  console.log("course : " + course.options[course.selectedIndex].value);
  console.log("gender: " + gender.value);
}
