import { memo, useState } from "react";

import { Promo } from "~/components";
import { Button, CustomSelect } from "~/components/UI";
import { AmountBlock } from "./AmountBlock/AmountBlock";
import { processDeposit } from "~/api";

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
    const [isProcessing, setIsProcessing] = useState(false);
    const [depositStatus, setDepositStatus] = useState(null);
    
    const defaultOption = options.find(
        (option) => option.type === paymentMethod
    );

    const handleDeposit = async () => {
        setIsProcessing(true);
        setDepositStatus(null);
        
        try {
            // Mock deposit data - in real app this would come from form state
            const depositData = {
                paymentMethod: paymentMethod,
                amount: 100, // This would come from the AmountBlock component
                currency: 'USD',
                promoCode: null // This would come from the Promo component
            };
            
            const result = await processDeposit(depositData);
            setDepositStatus({ type: 'success', message: 'Deposit processed successfully!' });
            console.log('Deposit successful:', result);
            
            // Close popup after successful deposit
            setTimeout(() => {
                closePopup();
            }, 2000);
            
        } catch (error) {
            setDepositStatus({ 
                type: 'error', 
                message: error.response?.data?.message || 'Deposit failed. Please try again.' 
            });
            console.error('Deposit failed:', error);
        } finally {
            setIsProcessing(false);
        }
    };

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
                
                {depositStatus && (
                    <div className={`popup__status popup__status--${depositStatus.type}`}>
                        {depositStatus.message}
                    </div>
                )}
                
                <div className="popup__button">
                    <Button 
                        onClick={handleDeposit}
                        disabled={isProcessing}
                    >
                        {isProcessing ? 'Processing...' : 'Deposit'}
                    </Button>
                </div>
            </div>
        </div>
    );
});
