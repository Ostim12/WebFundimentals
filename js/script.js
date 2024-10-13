window.onload = function () {
  var links = document.querySelectorAll(".sidebar a");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      loadPage(this.getAttribute("data-file"));
    });
  });

  var content = document.querySelector(".content");

  content.addEventListener("click", function (e) {
    if (e.target.tagName.toLowerCase() === "a") {
      var href = e.target.getAttribute("href");
      // Check if it's an internal link
      if (href.startsWith("#")) {
        e.preventDefault();
        var targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView();
        }

        return;
      }

      e.preventDefault();
      loadPage(href);
    }
  });
};

function loadPage(file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(".content").innerHTML = data;
    });
}
