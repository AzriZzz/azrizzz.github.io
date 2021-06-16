window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You still have some field empty!',
                confirmButtonColor: '#FF6437',
                confirmButtonText: 'CLICK',
            })        
        } else {
            emailjs.sendForm('service_kdbchky', 'template_haiw589', this)
            .then(function() {
                Swal.fire({
                    icon: 'success',
                    title: 'Email sent!',
                    text: 'We will contact you as soon as possible!',
                    confirmButtonColor: '#6E57E0',
                    confirmButtonText: 'CLICK',
                })
            }, function(error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Something is wrong...',
                    text: 'We will fix this shortly!',
                    confirmButtonColor: '#FF6437',
                    confirmButtonText: 'CLICK',
                })
            });
        }
        counter = 0;
    });
}