// Animate skill bars on scroll

window.addEventListener("scroll", () => {

  document.querySelectorAll(".progress-bar").forEach(bar => {

    const rect = bar.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {

      bar.style.width = bar.style.getPropertyValue("--target-width");

    }

  });

});

// Simple contact form demo

document.getElementById("contact-form").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Message sent! (Demo only)");

});