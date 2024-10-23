import { memo, useCallback, useState } from "react";

import { ArrowIcon } from "~/icons";

import "./CustomSelect.scss";

export const CustomSelect = memo(({ options, defaultSelectedOption }) => {
    const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = useCallback(() => {
        setDropdownOpen((prevOpen) => !prevOpen);
    }, []);

    const handleOptionSelect = useCallback((option) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    }, []);

    return (
        <div className="custom-select">
            <div className="custom-select__selected" onClick={toggleDropdown}>
                {selectedOption ? (
                    <div className="custom-select__option">
                        <span className="custom-select__option-image">
                            <img
                                src={selectedOption.imgSrc}
                                alt={selectedOption.mainText}
                            />
                        </span>
                        <div>
                            <p className="custom-select__option-title">
                                {selectedOption.mainText}
                            </p>
                            <span className="custom-select__option-subtitle">
                                {selectedOption.secondaryText}
                            </span>
                        </div>
                    </div>
                ) : (
                    <p className="custom-select__option">Select an option</p>
                )}
                <span
                    className="custom-select__selected-arrow"
                    aria-hidden="true"
                >
                    <ArrowIcon />
                </span>
            </div>

            {isDropdownOpen && (
                <ul className="custom-select__dropdown">
                    {options.map((option) => (
                        <li
                            key={option.id}
                            className="custom-select__option"
                            onClick={() => handleOptionSelect(option)}
                        >
                            <span className="custom-select__option-image">
                                <img
                                    src={option.imgSrc}
                                    alt={option.mainText}
                                />
                            </span>
                            <div>
                                <p className="custom-select__option-title">
                                    {selectedOption?.mainText}
                                </p>
                                <span className="custom-select__option-subtitle">
                                    {selectedOption?.secondaryText}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
});
