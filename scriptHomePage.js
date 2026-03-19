var btns = document.querySelectorAll(".servicesDropdownBtn");

for (var i = 0; i < btns.length; i++)
{
  btns[i].addEventListener("click", function ()
  {
    var dropdownContent = this.nextElementSibling;

    if (dropdownContent.style.display === "block")
    {
      dropdownContent.style.display = "none";
    }
    else
    {
      dropdownContent.style.display = "block";
    }
  });
}

var searchInput = document.getElementById("searchInput");
searchInput.addEventListener
("keyup", function ()
{
  var filter = searchInput.value.toLowerCase();
  var servicesLinks = document.querySelectorAll(".servicesDropdownContent a");

  for (var i = 0; i < servicesLinks.length; i++)
  {
    var textInput = servicesLinks[i].textContent.toLowerCase();

    if (textInput.indexOf(filter) > -1)
    {
      servicesLinks[i].style.display = "block";
    }
    else
    {
      servicesLinks[i].style.display = "none";
    }
  }
}
);