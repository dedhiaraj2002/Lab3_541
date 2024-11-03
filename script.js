document.addEventListener('DOMContentLoaded', function() {

    const billIn = document.getElementById('bill-total-in');
    const tipIn = document.getElementById('tip-in');
    const tipInValue = document.getElementById('tip-in-value');
    const tipAmoutOut = document.getElementById('tip-amount-out');
    const totalOut = document.getElementById('total-out');
    const errorMessage = document.getElementById('error-message');
  
    document.getElementById('tip-form').addEventListener('input', function() {
      let billTotal = billIn.value.trim();
      let tipValue = Number(tipIn.value);
  
      if (Number(billTotal) == 0) {
        tipIn.value = 0;
        tipInValue.innerText = '0%';
        tipAmoutOut.value = '0.00';
        totalOut.value = '0.00';
        return;
      }
  
      // Check if the bill total is invalid or empty
      if (isNaN(billTotal) || billTotal === '' || Number(billTotal) < 0) {
        errorMessage.innerText = 'Please enter a valid positive number for the bill total.';
  
        // Reset the tip and total fields if bill is empty or zero
        tipIn.value = 0;
        tipInValue.innerText = '0%';
        tipAmoutOut.value = '0.00';
        totalOut.value = '0.00';
        return;
      }
      
      errorMessage.innerText = '';
      tipInValue.innerText = `${tipValue}%`;
  
      let tipAmount = parseFloat(billTotal * (tipValue / 100)).toFixed(2);
      let totalAmount = parseFloat(Number(billTotal) + Number(tipAmount)).toFixed(2);
  
      tipAmoutOut.value = tipAmount;
      totalOut.value = totalAmount;
    });
  }); // end DOMContentLoaded