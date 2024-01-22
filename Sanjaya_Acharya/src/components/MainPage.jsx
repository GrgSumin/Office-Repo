import React from "react";
import "../styles/MainPage.css";
import Slice1 from "./Slice1";
import Slice2 from "./Slice2";
import Slice3 from "./Slice3";
import { LiaFlagUsaSolid } from "react-icons/lia";

const MainPage = ({ activeFollowing, changeActiveFollowing }) => {
    const followingList = [
        {
            id: 0,
            username: "John Cena",
            coverURL: "https://shorturl.at/etQR0",
            profileURL:
                "https://wallpapers.com/images/hd/wwe-superstar-john-cena-salute-pose-1wjy5h85xen7t0lr.jpg",
            address: (
                <div>
                    <span>Wrestler from CA</span>
                    <LiaFlagUsaSolid style={{ color: "red" }} />
                </div>
            ),
            subscribersCount: 985312,
        },
        {
            id: 1,
            username: "Handsome Hunk",
            coverURL:
                "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
            profileURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn65sexiOS00kemYRvj5ATe73c4aAVAC2XLpPrqxL0fA&s",
            address: (
                <div>
                    <span>Musician from CA</span>
                    <LiaFlagUsaSolid style={{ color: "red" }} />
                </div>
            ),
            subscribersCount: 5681,
        },
        {
            id: 2,
            username: "Mo Salah",
            coverURL:
                "https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg",
            profileURL:
                "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2023-07/pp-23-24-mens-home-body-salah.webp?itok=hOje16Dr",
            address: (
                <div>
                    <span>Player from CA</span>
                    <LiaFlagUsaSolid style={{ color: "red" }} />
                </div>
            ),
            subscribersCount: 98546,
        },
        {
            id: 3,
            username: "Nami Swaaaa",
            coverURL:
                "https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149005675.jpg?size=626&ext=jpg",
            profileURL:
                "https://img.freepik.com/premium-photo/beautiful-girl-ao-dai-viet-nam_43285-18.jpg?w=360",
            address: (
                <div>
                    <span>Artist from CA</span>
                    <LiaFlagUsaSolid style={{ color: "red" }} />
                </div>
            ),
            subscribersCount: 654654,
        },
        {
            id: 4,
            username: "Erik Lawrance",
            coverURL:
                "https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg?size=626&ext=jpg",
            profileURL:
                "https://www.shutterstock.com/image-photo/young-attractive-man-looks-seriously-260nw-1738162157.jpg",
            address: (
                <div>
                    <span>Unemployed from CA</span>
                    <LiaFlagUsaSolid style={{ color: "red" }} />
                </div>
            ),
            subscribersCount: 1000,
        },
    ];

    return (
        <div className="main-page">
            <Slice1
                activeFollowing={activeFollowing}
                changeActiveFollowing={changeActiveFollowing}
                followingList={followingList}
            />
            <Slice2
                activeFollowing={activeFollowing}
                changeActiveFollowing={changeActiveFollowing}
                followingList={followingList}
            />
            <Slice3 />
        </div>
    );
};

export default MainPage;
