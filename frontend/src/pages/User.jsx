import React from 'react';
import UserName from '../components/UserName';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import Login from "./Login";

export default function User() {
    const isLogged = useSelector((state) => state.loggedReducer);

    return (
        isLogged
            ? (
        <main className='main bg-dark'>
            <UserName />
            <h2 className='sr-only'>Accounts</h2>
            <section className='account'>
                <div className='account-content-wrapper'>
                    <h3 className='account-title'>Argent Bank Checking (x8349)</h3>
                    <p className='account-amount'>$2,082.79</p>
                    <p className='account-amount-description'>Avialable Balance</p>
                </div>
                <div className='account-content-wrapper cta'>
                    <button className='transaction-button'>View transactions</button>
                </div>
            </section>
            <section className='account'>
                <div className='account-content-wrapper'>
                    <h3 className='account-title'>Argent Bank Saving (x6712)</h3>
                    <p className='account-amount'>$10,928.42</p>
                    <p className='account-amount-description'>Avialable Balance</p>
                </div>
                <div className='account-content-wrapper cta'>
                    <button className='transaction-button'>View transactions</button>
                </div>
            </section>
            <section className='account'>
                <div className='account-content-wrapper'>
                    <h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
                    <p className='account-amount'>$184.30</p>
                    <p className='account-amount-description'>Current Balance</p>
                </div>
                <div className='account-content-wrapper cta'>
                    <button className='transaction-button'>View transactions</button>
                </div>
            </section>
        </main>
            )
            : (<Routes><Route path='/*' element={<Login />} /></Routes>)
    )
}