import React, { useState, useRef } from 'react';
import './App.css';

function App() {
	const inputRef = useRef(null); // Reference for input field
	const resultRef = useRef(null); // Reference for result display
	const [result, setResult] = useState(0); // State to store the result

	// Addition function
	const add = () => {
		const value = parseFloat(inputRef.current.value);
		if (!isNaN(value)) setResult(result + value);
	};

	// Subtraction function
	const subtract = () => {
		const value = parseFloat(inputRef.current.value);
		if (!isNaN(value)) setResult(result - value);
	};

	// Multiplication function
	const multiply = () => {
		const value = parseFloat(inputRef.current.value);
		if (!isNaN(value)) setResult(result * value);
	};

	// Division function
	const divide = () => {
		const value = parseFloat(inputRef.current.value);
		if (!isNaN(value)) {
			if (value === 0) {
				alert('Cannot divide by zero');
			} else {
				setResult(result / value);
			}
		}
	};

	// Reset input field
	const resetInput = () => {
		inputRef.current.value = '';
	};

	// Reset result to 0
	const resetResult = () => {
		setResult(0);
	};

	return (
		<div className="App">
			<h1>Simple Calculator</h1>
			<input
				ref={inputRef}
				type="number"
				placeholder="Enter a number"
			/>
			<div>
				<button onClick={add}>Add</button>
				<button onClick={subtract}>Subtract</button>
				<button onClick={multiply}>Multiply</button>
				<button onClick={divide}>Divide</button>
			</div>
			<div>
				<button onClick={resetInput}>Reset Input</button>
				<button onClick={resetResult}>Reset Result</button>
			</div>
			<h2 ref={resultRef}>Result: {result}</h2>
		</div>
	);
}

export default App;
