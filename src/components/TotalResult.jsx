export default function TotalResult({ totalPayment }) {
  let c = isNaN(totalPayment) ? 0 : totalPayment;

  const options = { maximumFractionDigits: 2 };

  let newTotalPayment = Intl.NumberFormat("en-US", options).format(c);

  return (
    <div className="mb-1">
      <p className="mb-2 text-base md:text-sm lg:text-base text-customSlate-500 text-wrap">
        Total you'll repay over the term
      </p>
      <h1 className="text-2xl font-bold text-white md:text-xl lg:text-2xl">
        £{newTotalPayment}
      </h1>
    </div>
  );
}
