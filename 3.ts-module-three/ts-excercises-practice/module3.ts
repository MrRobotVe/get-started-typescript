/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */
      interface Loan {
        principle: number
        interestRate: number
      }

/*  TODO: Declare the ConventionalLoan interface. */
      interface LoanPayment extends Loan {
        months: number
      }


/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loan: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest = loan.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loan.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(loanPayment: LoanPayment): string {
    // Calculates the monthly payment of a conventional loan
    let interest = loanPayment.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanPayment.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanPayment.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principle: 300000, interestRate: 6});
let conventionalPayment = calculateConventionalLoanPayment({
  principle: 500000,
  interestRate: 10,
  months: 120
});

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24" 