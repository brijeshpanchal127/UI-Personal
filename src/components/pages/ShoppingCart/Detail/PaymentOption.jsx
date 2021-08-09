import React, { useState } from 'react';
import './PaymentOption.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CreditCard from '../Paymentcards/CreditCard';
import DebitCard from '../Paymentcards/DebitCard';
import GiftCard from '../Paymentcards/GiftCard';
import ApplePay from '../Paymentcards/ApplePay';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#72bb53',
        color: 'white',
        marginTop: '1.5rem',
        fontSize: '15px',
        border: 'none',
        height: '40px',
        padding: '10px 10px',
        '&:hover': {
            cursor: "pointer",
            backgroundColor: '#4c7a34'
        },
        width: '100%',
    },
    button_paymentbox: {
        marginTop: '20px',

    },
    button_payment: {
        backgroundColor: '#E9EDE5',
        color: 'gray ',
        padding: '8px',
        marginTop: '8px',
        fontSize: '20px',

        '&:hover': {
            cursor: "pointer",
            backgroundColor: '#4c7a34',
            color: 'gray',
            textDecoration: 'none'
        },
    }
}));

const PaymentOption = (props) => {
    const classes = useStyles();
    const [creditcard, setCreditcard] = useState(false)
    const [debitcard, setDebitcard] = useState(false)
    const [giftcard, setGiftcard] = useState(false)
    const [applepay, setApplepay] = useState(false)
    // const preventDefault = (event) => event.preventDefault();

    
    const creditcardHandler = () => {
        setCreditcard(!creditcard)
        
    }

    const debitcardHandler = () => {
        setDebitcard({ debitcard: true })
    }

    const giftcardHandler = () => {
        setGiftcard({ giftcard: true })
    }

    const applepayHandler = () => {
        setApplepay({ applepay: true })
    }

    return (
        <div className="paymentoption">
            <div className={classes.button_paymentbox}>
                <div className={classes.button_payment}>
                    <Button onClick={creditcardHandler}>
                        CREDIT CARD
                    </Button>

                </div>
                <div>
                    
                {creditcard ? <CreditCard  /> : ''}
                </div>

                <div className={classes.button_payment}>
                    <Button onClick={debitcardHandler}>
                        DEBIT CARD
                    </Button>
                    {debitcard ? <DebitCard /> : ''}
                </div>

                <div className={classes.button_payment}>
                    <Button onClick={giftcardHandler}>
                        GIFT CARD
                    </Button>
                    {giftcard ? <GiftCard /> : ''}
                </div>

                <div className={classes.button_payment}>
                    <Button onClick={applepayHandler}>
                        APPLE PAY
                    </Button>
                    {applepay ? <ApplePay /> : ''}
                </div>
                <div className={classes.button_payment}>
                    <Button onClick={() => { console.log('clicked') }}>
                        CASH
                    </Button>
                </div>

                <div className={classes.button_payment}>
                    <Button onClick={() => { console.log('clicked') }}>
                        US CASH
                    </Button>
                </div>

                <div className={classes.button_payment}>
                    <Button onClick={() => { console.log('clicked') }}>
                        RECEIPT OPTIONS
                    </Button>
                </div>

                <button className={classes.button}>FINISH</button>
            </div>
        </div>
    )
}

export default PaymentOption
