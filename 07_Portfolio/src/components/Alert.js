import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogOverlay,
	AlertDialogCloseButton,
	Icon,
} from '@chakra-ui/react';
import { useAlertContext } from '../context/alertContext';
import { useRef } from 'react';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

function Alert() {
	const { isOpen, type, message, onClose } = useAlertContext();
	const cancelRef = useRef();
	const isSuccess = type === 'success';

	return (
		<AlertDialog
			isOpen={isOpen}
			leastDestructiveRef={cancelRef}
			onClose={onClose}
			motionPreset="slideInBottom"
			closeOnOverlayClick
			isCentered>
			<AlertDialogOverlay>
				<AlertDialogContent
					py={4}
					backgroundColor={isSuccess ? '#4CAF50' : '#E53935'}
					color="white"
					borderRadius="lg">
					{/* Close Button */}
					<AlertDialogCloseButton
						color="white"
						onClick={onClose}
					/>

					<AlertDialogHeader
						fontSize="lg"
						fontWeight="bold"
						display="flex"
						alignItems="center">
						<Icon
							as={isSuccess ? FaCheckCircle : FaExclamationTriangle}
							boxSize={5}
							mr={2}
						/>
						{isSuccess ? 'Success' : 'Error'}
					</AlertDialogHeader>

					<AlertDialogBody>{message}</AlertDialogBody>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
}

export default Alert;
