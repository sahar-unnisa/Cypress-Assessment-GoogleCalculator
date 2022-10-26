
const inputNumber = '12345' 

class ClearNumberPage {
 
    get clearNumber(){
        return cy.get('table[class="ElumCf"]>tbody>:first-child>:nth-child(4)>div>:nth-child(2)').click(); 
    }

    get ACButtonElm(){
        return cy.get('table[class="ElumCf"]>tbody>:first-child>:nth-child(4)>div:first-child').click();
    }

    get inputField(){
        return cy.get('#cwos');
        
    }


    isNumbersClear(){
        this.inputField.type(inputNumber);
        const lengthOfNumbers = inputNumber.length;
        cy.log('**************' + lengthOfNumbers);
        for(var i = 0; i < 5; i++){
        this.clearNumber;
        }
    }

    clickACButton(){
        cy.reload;
        cy.ACButtonElm;
    }
}
module.exports = new ClearNumberPage();