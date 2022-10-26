
class fifthRowNumbersPage{
    get numberZero(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(5) td>div>div').eq(0).click().should('have.text', '0');
    }
    get dotSymbol(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(5) td>div>div').eq(1).click().should('have.text', '.');
    }
    get equalsSymbol(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(5) td>div>div').eq(2).click().should('have.text', '=');
    }
    get plusSymbol(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(5) td>div>div').eq(3).click().should('have.text', '+');
    }

    get clearNumber(){
        return cy.get('table[class="ElumCf"]>tbody>:first-child>:nth-child(4)>div>:nth-child(2)').click(); 
    }


checkFifthRowNumbers(){
    this.numberZero;
    this.clearNumber;
    this.dotSymbol;
    this.clearNumber;
    this.equalsSymbol;
    this.clearNumber;
    this.plusSymbol;
    this.clearNumber;
}

}
module.exports = new fifthRowNumbersPage();
