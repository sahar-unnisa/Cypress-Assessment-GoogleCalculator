
class fourthRowNumbersPage{
    get numberOne(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(4) td>div>div').eq(0).click().should('have.text', '1');
    }
    get numberTwo(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(4) td>div>div').eq(1).click().should('have.text', '2');
    }
    get numberThree(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(4) td>div>div').eq(2).click().should('have.text', '3');
    }
    get minusSymbol(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(4) td>div>div').eq(3).click().should('have.text', '−');
    }

    get clearNumber(){
        return cy.get('table[class="ElumCf"]>tbody>:first-child>:nth-child(4)>div>:nth-child(2)').click(); 
    }

checkFourthRowNumbers(){
    this.numberOne;
    this.clearNumber;
    this.numberTwo;
    this.clearNumber;
    this.numberThree;
    this.clearNumber;
    this.minusSymbol;
    this.clearNumber;
}

}
module.exports = new fourthRowNumbersPage();
