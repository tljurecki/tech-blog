async function signupFormHandler(event) {
    event.preventDefault();

    const userName = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    //check to make sure all fields were entered
    if(userName && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                userName,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        });

       //if signup was successful send them to the dashboard
        if(response.ok) {
            console.log('Success');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);