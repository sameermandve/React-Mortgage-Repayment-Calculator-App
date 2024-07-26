export default function TotalResult({ totalPayment }) {
  let c = isNaN(totalPayment) ? 0 : totalPayment;

  const options = { maximumFractionDigits: 2 };

  let newTotalPayment = Intl.NumberFormat("en-US", options).format(c);

  return (
    <div>
      <p className="text-base text-customSlate-500 mb-2 text-wrap">
        Total you'll repay over the term
      </p>
      <h1 className="text-2xl text-white font-bold">£{newTotalPayment}</h1>
    </div>
  );
}
