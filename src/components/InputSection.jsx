import Form from "./Form";
import "../index.css";

export default function InputSection({ setInputValues }) {
  const getData = (e) => {
    setInputValues(e);
  };

  return (
    <div className="inputSection">
      <Form onSubmit={getData} />
    </div>
  );
}
