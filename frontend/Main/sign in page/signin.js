function myFunction() {
      var element = document.getElementById("body");
      element.classList.toggle("dark-mode");
      element.classList.toggle("container");
      document.getElementById("dark").classList.toggle("fa-moon");
      document.getElementById("dark").classList.toggle("fa-sun");
}