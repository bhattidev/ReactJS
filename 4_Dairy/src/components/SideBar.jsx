import React from 'react';

function SideBar({ onButtonClick }) {
	const buttons = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5'];
	return (
		<div className="flex flex-col gap-5 border p-10">
			{buttons.map((btn, index) => (
				<button
					key={index}
					onClick={() => onButtonClick(btn)}
					className="py-5 px-20 rounded bg-green-600">
					{btn}
				</button>
			))}
		</div>
	);
}

export default SideBar;
