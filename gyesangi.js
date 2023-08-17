class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement
        this.displayContent = ''
    }

    appendNumber(number) {
        this.displayContent += number
    }

    appendOperator(operator) {
        this.displayContent += operator
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
                calculator.appendOperator(button.innerText)
                calculator.updateDisplay()
                break
            //...
        }
    })
})