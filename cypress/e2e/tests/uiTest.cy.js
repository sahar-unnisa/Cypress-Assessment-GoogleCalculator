const SecondRow = require('../pageobjects/secondrownumbers.page');
const ThirdRow = require('../pageobjects/thirdrownumbers.page');
const FourthRow = require('../pageobjects/fourthRownumbers.page');
const FifthRow = require('../pageobjects/fifthrownumbers.page');
const Calculation = require('../pageobjects/calculation.page');
const KeyboardCalculation = require('../pageobjects/keyboardvaluescalculation.page');
const ClearNumbers = require('../pageobjects/clearnumbers.page');
const num1 = 4;
const num2 = 12;

describe('Testing the Calculator functionalities', ()=> {
    before(()=>{
        cy.visit('https://www.google.com/');
        cy.get("input[type = 'text']").type('calculator{enter}');
    });

    it('Check all numbers are clickable', () =>{
        SecondRow.checkSecondRowNumbers();
        ThirdRow.checkThirdRowNumbers();
        FourthRow.checkFourthRowNumbers();
        FifthRow.checkFifthRowNumbers();
});

    it('Check whether the calculations are performed as per the calculator operators', ()=>{
       Calculation.addNumbers();
       cy.get('#cwos').should('have.text', '5');
       
       Calculation.subtractNumbers();
       cy.get('#cwos').should('have.text', '7');

       Calculation.multiplyNumbers();
       cy.get('#cwos').should('have.text', '36');

       Calculation.divideNumbers();
       cy.get('#cwos').should('have.text', '2');
       cy.get('table[class="ElumCf"]>tbody>:first-child>:nth-child(4)>div:first-child').click(); 
    });

    it('Check whether the calculations are performed as per the calculator operators by sending the values from the keyboard',()=> {
        KeyboardCalculation.addNumbers(num1, num2);
        const sum = num1 + num2;
        cy.get('#cwos').should('have.text', sum);

        KeyboardCalculation.subtractNumbers(num1, num2);
        const subtraction = num2 - num1;
        cy.get('#cwos').should('have.text', subtraction);

        KeyboardCalculation.multiplyNumbers(num1, num2);
        const multiplication = num1 * num2;
        cy.get('#cwos').should('have.text', multiplication);

        KeyboardCalculation.divideNumbers(num1, num2);
        const division = num2 / num1;
        cy.get('#cwos').should('have.text', division);
    });

    it('All the numbers entered should be cleared by clicking CE button', ()=>{
        ClearNumbers.isNumbersClear();
        cy.get('#cwos').should('have.text', '0');
    });

    it('Check AC button is working', ()=> {
        ClearNumbers.clickACButton();
        const ceButton = cy.get('table[class="ElumCf"]>tbody>:first-child>:nth-child(4)>div>:nth-child(2)');
        ceButton.should('have.text', 'CE');
    });

});