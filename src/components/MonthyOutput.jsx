export default function MonthyOutput({
  debtType,
  monthlyPayment,
  monthlyPaymentIO,
}) {
  const options = { maximumFractionDigits: 2 };

  let a = isNaN(monthlyPayment) ? 0 : monthlyPayment;
  let b = isNaN(monthlyPaymentIO) ? 0 : monthlyPaymentIO;

  const newA = Intl.NumberFormat("en-US", options).format(a);
  const newB = Intl.NumberFormat("en-US", options).format(b);

  return (
    <div className="pb-7 mb-7 border-b-2 border-b-customSlate-700">
      <p className="text-base text-customSlate-500 mb-4 text-wrap">
        Your monthly repayments
      </p>
      <h1 className="text-5xl text-lime font-bold text-wrap">
        £{debtType === "repayment" ? newA : newB}
      </h1>
    </div>
  );
}
