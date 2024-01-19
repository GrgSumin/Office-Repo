import React from "react";
import "../styles/Aside.css";
import { FaMicrophoneLines } from "react-icons/fa6";
import { BsFillSpeakerFill } from "react-icons/bs";
import { PiMicrophoneStageFill } from "react-icons/pi";

const Aside = () => {
    return (
        <div className="aside">
            <h2>Subscription tier</h2>
            <TierBox
                name="Basic Listener"
                amount="3.00"
                description="These supporters might revceive access to exclusive updates, behind-the-scenes content, and early access to new releases."
                subscribed={true}
                icon={<FaMicrophoneLines className="tire-box-icon" />}
                background="#dfd"
            />
            <TierBox
                name="VIP Listener"
                amount="5.00"
                description="VIP may receive all ther perks of the Basic Fan tier, as well as additional benefits such as exclusive livestream ce=oncerts, private Q&A sessions with the musician, and personalized shortouts on social media."
                subscribed={false}
                icon={<BsFillSpeakerFill className="tire-box-icon" />}
                background="#fe9"
            />
            <TierBox
                name="Super Listener"
                amount="12.00"
                description="In addition to the benifits of the VIP Fan level, Superfans might receive exclusive merchandise like signed CDs or posters, a monthly digital download of a new song"
                subscribed={false}
                icon={<PiMicrophoneStageFill className="tire-box-icon" />}
                background="#ddf"
            />
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
    const status = subscribed ? "Subscribed" : "Unsubscribed";

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
            <div className={`tier-btn-${status}`}>{status}</div>
        </div>
    );
};
export default Aside;
