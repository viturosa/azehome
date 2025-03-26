import { createContext, useEffect, useState } from 'react'
 import {
 	createUserDocumentFromAuth,
 	onAuthStateChangeListener
 } from '../utils/firebase'

 export const UserContext = createContext({
 	currentUser: null,
 	setCurrentUser: () => {}
 })

 export const UserProvider = ({ children }) => {
 	const [currentUser, setCurrentUser] = useState(null)

 	useEffect(() => {
 		const unsubcribe = onAuthStateChangeListener((user) => {
 			if (user) {
 				createUserDocumentFromAuth(user)
 			}

 			setCurrentUser(user)
 		})

 		return unsubcribe
 	}, [])

 	const value = { currentUser, setCurrentUser }
 	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
 }
