import MonthyOutput from "./MonthyOutput";
import TotalResult from "./TotalResult";

export default function OutputResult({ ...inputValues }) {
  let n = 12; //months in a year
  let r = inputValues.interestRate / 100; // interest rate / 100
  let t = inputValues.years; // term of loan in years
  let P = inputValues.amount; //Principle Amount

  let monthlyPay = ((P * (r / n)) / (1 - Math.pow(1 + r / n, -n * t))).toFixed(
    2
  );

  let totalPay = 0;
  let mpInterestOnly = 0;

  if (inputValues.mortgageType === "repayment") {
    totalPay = (monthlyPay * t * n).toFixed(2);
  } else {
    let interestOnly = (P / t / n).toFixed(2);
    mpInterestOnly = (monthlyPay - interestOnly).toFixed(2);
    totalPay = (mpInterestOnly * t * n).toFixed(2);
  }

  return (
    <div className="resultContainer">
      <MonthyOutput
        debtType={inputValues.mortgageType}
        monthlyPayment={monthlyPay}
        monthlyPaymentIO={mpInterestOnly}
      />
      <TotalResult totalPayment={totalPay} />
    </div>
  );
}
