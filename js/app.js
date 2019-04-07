window.addEventListener('load', () => {
    setTimeout(showConten, 500)//1800
    getMessages();
})

function showConten() {
    let content = document.getElementById('mainarea')
    let loader = document.getElementById('loader')
    content.classList.remove('d-none')
    loader.classList.remove('d-flex')
    loader.classList.add('d-none')
}

function getMessages() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'php/messages.php', true)
    xhr.setRequestHeader('Conten-Type', 'application/x-www-form-urlencoded')
    xhr.onreadystatechange = function () {
        // console.log(xhr.responseText);
        let messagesReceived = JSON.parse(xhr.responseText)
        // console.log(messagesReceived);
        let messageTemplate = ''
        messagesReceived.forEach(message => {
            messageTemplate += `
            <ul class="list-unstyled">
                <li class="media alert alert-secondary">
                    <div class="media-body">
                    <h5 class="mt-0 mb-1 font-weight-bold">${ message.name }</h5>
                    <p>${ message.message }</p>
                    <p class="float-right">${ message.date }</p>
                    </div>
                </li>
            </ul>
            `
            document.getElementById('messageslist').innerHTML = messageTemplate
        });
        // document.getElementById('conten_text').innerHTML = xhr.responseText
    }
    xhr.send()
}