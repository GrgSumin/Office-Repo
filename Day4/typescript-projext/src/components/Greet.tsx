type GreetProps = {
  name: string;
  message?: number;
  isLoggedIn: boolean;
};

function Greet({ name, message = 0, isLoggedIn }: GreetProps) {
  return (
    <div>
      <h1>
        {isLoggedIn
          ? `Good morning, everyone! My name is ${name}. You have ${message} messages.`
          : "You are not logged in."}
      </h1>
    </div>
  );
}

export default Greet;
