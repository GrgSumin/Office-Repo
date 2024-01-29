type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>)=> void
}

function Button({handleClick}: ButtonProps) {
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Button
