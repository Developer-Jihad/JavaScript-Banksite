
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    // Clear the Deposit inpute Value
    inputField.value = '';
    return inputAmount;
}

function updateTotalAmount(previousTotal, amount) {
    const totalField = document.getElementById(previousTotal);
    const previousAmount = parseFloat(totalField.innerText);
    // Update Total Amount
    const newAmountTotal = previousAmount + amount;
    totalField.innerText = newAmountTotal;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceAmount = parseFloat(balanceTotal.innerText);
    return previousBalanceAmount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceAmount = getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceAmount + amount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = previousBalanceAmount - amount;
        balanceTotal.innerText = newBalanceTotal;
    }
}

document.getElementById('diposit-button').addEventListener('click', function () {

    // Get the Diposited Ammount
    const newDipositAmount = getInputValue('diposit-input');

    if (newDipositAmount > 0) {
        // Update Diposit Total
        updateTotalAmount('diposit-total', newDipositAmount);

        // Update Account Balance
        updateBalance(newDipositAmount, true);
    }

})

// Handle Withdraw Balance

document.getElementById('withdraw-button').addEventListener('click', function () {

    // Get withdraw Amount
    const newWithdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance();

    if (newWithdrawAmount > 0 && currentBalance >= newWithdrawAmount) {
        // Update the withdraw Total
        updateTotalAmount('withdraw-totla', newWithdrawAmount);

        // Update Account Balance
        updateBalance(newWithdrawAmount, false);

    }else {
        alert("You Don't have sufficient Banlance");
      }
})