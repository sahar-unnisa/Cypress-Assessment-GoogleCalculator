
class secondRowNumbersPage{
    get numberSeven(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(2) td>div>div').eq(0).click().should('have.text', '7');
    }
    get numberEight(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(2) td>div>div').eq(1).click().should('have.text', '8');
    }
    get numberNine(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(2) td>div>div').eq(2).click().should('have.text', '9');
    }
    get divisionSymbol(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(2) td>div>div').eq(3).click().should('have.text', '÷');
    }

    get clearNumber(){
        return cy.get('table[class="ElumCf"]>tbody>:first-child>:nth-child(4)>div>:nth-child(2)').click(); 
    }


checkSecondRowNumbers(){
    this.numberSeven;
    this.clearNumber;
    this.numberEight;
    this.clearNumber;
    this.numberNine;
    this.clearNumber;
    this.divisionSymbol;
    this.clearNumber;
}

}
module.exports = new secondRowNumbersPage();
