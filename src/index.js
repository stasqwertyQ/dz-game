const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'P'];
let currentKeyIndex = 0;

function setCurrentKey() {
    document.getElementById('key').textContent = keys[currentKeyIndex];
}

function showNotification(message, type) {
    PNotify.alert({
        text: message,
        type: type,
        delay: 2000
    });
}

document.addEventListener('keydown', function (event) {
    if (event.key.toUpperCase() === keys[currentKeyIndex]) {
        currentKeyIndex = (currentKeyIndex + 1) % keys.length;
        setCurrentKey();
        showNotification('Правильна клавіша!', 'success');
    } else {
        showNotification('Неправильна клавіша!', 'error');
    }
});

document.addEventListener('keypress', function (event) {
    event.preventDefault();
});

document.getElementById('new-game').addEventListener('click', function () {
    currentKeyIndex = 0;
    setCurrentKey();
    showNotification('Нова гра почалася!', 'info');
});

setCurrentKey();



// task 2


