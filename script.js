window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-text').innerText = ""
    // these IDs from the previous steps
    emailjs.sendForm('service_ra2piov', 'template_px1omr6', this).then(() => {
      console.log('Successfully submitted form!');
      document.getElementById('form-text').innerText = "Thanks! We've received your message"
    }, (error) => {
      console.log('ERROR: Failed to submit form:', error);
    });
  });
}
