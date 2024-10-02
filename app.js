// Initialize EmailJS with your user ID
(function(){
    emailjs.init("G9bvzZjKkBhPqxcom");
    console.log("EmailJS initialized"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    console.log('Form submitted'); 

    emailjs.sendForm('service_tde6taa', 'template_kv36bf7', this)
        .then(function() {
            console.log('Email sent successfully'); 
            alert('Message Sent Successfully!');
        }, function(error) {
            console.error('Error sending email:', error); 
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});