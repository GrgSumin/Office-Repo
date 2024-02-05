import { useForm } from "react-hook-form";
import Style from "./Style";
import { formSchema, formSchemas } from "../types/zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

type DetailFormProps = {
  forms: ReturnType<typeof useForm>; // This is important for TypeScript
};
const Email = ({ forms }: DetailFormProps) => {
  const { register } = useForm<formSchemas>({
    resolver: zodResolver(formSchema),
    context: forms,
  });

  return (
    <Style title="Login">
      <label htmlFor="email"> Email</label>
      <input {...forms.register("email")} type="email" />
      <label htmlFor="password">Password</label>
      <input {...forms.register("password")} type="password" />
    </Style>
  );
};

export default Email;
