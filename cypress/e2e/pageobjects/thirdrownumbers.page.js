
class thirdRowNumbersPage{
    get numberFour(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(3) td>div>div').eq(0).click().should('have.text', '4');
    }
    get numberFive(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(3) td>div>div').eq(1).click().should('have.text', '5');
    }
    get numberSix(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(3) td>div>div').eq(2).click().should('have.text', '6');
    }
    get multiplySymbol(){
        return cy.get('table[class="ElumCf"]>tbody>:nth-child(3) td>div>div').eq(3).click().should('have.text', '×');
    }

    get clearNumber(){
        return cy.get('table[class="ElumCf"]>tbody>:first-child>:nth-child(4)>div>:nth-child(2)').click(); 
    }


checkThirdRowNumbers(){
    this.numberFour;
    this.clearNumber;
    this.numberFive;
    this.clearNumber;
    this.numberSix;
    this.clearNumber;
    this.multiplySymbol;
    this.clearNumber;
}

}
module.exports = new thirdRowNumbersPage();
