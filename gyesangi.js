const buttons = document.querySelectorAll('button');
const displayElement = document.querySelector('input');
let displayContent = '';

for (const button of buttons) {
    button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'operator':
                console.log('operator');
                break;
            case 'ac':
                console.log('ac');
                break;
            case 'equals':
                console.log('equals');
                break;
            default:
                displayContent += button.innerText;
                displayElement.value = displayContent;
        }
    });
}
