window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const Swal = require('sweetalert2');
        
        var checkName = document.getElementById('user_name').value;
        var checkEmail = document.getElementById('user_email').value;
        var checkTitle = document.getElementById('user_title').value;
        var checkMessage = document.getElementById('message').value;

        var tempParams = {
            contact__name: checkName,
            contact__email: checkEmail,
            user_title: checkTitle,
            contact__message: checkMessage
        }

        var counter = 0;

        for (const el in tempParams) {
            var label = document.getElementsByClassName(el)[0];
            if (tempParams[el] == '' || tempParams[el].length == 0) {
                label.classList.add('content_error');
            } else {
                label.classList.remove('content_error');
                counter += 1;
            }            
        }

        var objectLength = Object.keys(tempParams).length;

        if (counter < objectLength) {
            // alert('Please fill in all field.');
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        } else {
            emailjs.sendForm('service_kdbchky', 'template_haiw589', this)
            .then(function() {
                alert(
                    `Email sent! We will contact you as soon as possible!`
                );
            }, function(error) {
                alert(
                    `Something is wrong. We will fix this shortly!`
                );
            });
        }
        counter = 0;
    });
}