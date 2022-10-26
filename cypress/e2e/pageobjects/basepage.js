class BasePage{

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
}

module.exports = new BasePage();