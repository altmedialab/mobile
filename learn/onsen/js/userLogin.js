<script>
    const login = () => {
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
  
        if (username === '' && password === '') {
            // call the navigator to move to the new page
            const navigator = document.querySelector('#navigator');
            navigator.resetToPage('home.html');
        } else {
            ons.notification.alert('Wrong username/password combination');
        }
    };
</script>