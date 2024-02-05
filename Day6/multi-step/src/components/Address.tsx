import { useForm } from "react-hook-form";
import Input from "./Input";
import Label from "./Label";
import Style from "./Style";
import { formSchema, formSchemas } from "../types/zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

type DetailFormProps = {
  forms: ReturnType<typeof useForm>; // This is important for TypeScript
};
const Address = ({ forms }: DetailFormProps) => {
  const { register } = useForm<formSchemas>({
    resolver: zodResolver(formSchema),
    context: forms,
  });

  return (
    <Style title="Address">
      <label htmlFor="">Adress</label>
      <Input {...forms.register("address")} type="text" />
      <label htmlFor="address">Country</label>
      <Input {...forms.register("country")} type="text" />
    </Style>
  );
};

export default Address;
