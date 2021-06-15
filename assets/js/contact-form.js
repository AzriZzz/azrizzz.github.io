window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var checkName = document.getElementById('user_name').value;
        var checkEmail = document.getElementById('user_email').value;
        var checkTitle = document.getElementById('user_title').value;
        var checkMessage = document.getElementById('message').value;

        var labelName = document.getElementsByClassName('contact__name');
        var labelEmail = document.getElementsByClassName('contact__email');
        var labelTitle = document.getElementsByClassName('contact__title');
        var labelMessage = document.getElementsByClassName('contact__message');

        var tempParams = {
            contact__name: checkName,
            contact__email: checkEmail,
            contact__title: checkTitle,
            contact__message: checkMessage
        }

        // for (const el in tempParams) {
        //     if 
        //     console.log(`${el}: ${tempParams[el]}`);
        // }

        if (tempParams.user_name == '' || tempParams.user_name.length == 0) {
            // labelName.addClass = 
            // addClass(labelName, 'content_error');
            var label = labelName[0];
            label.classList.add('content_error')
            console.log(labelName)
        }

        if (tempParams.user_email == '' || tempParams.user_email.length == 0) {
            checkEmail = 'Email ';
        }

        if (tempParams.user_title == '' || tempParams.user_title.length == 0) {
            checkTitle = 'Title ';
        }

        if (tempParams.message == '' || tempParams.message.length == 0) {
            checkMessage = ' Message.';
        }

        if ( checkName !== '' || checkEmail !== '' || checkTitle !== '' || checkMessage !== '') {
            alert(
                `Please enter your ${checkName} ${checkEmail} ${checkTitle} ${checkMessage}`
            );
        } else {
            emailjs.sendForm('service_kdbchky', 'template_haiw589', this)
            .then(function() {
                console.log('SUCCESS!');
                alert(
                    `Email has been sent. We will contact you as soon as possible!`
                );
            }, function(error) {
                alert(
                    `Something is wrong. We will fix this shortly!`
                );
            });
        }
    });
}