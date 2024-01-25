import React, { useState } from "react";
import "../styles/Slice3.css";
import { FaMicrophoneLines } from "react-icons/fa6";
import { BsFillSpeakerFill } from "react-icons/bs";
import { PiMicrophoneStageFill } from "react-icons/pi";

const Slice3 = () => {
    return (
        <div className="slice3">
            <div className="fixed-div">
                <h3>Subscription tier</h3>
                <TierBox
                    name="Basic Listener"
                    amount="3.00"
                    description="These supporters might revceive access to exclusive updates, behind-the-scenes content."
                    subscribed={true}
                    icon={<FaMicrophoneLines className="tire-box-icon" />}
                    background="#fef0d5"
                />
                <TierBox
                    name="VIP Listener"
                    amount="5.00"
                    description="VIP may receive all ther perks of the Basic Fan tier, as well as additional benefits."
                    subscribed={false}
                    icon={<BsFillSpeakerFill className="tire-box-icon" />}
                    background="#d7f6eb"
                />
                <TierBox
                    name="Super Listener"
                    amount="12.00"
                    description="In addition to the benifits of the VIP Fan level, Superfans might receive exclusive merchandise."
                    subscribed={false}
                    icon={<PiMicrophoneStageFill className="tire-box-icon" />}
                    background="#e3f3ff"
                />
            </div>
        </div>
    );
};

const TierBox = ({
    name,
    amount,
    description,
    subscribed,
    icon,
    background,
}) => {
    const [status, setStatus] = useState(
        subscribed ? "Subscribe" : "Unsubscribe"
    );
    const toggle = () => {
        status === "Subscribe"
            ? setStatus("Unsubscribe")
            : setStatus("Subscribe");
    };

    return (
        <div className="tier-box">
            <div className="contents" style={{ background }}>
                <div className="text">
                    <div className="content-name">{name}</div>
                    <div className="content-amount cgrey">${amount}/month</div>
                </div>
                {icon}
            </div>
            <div className="tier-desc">{description}</div>
            <div className={`tier-btn-${status}`} onClick={toggle}>
                {status}
            </div>
        </div>
    );
};
export default Slice3;
