import React, { useState } from "react";
import { FaMicrophoneLines } from "react-icons/fa6";
import { BsFillSpeakerFill } from "react-icons/bs";
import { PiMicrophoneStageFill } from "react-icons/pi";

const RightSIde = () => {
  const [basicSubscribed, setBasicSubscribed] = useState(true);
  const [secondSubscribed, setSecondSubscribed] = useState(false);
  const [thirdSubscribed, setThirdSubscribed] = useState(false);

  const handleSubscribeToggle = (tier) => {
    switch (tier) {
      case "Basic":
        setBasicSubscribed(!basicSubscribed);
        break;
      case "second":
        setSecondSubscribed(!secondSubscribed);
        break;
      case "third":
        setThirdSubscribed(!thirdSubscribed);
        break;
      default:
        break;
    }
  };

  return (
    <div className="third">
      <h2>Subscription tiers</h2>
      <br />
      <Division
        name="Basic Listener"
        amount="$5.00/months"
        icon={<FaMicrophoneLines />}
        description="This supporters might receive access to exclusive updates, behind-the-scenes, and early access to new releases."
        subscribed={basicSubscribed}
        background="#f2e09d"
        onSubscribe={() => handleSubscribeToggle("Basic")}
      />
      <Division
        name="VIP Listener"
        amount="$5.00/months"
        icon={<BsFillSpeakerFill />}
        description="This supporters might receive access to exclusive updates, behind-the-scenes, and early access to new releases."
        subscribed={secondSubscribed}
        background="#d9d9ff"
        onSubscribe={() => handleSubscribeToggle("second")}
      />
      <Division
        name="VIP Listener"
        amount="$5.00/months"
        icon={<PiMicrophoneStageFill />}
        description="This supporters might receive access to exclusive updates, behind-the-scenes, and early access to new releases."
        subscribed={thirdSubscribed}
        background="#b4f29d"
        onSubscribe={() => handleSubscribeToggle("third")}
      />
    </div>
  );
};

const Division = ({
  name,
  amount,
  icon,
  description,
  subscribed,
  background,
  onSubscribe,
}) => {
  const status = subscribed ? "Subscribed" : "Subscribe";

  return (
    <div>
      <div className="mainContent">
        <div className="basiclisten">
          <div
            style={{
              background,
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              height: "100px",
              padding: "23px",
            }}
          >
            <div className="basic">
              <h3>{name}</h3>
              <h4>{amount}</h4>
            </div>
            <h1>{icon}</h1>
          </div>
          <div className="paragraph">
            <p>{description}</p>
          </div>
          <div className="money">
            <button className={`buttons-${status}`} onClick={onSubscribe}>
              {status}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSIde;
