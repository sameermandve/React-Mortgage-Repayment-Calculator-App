import calculateImg from "../assets/images/icon-calculator.svg";
import "../index.css";

export default function SubmitBtn() {
  return (
    <>
      <button className="submitBtn">
        <img className="mr-2" src={calculateImg} alt="img" />
        Calculate Repayments
      </button>
    </>
  );
}
