let btnPasses = document.querySelectorAll('.js-btn-password');

btnPasses.forEach(function(btnPass) {
    let inputPass = btnPass.previousElementSibling;

    btnPass.onclick = function(e) {
        e.preventDefault();
        if (inputPass.getAttribute('type') === 'password') {
            inputPass.setAttribute('type', 'text');
            btnPass.classList.add('active');
        } else {
            inputPass.setAttribute('type', 'password');
            btnPass.classList.remove('active');
        }
    }
});
