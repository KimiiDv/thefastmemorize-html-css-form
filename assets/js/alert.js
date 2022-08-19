const forgotError = document.getElementById('forgot-error');

forgotError.addEventListener('click', () => {
    swal.fire({
        icon: 'error',
        title: 'Page out of order',
        background: '#293462',
        color: '#fff',
        timer: 2000
    })
})