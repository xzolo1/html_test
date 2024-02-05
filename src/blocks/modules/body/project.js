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
    const schema = {
        numCard: value => /^\d+$/.test(value) && value >= 4,
        nameCard: value => /^[A-Za-zа-яА-ЯёЁ ]+$/u.test(value),
        balance: value => /^[0-9]*[.,]?[0-9]+$/.test(value) && value >= 0,
        cur: value => /^[A-Za-zа-яА-ЯёЁ]+$/u.test(value),
    };
    schema.numCard.required = true;
    schema.nameCard.required = true;
    schema.balance.required = true;
    schema.cur.required = true;
    const validate = (object, schema) => Object
        .entries(schema)
        .map(([key, validate]) => [
            key,
            !validate.required || (key in object),
            validate(object[key])
        ])
        .filter(([_, ...tests]) => !tests.every(Boolean))
        .map(([key, invalid]) => new Error(`${key} is ${invalid ? 'invalid' : 'required'}.`));

    const errors = validate(card, schema);

    if (errors.length > 0) {
        for (const { message } of errors) {
            return ["",-1];
        }
    } else {
        const digits = card.numCard.slice(-4);
        const lastDigits = digits.substring(0,2) + " " + digits.substring(2);
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
    }

}
console.log(createCardInfo(card));

