// Basic form submission handling with alert (could be enhanced)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();

  if (name && email && message) {
    alert(`Thanks for reaching out, ${name}! I will get back to you soon.`);
    e.target.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
