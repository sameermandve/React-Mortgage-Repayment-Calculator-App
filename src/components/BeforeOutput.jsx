import Illustration from "../assets/images/illustration-empty.svg";

export default function BeforeOutput() {
  return (
    <div className="flex flex-col items-center">
      <img
        src={Illustration}
        alt="illustration"
        className="w-[175px] h-[175px]"
      />
      <h1 className="mt-4 mb-4 text-xl font-semibold text-white">
        Results shown here
      </h1>
      <p className="text-base text-center text-customSlate-500">
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
