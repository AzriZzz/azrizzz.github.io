window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var counter = 0;

        var tempParams = {
            user_name: document.getElementById('user_name').value,
            user_email: document.getElementById('user_email').value,
            user_title: document.getElementById('user_title').value,
            user_message: document.getElementById('user_message').value
        }

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
                confirmButtonText: '😢',
            })        
        } else {
            emailjs.sendForm('service_kdbchky', 'template_haiw589', this)
            .then(function() {
                Swal.fire({
                    icon: 'success',
                    title: 'Email sent!',
                    text: 'We will contact you as soon as possible!',
                    confirmButtonColor: '#6E57E0',
                    confirmButtonText: '😊',
                })
                
                // reinitialize value
                for (const el in tempParams) {
                    document.getElementById(el).value = '';           
                }

            }, function(error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Something is wrong...',
                    text: 'We will fix this shortly!',
                    confirmButtonColor: '#FF6437',
                    confirmButtonText: '😳',
                })
            });
        }
        counter = 0;
    });
}