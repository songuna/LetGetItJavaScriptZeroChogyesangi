class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement
        this.displayContent = ''
    }

    appendNumber(number) {
        this.displayContent += number
    }

    updateDisplay() {
        this.displayElement.value = this.displayContent
    }
}

const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector('input')
const calculator = new Calculator(displayElement)

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'operator':
                console.log('operator')
                break
            case 'ac':
                console.log('ac')
                break
            case 'equals':
                console.log('equals')
                break
            default:
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    })
})