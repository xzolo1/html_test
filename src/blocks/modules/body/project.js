const card = {
    numCard: "01223456789",
    nameCard: "credit visa gold",
    type: "VISA",
    status: "+",
    balance: 0,
    cur: "RUB",
    numDep: "9199191919919191919"
};

function createCardInfo(card) {
    let cardInfo = [];
    if (card.hasOwnProperty("numCard") && card.hasOwnProperty("nameCard") && card.hasOwnProperty("balance") && card.hasOwnProperty("cur")) {
        if (card.numCard && typeof card.numCard === "string" && /^\d+$/.test(card.numCard) && card.numCard.length >= 4 || card.balance && /^[0-9]*[.,]?[0-9]+$/.test(card.balance) && card.balance >= 0) {
            const lastDigits = card.numCard.slice(-4);
            const balance = card.balance;
            const currency = card.cur;
            if (card.nameCard.indexOf("credit") === -1)
            {
                cardInfo = ("По вашей карте " + lastDigits + " вам доступно " + balance + " " + currency);
                return [cardInfo, 0];
            }else {
                cardInfo = ("По вашей кредитной карте " + lastDigits + " вам доступно " + balance + " " + currency);
                return [cardInfo, 0];
            }
        }else{
            return ["",-1];
        }
    }else {
        return ["",-1];
    }
}
console.log(createCardInfo(card));