function validateMastercard(cardNumber) {
    // Remove any non-digit characters (spaces, hyphens, etc.)
    cardNumber = cardNumber.replace(/\D/g, '');
  
    // Check if the card number starts with '51', '52', '53', '54', or '55' and has exactly 16 digits
    if (cardNumber.length === 16) {
      if (cardNumber.startsWith('51') || cardNumber.startsWith('52') || cardNumber.startsWith('53') ||
          cardNumber.startsWith('54') || cardNumber.startsWith('55')) {
        return "This is a valid Mastercard.";
      }
    }
  
    // If conditions are not met, return invalid
    return "This is not a valid Mastercard.";
  }
  
  // Test the function with some examples
  console.log(validateMastercard("5105 1051 0510 5100")); // Valid Mastercard
  console.log(validateMastercard("4111 1111 1111 1111")); // Not valid, it's a Visa card
  console.log(validateMastercard("5200 0000 0000 0000")); // Valid Mastercard