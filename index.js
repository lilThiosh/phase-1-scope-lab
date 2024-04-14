// Declare customerName in global scope
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}


function setBestCustomer() {
    // Declare bestCustomer in global scope
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    // Declare bestCustomer in global scope
    bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
    // This will throw an error because you cannot reassign a value to a constant
    leastFavoriteCustomer = 'someone else';
}
