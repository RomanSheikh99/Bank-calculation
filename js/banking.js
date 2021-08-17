// withdraw calculatrion
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-amount').value;
    const withdrawBefor = document.getElementById('withdraw-total');
    const withdrawTotal = parseFloat(withdrawBefor.innerText) + parseFloat(withdrawAmount);
    withdrawBefor.innerText = withdrawTotal;

    // total balance calculation
    const TotalAmount = document.getElementById('total-balance');
    const totalbalance = parseFloat(TotalAmount.innerText) - parseFloat(withdrawAmount);
    TotalAmount.innerText = totalbalance;

    document.getElementById('withdraw-amount').value = '';
})

// diposite calculation
document.getElementById('diposit-btn').addEventListener('click', function(){
    const dipositAmount = document.getElementById('diposit-amount').value;
    const dipositBefor = document.getElementById('diposit-total');
    const dipositTotal = parseFloat(dipositBefor.innerText) + parseFloat(dipositAmount);
    dipositBefor.innerText = dipositTotal

    // total balance calculation
    const TotalAmount = document.getElementById('total-balance');
    const totalbalance = parseFloat(TotalAmount.innerText) + parseFloat(dipositAmount);
    TotalAmount.innerText = totalbalance;

    document.getElementById('diposit-amount').value = '';
})

