type labelProps = {
  label: string;
  htmlFor: string;
};
const Label = ({ label, htmlFor }: labelProps) => {
  return (
    <div className="label">
      <label htmlFor={htmlFor} className="">
        {label}
      </label>
    </div>
  );
};

export default Label;
