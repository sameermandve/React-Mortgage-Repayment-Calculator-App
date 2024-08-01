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
    <div className="pb-6 mb-6 border-b-2 border-b-customSlate-700">
      <p className="mb-3 text-base text-customSlate-500 text-wrap">
        Your monthly repayments
      </p>
      <h1 className="text-4xl font-bold md:text-5xl text-lime text-wrap lg:max-xl:text-3.5xl">
        £{debtType === "repayment" ? newA : newB}
      </h1>
    </div>
  );
}
