// App.tsx
import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";
import Address from "./components/Address";
import DetailForm from "./components/DetailForm";
import Email from "./components/Email";
import { formSchema, formSchemas } from "./types/zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

function App() {
  const forms = useForm<formSchemas>({ resolver: zodResolver(formSchema) });
  const steps = [
    <DetailForm forms={forms} />,
    <Address forms={forms} />,
    <Email forms={forms} />,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const progress = ((currentIndex + 1) / steps.length) * 100;
  const step = steps[currentIndex];

  const next = async (currentIndex: number) => {
    switch (currentIndex) {
      case 0:
        const isValidStep0 = await forms.trigger([
          "firstName",
          "lastName",
          "age",
        ]);
        if (isValidStep0) {
          setCurrentIndex((prevcurrentIndex) => prevcurrentIndex + 1);
        }
        break;
      case 1:
        const isValidStep1 = await forms.trigger(["address", "country"]);
        if (isValidStep1) {
          setCurrentIndex((prevcurrentIndex) => prevcurrentIndex + 1);
        }
        break;
      case 2:
        const isValidStep2 = await forms.trigger(["email", "password"]);
        if (isValidStep2) {
          setCurrentIndex((prevcurrentIndex) => prevcurrentIndex + 1);
        }
        break;
      default:
        break;
    }
  };
  const previous = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const onSubmit: SubmitHandler<formSchemas> = (data) => {
    console.log("yess", data);
  };

  return (
    <div className="container">
      <div className="progressBar">
        <div
          style={{
            background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
            height: "10px",
            borderRadius: "5px",
            width: `${progress}%`,
          }}
        ></div>
      </div>
      <form>
        <div className="page">
          {currentIndex + 1}/{steps.length}
        </div>
        {step}
        <div className="btn">
          {currentIndex > 0 && (
            <button type="button" onClick={previous}>
              Back
            </button>
          )}

          {currentIndex == steps.length - 1 ? (
            <button type="submit" onClick={() => forms.handleSubmit(onSubmit)}>
              Submit
            </button>
          ) : (
            <button type="button" onClick={() => next(currentIndex)}>
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
