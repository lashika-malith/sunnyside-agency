function myFunction() {
   const x = document.getElementById("navbar");
   if (x.className === "topnav") {
      x.classList.add("responsive")
      console.log(x)
   } else {
     x.className = "topnav"
   }
}