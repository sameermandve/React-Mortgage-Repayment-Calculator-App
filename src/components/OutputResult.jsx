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
        <h1 className="mb-4 text-2xl font-semibold text-white lg:max-xl:text-xl">
          Your Results
        </h1>
        <p className="text-base text-customSlate-500">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </p>
      </div>

      <div className="w-full px-5 py-6 border-t-4 rounded-lg bg-resultBg border-t-lime">
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
