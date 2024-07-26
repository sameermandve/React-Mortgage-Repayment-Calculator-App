import OutputHead from "./OutputHead";
import OutputResult from "./OutputResult";

export default function OutputSection({ inputValues }) {
  return (
    <div className="outputSection">
      <OutputHead />
      <OutputResult {...inputValues} />
    </div>
  );
}
