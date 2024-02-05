type inputProps = {
  type: string;
  placeholder?: string;
};
const Input = ({ type, placeholder }: inputProps) => {
  return (
    <div className="">
      <input type={type} placeholder={placeholder} className="input" />
    </div>
  );
};

export default Input;
