const body = document.getElementById('body');

var books = [
    {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
    }, 

    {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }
];


books.forEach(x => {
    let p = document.createElement('p');
    p.textContent = `Title: ${x.title},  Author: ${x.author},   Has it been read? ${x.alreadyRead}`;
    body.appendChild(p);
})