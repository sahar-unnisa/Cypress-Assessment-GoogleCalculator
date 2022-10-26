const fifthrownumberspage = require("./fifthrownumbers.page");
const fourthRowNumberspage = require("./fourthRownumbers.page");
const secondrownumberspage = require("./secondrownumbers.page");
const thirdrownumberspage = require("./thirdrownumbers.page");

class CalculationPage {
    get divisionSymbol(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(2) td>div>div').eq(3).click();
    }

    get multiplySymbol(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(3) td>div>div').eq(3).click();
    }

    get minusSymbol(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(3) td>div>div').eq(3).click();
    }

    get plusSymbol(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(2) td>div>div').eq(3).click();
    }

    get equalsSymbol(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(2) td>div>div').eq(2).click();
    }

    get clearNumber(){
        return cy.get('table[class="ElumCf"]>tbody>:first-child>:nth-child(4)>div>:nth-child(2)').click(); 
    }

    addNumbers(){
        fourthRowNumberspage.numberTwo;
        fifthrownumberspage.plusSymbol;
        fourthRowNumberspage.numberThree;
        fifthrownumberspage.equalsSymbol; 
    }

    subtractNumbers(){
        secondrownumberspage.numberNine;
        fourthRowNumberspage.minusSymbol;
        fourthRowNumberspage.numberTwo;
        fifthrownumberspage.equalsSymbol;
    }

    multiplyNumbers(){
        thirdrownumberspage.numberSix;
        thirdrownumberspage.multiplySymbol;
        thirdrownumberspage.numberSix;
        fifthrownumberspage.equalsSymbol;
    }

    divideNumbers(){
        fourthRowNumberspage.numberOne;
        fifthrownumberspage.numberZero;
        secondrownumberspage.divisionSymbol;
        thirdrownumberspage.numberFive;
        fifthrownumberspage.equalsSymbol;
    }
}
module.exports = new CalculationPage();