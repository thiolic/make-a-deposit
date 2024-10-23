import { memo, useCallback } from "react";

import HeaderBalance from "./HeaderBalance/HeaderBalance";
import HeaderButton from "./HeaderButton/HeaderButton";

import {
    BurgerIcon,
    GiftIcon,
    LogoIcon,
    NotificationIcon,
    SearchIcon,
} from "~/icons";

import profileImageSrc from "~/assets/profile.jpg";

import "./Header.scss";

export const Header = memo(({ toggleMenu }) => {
    const handleSearchClick = useCallback(() => {
        console.log("Search button clicked!");
    }, []);

    const handleGiftClick = useCallback(() => {
        console.log("Gift button clicked!");
    }, []);

    const handleNotificationClick = useCallback(() => {
        console.log("Notification button clicked!");
    }, []);

    const handleAddBalanceClick = useCallback(() => {
        console.log("Add button clicked!");
    }, []);

    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__inner">
                    <div className="header__navigation">
                        <HeaderButton onClick={toggleMenu}>
                            <BurgerIcon />
                        </HeaderButton>
                        <div className="header__logo">
                            <LogoIcon />
                        </div>
                    </div>
                    <div className="header__components">
                        <div className="header__buttons">
                            <HeaderButton onClick={handleSearchClick}>
                                <SearchIcon />
                            </HeaderButton>
                            <HeaderButton onClick={handleGiftClick}>
                                <GiftIcon />
                            </HeaderButton>
                            <HeaderButton onClick={handleNotificationClick}>
                                <NotificationIcon />
                            </HeaderButton>
                        </div>
                        <div className="header__balance">
                            <HeaderBalance
                                balance="125.02"
                                percentage="13"
                                onAddClick={handleAddBalanceClick}
                            />
                        </div>

                        <div className="header__profile">
                            <img src={profileImageSrc} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
});
