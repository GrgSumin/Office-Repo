import { createContext, useContext, useState, ReactNode } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, formSchemas } from "../types/zod";

export interface currentIndexContextProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  next: (currentIndex: number) => void;
  previous: () => void;
  forms: UseFormReturn<formSchemas>;
}

export const MultiStepContext = createContext<
  currentIndexContextProps | undefined
>(undefined);

export const currentIndexContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const forms = useForm<formSchemas>({ resolver: zodResolver(formSchema) });

  const next = (currentIndex: number) => {
    switch (currentIndex) {
      case 0:
        forms.trigger(["firstName", "lastName", "age"]).then((resp) => {
          if (resp) {
            setCurrentIndex((prevcurrentIndex) => prevcurrentIndex + 1);
          }
        });
        break;
      case 1:
        forms.trigger(["address", "country"]).then((resp) => {
          if (resp) {
            setCurrentIndex((prevcurrentIndex) => prevcurrentIndex + 1);
          }
        });
        break;
      case 2:
        forms.trigger(["email", "password"]).then((resp) => {
          if (resp) {
            setCurrentIndex((prevcurrentIndex) => prevcurrentIndex + 1);
          }
        });
        break;
    }
  };

  const previous = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <MultiStepContext.Provider
      value={{ currentIndex, setCurrentIndex, next, previous, forms }}
    >
      {children}
    </MultiStepContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(MultiStepContext);

  if (!context) {
    throw new Error("Error");
  }

  return context;
};
