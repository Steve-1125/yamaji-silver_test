window.onload = function () {
    const spinner = document.getElementById('pageLoading');
    setTimeout(() => {
        spinner.classList.add('loaded');
    }, 1000)

}