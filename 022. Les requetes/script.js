
// ancienne version
const request = new XMLHttpRequest();
request.open('GET', 'data.txt');
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        document.getElementById('ajax1').innerHTML = request.responseText;
    } else if (request.readyState === 4 && request.status !== 200) {
        document.getElementById('ajax1').innerHTML = 'Une erreur est survenue !';
    }
};
request.send();

// nouvelle version
fetch('data.txt')
    .then(response => response.text())
    .then(text => document.getElementById('ajax2').innerHTML = text)
    .catch(() => document.getElementById('ajax2').innerHTML = 'Une erreur est surviendu !');


