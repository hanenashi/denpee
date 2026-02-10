function calc() {
    const val10 = parseFloat(document.getElementById('in10').value) || 0;
    const val8 = parseFloat(document.getElementById('in8').value) || 0;

    // Formula: Tax = Total - (Total / (1 + Rate))
    const t10 = Math.floor(val10 - (val10 / 1.10));
    const t8 = Math.floor(val8 - (val8 / 1.08));
    
    document.getElementById('t10').innerText = t10.toLocaleString();
    document.getElementById('t8').innerText = t8.toLocaleString();
    document.getElementById('t-total').innerText = (t10 + t8).toLocaleString();
    
    // Fill the "Cash" field with the total sum
    document.getElementById('cash-out').innerText = (val10 + val8).toLocaleString();
}