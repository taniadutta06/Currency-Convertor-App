function convertCurrency() {
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = document.getElementById("result");
    if (isNaN(amount) || amount <= 0) {
        result.innerHTML = "⚠️ Please enter a valid amount.";
        return;
    }
    const rates = {
        USD: 1,
        INR: 86.00,
        EURO: 0.85
    };
    let amountInUSD = amount / rates[from];
    let convertedAmount = amountInUSD * rates[to];
    result.innerHTML =
        `${amount} ${from} = <br><span style="color:green;">${convertedAmount.toFixed(2)} ${to}</span>`;
}