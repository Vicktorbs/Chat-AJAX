document.addEventListener('DOMContentLoaded', () => {
    setTimeout(showConten, 500)//1800
    registerUser();
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
    xhr.onreadystatechange = () => {
        // console.log(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == 200) {
            let respuesta = xhr.responseText
            const messagesReceived = JSON.parse(respuesta);
            // console.log(messagesReceived);
            let messageTemplate = ''
            messagesReceived.forEach((message) => {
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
        }
        
        // document.getElementById('conten_text').innerHTML = xhr.responseText
    }
    xhr.send()
}

function registerUser() {
    let user = document.getElementById('formUser')
    let params
    user.addEventListener('submit', (e) => {
        e.preventDefault()
        let userName = document.getElementById('user').value
        let userStatus = document.getElementById('newuser').checked
        let userPassword = document.getElementById('password').value
        console.log(userPassword);
        params = 'user='+userName+'&&password='+userPassword+'&&status='+userStatus

        let xhr = new XMLHttpRequest();
        if (userStatus) {
            xhr.open('POST', 'php/registerUser.php', true)
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(xhr.responseText);
                
                }
            }
            xhr.send(params);
        } else {
            xhr.open('POST', 'php/logUser.php', true)
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    console.log(xhr.responseText);
                    let messageSection = document.getElementById('messagesSection')
                    let logSection = document.getElementById('logSection')
                    messageSection.classList.remove('d-none')
                    getMessages();
                    logSection.classList.add('d-none')
                }
            }
            xhr.send(params);
        }
        user.reset()
    })
    
}