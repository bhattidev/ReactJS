import { createContext, useContext, useState } from 'react';

// Creating a context for alert notifications
const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
	const [alertState, setAlertState] = useState({
		isOpen: false,
		type: 'success', // "success" or "error"
		message: '', // The message to be displayed
	});

	// Providing functions to open and close the alert
	return (
		<AlertContext.Provider
			value={{
				...alertState,
				onOpen: (type, message) =>
					setAlertState({ isOpen: true, type, message }),
				onClose: () => setAlertState({ isOpen: false, type: '', message: '' }),
			}}>
			{children}
		</AlertContext.Provider>
	);
};

// Custom hook to access the alert context
export const useAlertContext = () => useContext(AlertContext);
