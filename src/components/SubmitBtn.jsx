import calculateImg from "../assets/images/icon-calculator.svg";
import "../index.css";

export default function SubmitBtn() {
  return (
    <>
      <button className="flex justify-center items-center bg-lime py-3.5 px-4 text-lg font-bold text-customSlate-900 rounded-full w-full lg:w-3/4 md:w-4/6">
        <img className="mr-2" src={calculateImg} alt="img" />
        Calculate Repayments
      </button>
    </>
  );
}
