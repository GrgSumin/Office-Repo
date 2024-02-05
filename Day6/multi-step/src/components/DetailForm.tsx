import { useForm } from "react-hook-form";
import Style from "./Style";
import { formSchema, formSchemas } from "../types/zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

type DetailFormProps = {
  forms: ReturnType<typeof useForm>; // This is important for TypeScript
};
const DetailForm = ({ forms }: DetailFormProps) => {
  const { register } = useForm<formSchemas>({
    resolver: zodResolver(formSchema),
    context: forms,
  });
  console.log(forms.formState.errors);

  return (
    <Style title="User Details">
      <label htmlFor="firstName">FirstName</label>
      <input
        {...forms.register("firstName")}
        type="text"
        placeholder="First Name"
      />
      <label htmlFor="">LastName</label>
      <input
        {...forms.register("lastName")}
        type="text"
        placeholder="Last Name"
      />
      <label htmlFor="age">Age</label>
      <input {...forms.register("age")} type="text" placeholder="Age" />
    </Style>
  );
};

export default DetailForm;
