import { useCallback, useEffect, useState } from "react";

import {
    Header,
    Payment,
    PopupForm,
    RecentTransactions,
    SideMenu,
} from "~/components";

import "~/scss/index.scss";

const App = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);

    useEffect(() => {
        if (selectedPayment) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedPayment]);

    const toggleMenu = useCallback(() => {
        setMenuOpen((prev) => !prev);
    }, []);

    const selectPayment = useCallback((payment) => {
        setSelectedPayment(payment);
    }, []);

    const closePopup = useCallback(() => {
        setSelectedPayment(null);
    }, []);

    return (
        <div className="App">
            <Header toggleMenu={toggleMenu} />
            <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <main>
                <div className="container">
                    <Payment selectPayment={selectPayment} />
                    <RecentTransactions />
                </div>
            </main>
            {selectedPayment && (
                <PopupForm
                    paymentMethod={selectedPayment}
                    closePopup={closePopup}
                />
            )}
        </div>
    );
};

export default App;
