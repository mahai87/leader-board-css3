// practice problem 01
document.getElementById('top-players').style.color = 'rgb(205, 25, 24)';
document.getElementById('top-blogs').style.color = 'rgb(20, 200, 254)';
// practice problem 02
const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = 'rgba(20, 200, 254, .75)'
    player.style.marginLeft = '5px';
}
// practice problem 03
document.getElementById('li-button').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = 'new list item';
    const ul = document.getElementById('list-container');
    ul.appendChild(li);
})
// practice problem 04
document.getElementById('input-button').addEventListener('click', function () {
    const inputField = document.getElementById('input-field')
    const newInputText = inputField.value;
    const newInput = parseInt(newInputText);
    const inputButton = document.getElementById('input-button');
    if (newInput < 5) {
        inputField.value = newInput + 1;

    }
    // practice problem 05
    else if (inputField.value = 5) {
        inputButton.setAttribute('disabled', true);
    }
})
// practice problem 06