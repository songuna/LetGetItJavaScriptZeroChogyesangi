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
