import { memo } from "react";

import { Promo } from "~/components";
import { PaymentOptions } from "./PaymentOptions/PaymentOptions";

import { PAYMENT_TYPES } from "~/constants";

import btcImageSrc from "~/assets/btc.png";
import ethImageSrc from "~/assets/eth.png";
import mastercardImageSrc from "~/assets/mastercard.png";
import perfectMoneyImageSrc from "~/assets/perfect-money.png";
import piastrixImageSrc from "~/assets/piastrix.png";
import pinImageSrc from "~/assets/pin.png";
import skrillImageSrc from "~/assets/skrill.png";
import sticpayImageSrc from "~/assets/sticpay.png";
import usdtImageSrc from "~/assets/usdt.png";
import visaImageSrc from "~/assets/visa.png";

import "./Payment.scss";

const cardsPayments = [
    {
        name: PAYMENT_TYPES.MASTERCARD,
        fee: "5%",
        tag: "popular",
        src: mastercardImageSrc,
        type: PAYMENT_TYPES.MASTERCARD,
    },
    {
        name: PAYMENT_TYPES.VISA,
        fee: "5%",
        tag: "trusted",
        src: visaImageSrc,
        type: PAYMENT_TYPES.VISA,
    },
    {
        name: PAYMENT_TYPES.SKRILL,
        fee: "0%",
        src: skrillImageSrc,
        type: PAYMENT_TYPES.SKRILL,
    },
    {
        name: PAYMENT_TYPES.PERFECT_MONEY,
        fee: "0%",
        src: perfectMoneyImageSrc,
        type: PAYMENT_TYPES.PERFECT_MONEY,
    },
    {
        name: PAYMENT_TYPES.PIASTRIX,
        fee: "0%",
        src: piastrixImageSrc,
        type: PAYMENT_TYPES.PIASTRIX,
    },
    {
        name: PAYMENT_TYPES.STICPAY,
        fee: "0%",
        src: sticpayImageSrc,
        type: PAYMENT_TYPES.STICPAY,
    },
    {
        name: PAYMENT_TYPES.PIN,
        fee: "1%",
        src: pinImageSrc,
        type: PAYMENT_TYPES.PIN,
    },
];

const CryptocurrencyPayments = [
    {
        name: PAYMENT_TYPES.BTC,
        fee: "0%",
        src: btcImageSrc,
        type: PAYMENT_TYPES.BTC,
    },
    {
        name: PAYMENT_TYPES.ETH,
        fee: "0%",
        src: ethImageSrc,
        type: PAYMENT_TYPES.ETH,
    },
    {
        name: PAYMENT_TYPES.USDT,
        fee: "0%",
        src: usdtImageSrc,
        type: PAYMENT_TYPES.USDT,
    },
];

export const Payment = memo(({ selectPayment }) => {
    return (
        <section className="section payment">
            <div className="section__title-wrapper">
                <h2 className="section__title title-h2">Make A Deposit</h2>
            </div>
            <div className="payment__methods">
                <h3 className="payment__methods-title title-h3">
                    Choose payment method
                </h3>
                <PaymentOptions
                    selectPayment={selectPayment}
                    title="Cards, e-money, PIN"
                    data={cardsPayments}
                />
                <PaymentOptions
                    selectPayment={selectPayment}
                    title="Cryptocurrency"
                    data={CryptocurrencyPayments}
                />
            </div>
            <div className="payment__promotion">
                <Promo />
            </div>
        </section>
    );
});
