import { useForm } from "react-hook-form";
import InputField from "./InputField";
import SubmitBtn from "./SubmitBtn";
import RadioInputOption from "./RadioInputOption";
import "../index.css";

export default function Form(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    props.onSubmit(data);
  };

  const onClear = (data) => {
    reset();
    props.onSubmit(data);
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Mortgage Calculator</h1>
        <h3 onClick={onClear} className="clearBtn">
          Clear All
        </h3>
      </div>
      <form action="z" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          {...register("amount", { required: "This field is required" })}
          label="Mortgage Amount"
          type="number"
          step={1}
          name="amount"
          inputLabel="£"
          errors={
            errors?.amount ? (
              <span className="errorSpan">{errors.amount.message}</span>
            ) : null
          }
          required
        />

        <div className="gridInput">
          <InputField
            {...register("years", { required: "This field is required" })}
            label="Mortgage Years"
            type="number"
            step={1}
            name="years"
            inputLabel="years"
            errors={
              errors?.years ? (
                <span className="errorSpan">{errors.years.message}</span>
              ) : null
            }
            required
          />

          <InputField
            {...register("interestRate", {
              required: "This field is required",
            })}
            label="Interest Rate"
            type="number"
            name="interestRate"
            step={0.05}
            inputLabel="%"
            errors={
              errors?.interestRate ? (
                <span className="errorSpan">{errors.interestRate.message}</span>
              ) : null
            }
            required
          />
        </div>

        <div className="radioInputContainer">
          <p className="radioLabel">Mortgage Type</p>
          <RadioInputOption
            {...register("mortgageType", {
              required: "This field is required",
            })}
            label="Repayment"
            type="radio"
            name="mortgageType"
            id="repayment"
            value="repayment"
            required
          />
          <RadioInputOption
            {...register("mortgageType", {
              required: "This field is required",
            })}
            label="Interest Only"
            type="radio"
            name="mortgageType"
            id="interest"
            value="interest"
            required
          />
          {errors?.mortgageType ? (
            <span className="errorSpan">{errors.mortgageType.message}</span>
          ) : null}
        </div>

        <SubmitBtn />
      </form>
    </>
  );
}
