import { memo } from "react";

import { Promo } from "~/components";
import { Button, CustomSelect } from "~/components/UI";
import { AmountBlock } from "./AmountBlock/AmountBlock";

import { ArrowLeftIcon, CloseIcon } from "~/icons";

import { PAYMENT_TYPES } from "~/constants";

import mastercardImageSrc from "~/assets/mastercard.png";
import visaImageSrc from "~/assets/visa.png";

import "./PopupForm.scss";

const options = [
    {
        id: 1,
        imgSrc: mastercardImageSrc,
        mainText: "Mastercard, USD ⋅ Comission 3%",
        secondaryText: "Please notice that you will send money in the USD",
        type: PAYMENT_TYPES.MASTERCARD,
    },
    {
        id: 2,
        imgSrc: visaImageSrc,
        mainText: "Mastercard, USD ⋅ Comission 3%",
        secondaryText: "Please notice that you will send money in the USD",
        type: PAYMENT_TYPES.VISA,
    },
];

export const PopupForm = memo(({ paymentMethod, closePopup }) => {
    const defaultOption = options.find(
        (option) => option.type === paymentMethod
    );

    return (
        <div className="popup">
            <div className="popup__content">
                <div className="popup__nav">
                    <span onClick={closePopup} className="popup__nav-back">
                        <span
                            className="popup__nav-back__icon"
                            aria-hidden="true"
                        >
                            <ArrowLeftIcon />
                        </span>
                        Back to Payment Method
                    </span>
                    <button onClick={closePopup} className="popup__nav-close">
                        <CloseIcon />
                    </button>
                </div>
                <p className="popup__balance">
                    Current Balance: <span>$ 0.00</span>
                </p>
                <CustomSelect
                    options={options}
                    defaultSelectedOption={defaultOption}
                />
                <AmountBlock />
                <Promo title="Promo Code" teaser={false} />
                <div className="popup__button">
                    <Button onClick={() => {}}>Deposit</Button>
                </div>
            </div>
        </div>
    );
});
