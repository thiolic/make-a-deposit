import { useState } from "react";

import { Button } from "~/components/UI";
import { TransactionItem } from "./TransactionItem/TransactionItem";

import { FilterIcon } from "~/icons";

import mastercardImageSrc from "~/assets/mastercard.png";
import sticpayImageSrc from "~/assets/sticpay.png";

import "./RecentTransactions.scss";

const mockTransactions = [
    {
        id: 1,
        imageSrc: sticpayImageSrc,
        withdraw: "by SticPay, USD",
        transactionNumber: "142354",
        date: "02.01 at 12:34PM",
        amount: "23.05$",
        status: "Processing",
    },
    {
        id: 2,
        imageSrc: sticpayImageSrc,
        withdraw: "by SticPay, USD",
        transactionNumber: "142354",
        date: "05.12 at 3:40PM",
        amount: "123.27$",
        status: "Active",
    },
    {
        id: 3,
        imageSrc: mastercardImageSrc,
        withdraw: "by Mastercard, USD",
        transactionNumber: "23561",
        date: "24.11 at 4:20AM",
        amount: "80.00$",
        status: "Performed",
    },
    {
        id: 4,
        imageSrc: mastercardImageSrc,
        withdraw: "by SticPay, USD",
        transactionNumber: "23.05$",
        date: "02.01 at 12:34PM",
        amount: "23.05$",
        status: "Processing",
    },
];

export const RecentTransactions = () => {
    const [displayCount, setDisplayCount] = useState(3);
    const [loading, setLoading] = useState(false);
    const [filterReversed, setFilterReversed] = useState(false);

    const handleShowMore = () => {
        setLoading(true);

        setTimeout(() => {
            setDisplayCount((prevCount) => prevCount + 3);
            setLoading(false);
        }, 1000);
    };

    const handleFilter = () => {
        setFilterReversed((prevState) => !prevState);
    };

    const displayedTransactions = (
        filterReversed ? [...mockTransactions].reverse() : mockTransactions
    ).slice(0, displayCount);

    return (
        <section className="section transactions">
            <div className="section__title-wrapper">
                <h2 className="section__title title-h2">Last Transactions</h2>
                <button onClick={handleFilter} className="transactions__filter">
                    <FilterIcon />
                </button>
            </div>
            <div className="transactions__wrapper">
                <ul className="transactions__list">
                    {displayedTransactions.map((transaction) => (
                        <li
                            key={transaction.id}
                            className="transactions__listitem"
                        >
                            <TransactionItem
                                imageSrc={transaction.imageSrc}
                                title={transaction.withdraw}
                                subtitle="Withdraw"
                            />
                            <TransactionItem
                                title={transaction.transactionNumber}
                                subtitle="Transaction Number"
                            />
                            <TransactionItem
                                title={transaction.date}
                                subtitle="Payment Date"
                            />
                            <TransactionItem
                                title={transaction.amount}
                                subtitle="Amount Payed"
                            />
                            <TransactionItem
                                title={transaction.status}
                                subtitle="Operation Status"
                                status={transaction.status}
                            />
                        </li>
                    ))}
                </ul>
                {loading && <p>Loading...</p>}
            </div>

            {displayCount < mockTransactions.length && (
                <div className="transactions__more">
                    <Button onClick={handleShowMore}>Show More</Button>
                </div>
            )}
        </section>
    );
};
