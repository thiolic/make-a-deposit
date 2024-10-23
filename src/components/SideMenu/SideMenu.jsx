import clsx from "clsx";
import { memo } from "react";

import { CircleCloseIcon, LogoIcon } from "~/icons";

import "./SideMenu.scss";

const menuItems = [
    { label: "Casino Games", href: "#" },
    { label: "Live Games", href: "#" },
    { label: "TV-Bet", href: "#" },
    { label: "Sport Games", href: "#" },
    { label: "Virtual", href: "#" },
    { label: "Tournaments", href: "#" },
    { label: "Spin Shop", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Support Chat", href: "#" },
];

export const SideMenu = memo(({ isOpen, toggleMenu }) => {
    return (
        <nav className={clsx("side-menu", { "side-menu--open": isOpen })}>
            <div className="side-menu__components">
                <div className="side-menu__logo">
                    <LogoIcon />
                </div>
                <button
                    onClick={toggleMenu}
                    className="side-menu__openner"
                    aria-label="Close menu"
                >
                    <CircleCloseIcon />
                </button>
            </div>
            <ul className="side-menu__list">
                {menuItems.map((item, index) => (
                    <li key={index} className="side-menu__listitem">
                        <a href={item.href} className="side-menu__link">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
});
