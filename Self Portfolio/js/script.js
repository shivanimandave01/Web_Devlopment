document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const sections = document.querySelectorAll("main section[id]");

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: 0.2,
    }
  );

  sections.forEach((section) => observer.observe(section));

  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      formMessage.textContent = "Thank you for your message! This form is ready to connect to your email service later.";
      form.reset();
    });
  }
});

emailjs.init("vYEmzf58DJityCAnp"); // from step 2

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const sendBtn = document.getElementById("sendBtn");
  const formMessage = document.getElementById("formMessage");

  sendBtn.disabled = true;
  sendBtn.innerHTML = "Sending...";

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_kp7zhsw", "template_2bu25xt", formData)
    .then(function () {
      formMessage.className = "mt-3 text-success";
      formMessage.textContent = "Message sent successfully! I'll get back to you soon.";
      document.getElementById("contactForm").reset();
    })
    .catch(function (error) {
      formMessage.className = "mt-3 text-danger";
      formMessage.textContent = "Something went wrong. Please try again.";
      console.error("EmailJS error:", error);
    })
    .finally(function () {
      sendBtn.disabled = false;
      sendBtn.innerHTML = '<i class="bi bi-send me-2"></i>Send Message';
    });
});