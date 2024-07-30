import MonthyOutput from "./MonthyOutput";
import TotalResult from "./TotalResult";

export default function OutputResult({
  interestRateValue,
  yearsValue,
  amountValue,
  mortgageTypeValue,
}) {
  let n = 12; //months in a year
  let r = interestRateValue / 100; // interest rate / 100
  let t = yearsValue; // term of loan in years
  let P = amountValue; //Principle Amount

  let monthlyPay = ((P * (r / n)) / (1 - Math.pow(1 + r / n, -n * t))).toFixed(
    2
  );

  let totalPay = 0;
  let mpInterestOnly = 0;

  if (mortgageTypeValue === "repayment") {
    totalPay = (monthlyPay * t * n).toFixed(2);
  } else {
    let interestOnly = (P / t / n).toFixed(2);
    mpInterestOnly = (monthlyPay - interestOnly).toFixed(2);
    totalPay = (mpInterestOnly * t * n).toFixed(2);
  }

  return (
    <>
      <div className="mb-10">
        <h1 className="headH1">Your Results</h1>
        <p className="headPara">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </p>
      </div>

      <div className="resultContainer">
        <MonthyOutput
          debtType={mortgageTypeValue}
          monthlyPayment={monthlyPay}
          monthlyPaymentIO={mpInterestOnly}
        />
        <TotalResult totalPayment={totalPay} />
      </div>
    </>
  );
}
