/* Les instructions sont exécutées les unes après les autres, de haut en bas.


const h1 = document.querySelector('h1');//1
h1.textContent = 'Hello in JavaScript !';//2
alert('Hello in JavaScript !');//3
h1.style.color = 'red';//4
alert('Hello in JavaScript !');//5

*/

// Le setTimeout est une forme d'asynchronysme.

/*
const img = document.querySelector('img');  //1
img.src = "image.jpg";  //2
img.addEventListener('load', () => {    //4
    console.log('Image chargée !');
    img.classList.add("fade-in")
});
console.log("Ce message s'affiche avant l'image !");    //3
*/

// L 'async et await permettent de gérer l'asynchronysme de manière plus simple et plus lisible.
// AJAX : Asynchronous JavaScript And XML, il sert à envoyer des requêtes HTTP en JavaScript.

// exemple de async et await


const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/post');
    if (response != null && response.status < 400) {
        const posts = await response.json();
        console.log(posts);
    }
    else {
        console.log('Retour du serveur : ', response.status);
    }
};

getPosts();




