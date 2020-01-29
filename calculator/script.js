class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.'))
            return
        this.currentOperand = this.currentOperand.toString() + number.toString()
       

    }

    chooseOperation(operation) {
        if (this.currentOperand === '') 
            return
        if (this.previousOperand !== '') {
          this.calculate()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    calculate() {
        let calculation;
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) 
            return
        switch (this.operation) {
                case '+':
                    calculation = prev + current
                    break
                case '-':
                    calculation = prev - current
                    break
                case '*':
                    calculation = prev * current
                    break
                case '÷':
                    calculation = prev / current
                    break
                case '^':
                    calculation = Math.pow(prev, current)
                    break
                case 'sqrt':
                    calculation = Math.sqrt(this.currentOperand)
                    break
                default:
                    return
        }
        this.currentOperand = calculation;
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } 
        else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } 
        else {
          return integerDisplay
        }
    }


  updateDisplay() {
    
        this.currentOperandElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
        this.previousOperandElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } 
        
        else {
        this.previousOperandElement.innerText = ''
        }
    
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
})
})

operationButtons.forEach(button => {
button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
})
})

equalsButton.addEventListener('click', button => {
calculator.calculate()
calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
calculator.clear()
calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
calculator.delete()
calculator.updateDisplay()
})


