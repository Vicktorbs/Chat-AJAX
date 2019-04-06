window.addEventListener('load', () => {
    setTimeout(showConten, 2000)
})

function showConten() {
    let content = document.getElementById('mainarea')
    let loader = document.getElementById('loader')
    content.classList.remove('d-none')
    loader.classList.remove('d-flex')
    loader.classList.add('d-none')
}