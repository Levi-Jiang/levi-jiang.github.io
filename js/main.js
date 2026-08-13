// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Contact form — no backend; opens the user's mail client
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = encodeURIComponent(form.name.value || '');
      var email = encodeURIComponent(form.email.value || '');
      var message = encodeURIComponent(form.message.value || '');
      var to = form.getAttribute('data-email') || 'you@example.com';
      var subject = 'Portfolio inquiry from ' + decodeURIComponent(name);
      var body = message + '%0D%0A%0D%0A—%20' + name + '%20(' + email + ')';
      window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + body;
    });
  }
});
