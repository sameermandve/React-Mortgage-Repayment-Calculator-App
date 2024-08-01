import { useForm } from "react-hook-form";
import InputField from "./components/InputField";
import RadioInputOption from "./components/RadioInputOption";
import SubmitBtn from "./components/SubmitBtn";
import OutputResult from "./components/OutputResult";
import BeforeOutput from "./components/BeforeOutput";
import "./index.css";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = () => {};

  const onClear = () => {
    reset();
  };

  return (
    // App.jsx
    <div className="flex flex-col w-full h-full md:max-lg:min-h-screen lg:flex-row lg:bg-white md:m-8 font-plusSans lg:w-4/6 lg:rounded-2xl md:shadow-lg">
      {/* InputSection */}
      <div className="flex flex-col w-full px-6 py-8 bg-white md:rounded-tl-2xl md:rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl">
        {/* Header Section which includes title and clear button */}
        <header className="flex flex-col mb-5 md:flex-row md:justify-between md:items-center md:mb-8">
          <h1 className="mb-2 text-2xl font-bold md:text-2xl text-customSlate-900 md:mb-0">
            Mortgage Calculator
          </h1>
          <h3
            onClick={onClear}
            className="text-base font-medium underline text-customSlate-500 lg:cursor-pointer lg:hover:text-customSlate-500"
          >
            Clear All
          </h3>
        </header>

        {/* Form Section includes inputField, radioInput, and submitBtn components */}
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
                <span className="mt-2 text-sm font-semibold text-errorRed">
                  {errors.amount.message}
                </span>
              ) : null
            }
            required
          />

          <div className="md:grid md:grid-cols-2 md:gap-7">
            <InputField
              {...register("years", { required: "This field is required" })}
              label="Mortgage Years"
              type="number"
              step={1}
              name="years"
              inputLabel="years"
              errors={
                errors?.years ? (
                  <span className="mt-2 text-sm font-semibold text-errorRed">
                    {errors.years.message}
                  </span>
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
                  <span className="mt-2 text-sm font-semibold text-errorRed">
                    {errors.interestRate.message}
                  </span>
                ) : null
              }
              required
            />
          </div>

          <div className="flex flex-col mb-7">
            <p className="font-semibold text-customSlate-700">Mortgage Type</p>
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
              <span className="mt-0 text-sm font-semibold text-errorRed">
                {errors.mortgageType.message}
              </span>
            ) : null}
          </div>

          <SubmitBtn />
        </form>
      </div>

      {/* This container styling is in index.css */}
      <div
        className={!isSubmitSuccessful ? "preOutputSection" : "outputSection"}
      >
        {/* Output section before result submitted or after clicking clear all */}

        {!isSubmitSuccessful && <BeforeOutput />}

        {/* Output section after successfull submit */}

        {isSubmitSuccessful && (
          <OutputResult
            interestRateValue={getValues("interestRate")}
            yearsValue={getValues("years")}
            amountValue={getValues("amount")}
            mortgageTypeValue={getValues("mortgageType")}
          />
        )}
      </div>
    </div>
  );
}

export default App;
