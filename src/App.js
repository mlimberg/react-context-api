import React, { useState, useEffect, useReducer } from 'react';

import UserContext from './context/UserContext';
import LoadingContext from './context/LoadingContext';
import FavoritesDispatch from './context/FavoritesDispatch';
import Profile from './components/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import userData from './data/userData';

import './components/App.css';

export default function App() {
    // const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [user, dispatch] = useReducer(userReducer, null)
    let existing = null;

    function userReducer(state, action) {
        switch (action.type) {
            case 'SET_USER':
                return action.user;
            case 'ADD_FAVE':
                const addFave = [...state.favorites, action.item]
                return { ...state , favorites: addFave }
            case 'REMOVE_FAVE':
                const removeFave = state.favorites.filter(fave => fave.id !== action.id)
                return { ...state, favorites: removeFave }
            default:
                return state;
        }
    }

    useEffect(() => {

        if (!user) {
            checkForSavedUser()
        }

        if (user) updateStorage(user)
    }, [user, existing]) // this tells the effect not to run if a prop in the array is the same between re-renders. otherwise you get an infinite loop as setUser will re-render, then run the effect again infinitely

    function updateStorage(user) {
        localStorage.setItem(user.username, JSON.stringify(user))
    }

    function checkForSavedUser() {
        const key = JSON.parse(localStorage.getItem('fakeUser'))
        const userFound = key ? userData[key] : null
    
        if (userFound) {
            existing = localStorage.getItem(userFound.username)
        }
    
        if (existing) {
            // setUser(JSON.parse(existing))
            dispatch({ type: 'SET_USER', user: JSON.parse(existing) });
        } else {
           // setUser(user)
           dispatch({ type: 'SET_USER', user: userFound })
       }
    }

    function signIn(username, key) {
        setLoading(true)
        const user = userData[key]
        existing = localStorage.getItem(user.username)

        setTimeout(() => {
            setLoading(false)

            if (existing) {
                // setUser(existing)
                dispatch({ type: 'SET_USER', user: existing })
            } else if (user) {
                localStorage.setItem('fakeUser', JSON.stringify(key))
                localStorage.setItem(user.username, JSON.stringify(user))
                // setUser(user)
                dispatch({ type: 'SET_USER', user })
                setError(null)
            } else {
                setError('User not found')
            }

        }, 2000)
    }

    function signOut() {
        localStorage.removeItem('fakeUser')
        localStorage.removeItem(user.username)
        // setUser(null)
        dispatch({ type: 'SET_USER', user: null })
    }

    function saveUpdates(updates) {
        const newUser = { ...user, ...updates }
        setLoading(true)

        return new Promise((resolve) => {
            setTimeout(() => {
                localStorage.setItem(newUser.username, JSON.stringify(newUser))
                setLoading(false)
                // setUser(newUser)
                dispatch({ type: 'SET_USER', user: newUser });

                resolve(true)
            }, 1000)
        })
    }

    return (
        <div className="App">
            <UserContext.Provider value={user}>
                <LoadingContext.Provider value={loading}>
                    <FavoritesDispatch.Provider value={dispatch}>
                        <Header signOut={signOut} />
                        {user ? 
                            <Profile 
                                saveUpdates={saveUpdates}
                            /> 
                        :
                            <SignIn 
                                signIn={signIn}
                                error={error}
                            />
                        }
                        <Footer />
                    </ FavoritesDispatch.Provider>
                </ LoadingContext.Provider>
            </ UserContext.Provider>
        </div>
    );
}