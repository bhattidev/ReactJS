/** @format */

const CertificateSlider = () => {
	return (
		<div className=' bg-gray-100  flex justify-center items-center overflow-hidden'>
			<div
				className={`my-10 p-5 flex justify-around gap-5 items-center flex-wrap relative`}>
				<div className=' absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-white opacity-40'></div>

				<p className='text-center p-5 font-semibold'>
					TRUSTED BY LEADING BRANDS AND STARTUPS
				</p>

				<svg
					xmlns='http://www.w3.org/2000/svg'
					height={32}
					viewBox='0 0 118 32'
					width={118}>
					<g fill='currentColor'>
						<path d='M52.44 15.35v-3.31h-2.85V8.42h-3.75v3.6h-1.57v3.32h1.56v3.47l.01 1.76c.03 1.59.61 3.29 1.95 4.22 1.18.84 2.64 1 4.05.98a9.14 9.14 0 0 1-2.13-4.38v-.04l-.01-.05c-.04-.3-.09-.8-.08-1.33l-.02-.34v-4.29h2.84Zm-8.87-5.89V6.14c-1.86-.3-4-.18-5.48 1.1-1.33 1.2-1.6 3.1-1.55 4.8h-1.63v3.31h1.65v9.95h3.8v-9.96h2.55v-3.3h-2.57c.04-.75-.05-1.65.57-2.2.74-.62 1.77-.42 2.65-.38ZM29.72 25.3h3.74c-.03-2.84.02-5.68-.03-8.52-.03-1.67-.66-3.52-2.25-4.3-2.27-1.14-4.94-.88-7.36-.5v3.63c1.55-.34 3.26-.7 4.8-.11.72.24.99 1 1.1 1.69-1.08-.14-2.18-.4-3.27-.18a4.6 4.6 0 0 0-3.3 1.9c-1.18 1.77-.84 4.43.9 5.7 1.64 1.26 4.02 1.12 5.69 0l-.02.69Zm-.15-2.87c-.97.3-2.15.63-3.04-.05-.8-.57-.7-1.95.17-2.4.9-.47 1.95-.3 2.9-.11.08.85.08 1.7-.03 2.56M10.2 7.3c1.52.02 3.04.01 4.56.01-2.23 3-4.4 6.04-6.65 9.02 2 2.99 3.96 6 5.98 8.97H9.35l-5.27-8v8H0V7.32l4.08-.01v8.49c2.03-2.84 4.08-5.66 6.12-8.5Zm4.83 4.78 3.85-.01c0 .84 0 1.7-.02 2.54a4.52 4.52 0 0 1 3.46-2.56c0 1.26.02 2.51-.02 3.77-1.63.2-3.32 1.42-3.38 3.18-.04 2.1 0 4.2 0 6.3h-3.89V12.08Zm68.3 10.53c-.54.22-.64.32-1.29.54a3.3 3.3 0 0 1-2.04 0c-2.03-.86-.75-3.97-.75-3.97 8.37-2.04 7.2-6.55 4.94-6.76-1.4 0-6.44.21-8.8 6-.32.87-2.58 6.98 2.47 7.41 1.07 0 2.25-.1 3.32-.64a7.23 7.23 0 0 0 2.37-2.04c.53-.97-.22-.54-.22-.54Zm-1.18-8.58c.64.21-.97 3.43-.97 3.43-.64.22-1.28.43-1.71.43.21-.43 1.4-4.5 2.68-3.86Zm20.71 9.77c-.1-.11-.32-.11-.43-.22-.64-.43-.1-1.61 0-2.26l1.93-6.86c.11-.43.86-2.69-2.14-2.26-2.58.43-4.4 2.04-4.4 2.04.21-.64.43-1.6 0-1.82-.54-.22-3.65.75-4.4 1.4-.22 0-.54.31-.22.64.33.43.43.75.22 1.5-.43 1.29-1.72 5.8-2.04 6.65-.32.86-.75 2.47 0 3 .54.44 2.79-.53 3.11-.74.32-.11.65-.33.75-.43.43-.43-.21-.65.43-2.9 0-.1.75-2.36 1.29-4.3a3.64 3.64 0 0 1 2.47-2.46c.86-.1.64.64.53 1.18-.75 2.36-1.6 5.9-1.93 6.76-.32.86-.86 2.58 0 2.9.75.53 4.19-.97 4.51-1.18.64-.43.64-.65.32-.65Z' />
						<path d='M89.77 23.8c-.21-.11-.32-.11-.43-.22-.64-.43-.21-1.61 0-2.26l2.04-6.86c.1-.75.54-1.72 0-2.04-.64-.22-3.76.75-4.5 1.4-.12 0-.44.31-.12.64.33.43.33.75.11 1.5-.32 1.29-1.82 5.9-2.14 6.76-.33.86-.76 2.58.21 2.9.75.53 3.97-.86 4.4-1.18.75-.33.75-.65.43-.65Zm-.64-13c.21.44 2.14-.42 3.1-.96.12-.1.54-.43.65-.75.22-.75.32-1.07.43-1.6.1-.22.1-.55-.21-.65-.43-.11-3 .21-3.65 1.28-.22.43-.97 2.47-.32 2.69Zm28.76 7.52c-.33-1.18-2.26-1.5-3-.86-.44.43-.65 1.29-.55 1.5 1.83-.53 2.15 1.08 1.83 1.72-.64.97-.86 1.29-1.72 1.29h-5.69c-.1-.1-.21-.22 0-.43.33-.43 5.9-8.05 6.12-8.37.1-.22.43-.75-.32-.75h-6.23c-.64 0-.96.21-1.5.75-.43.54-.96 2.14-1.28 3.22 0 0 0 .43.64-.1.1-.12.32-.55.64-.55h3.76c1.18 0-5.05 5.9-6.98 9.02-.32.54.22.54.54.54h8.16c2.03 0 1.71.32 2.79-1.19 0 0 3.32-4.29 2.79-5.79Zm-44.86 3.65 2.25-8.7c1.5-5.25 2.36-5.47 2.9-6h-3.54c-1.29 0-2.26 1.82-2.47 3l-1.5 5.47h-3.22l2.14-7.72c.11-.32.11-.75-.53-.75-.11 0-6.87-.22-9.02.53-.96.32-2.36 1.18-2.79 2.47-.32.75-.75 2.15.22 4.72.1.32.32.54.43.65.32.21 3.1-.22 3-.22.22 0 .32-.1.1-.53-.2-.54-.85-1.5-.96-2.47-.43-3.76 2.26-4.3 2.69-4.4a5.06 5.06 0 0 1 1.82 0c.22 0 .75.1.86.32.21.43-.1 1.18-.32 2.04-.22.64-2.04 7.3-2.58 9.12-.32 1.4-1.72 4.4-3.11 4.83-.32.1-.75.1-1.18 0-.43-.1-.86-.32-1.18-.54-.86-.86-1.4-2.57-1.5-3.86-.11-1.61.21-2.79-.11-2.79-.56 0-2.43.74-3.19 1.28-.31.23-.33.27-.33.27a.23.23 0 0 0-.04.04c-.2.34-.18 1.54-.09 2.27.32 1.61 1.18 3.44 2.47 4.3 3.43 2.36 9.44-1.94 10.09-2.37a6.22 6.22 0 0 0 1.82-2.9l.86-2.89h3.22l-1.61 6c-.32.97-.54 2.58.32 2.48 3.22 0 4.5-1.18 4.62-1.29.1-.1.1-.32 0-.43a1.6 1.6 0 0 1-.54-1.93Z' />
					</g>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					height={32}
					viewBox='0 0 122 32'
					width={122}>
					<path
						d='M47.6906 5.92841H24.6505V1.61684H47.6906V5.92841ZM49.3074 0H23.0337V7.54527H49.3074V0Z'
						fill='black'
					/>
					<path
						d='M24.6842 20.0758H23V12.4969H24.6842V15.5284H27.5474V12.4969H29.2316V20.0758H27.5474V16.8758H24.6842V20.0758Z'
						fill='black'
					/>
					<path
						d='M31.7579 16.7074H33.779C33.779 16.2021 33.4421 15.6969 32.9369 15.6969C32.2632 15.6969 31.9263 15.8653 31.7579 16.7074ZM33.1053 20.0758C31.4211 20.0758 30.2421 19.0653 30.2421 17.3811C30.2421 15.6969 31.4211 14.5179 32.7684 14.5179C34.4527 14.5179 35.1263 15.5284 35.1263 17.2126V17.8863H31.7579C31.9263 18.7284 32.6 18.8969 33.2737 18.8969C33.779 18.8969 34.2842 18.7284 34.7895 18.3916V19.5705C34.4527 19.9074 33.779 20.0758 33.1053 20.0758Z'
						fill='black'
					/>
					<path
						d='M39.5052 16.9095L38.6631 20.1095H37.1473L35.4631 14.72H36.9789L37.821 17.92L38.6631 14.72H40.0105L40.8526 17.92L41.6947 14.72H43.2105L41.5263 20.1095H40.0105L39.5052 16.9095Z'
						fill='black'
					/>
					<path
						d='M46.1411 20.1769C44.7937 20.1769 44.2885 19.6716 44.2885 18.4926V12.5979H45.8042V18.4926C45.8042 18.8295 45.9727 18.9979 46.3095 18.9979C46.4779 18.9979 46.6463 18.9979 46.6463 18.9979V20.3453C46.4779 20.0084 46.3095 20.1769 46.1411 20.1769Z'
						fill='black'
					/>
					<path
						d='M48.7347 16.7074H50.7558C50.7558 16.2021 50.419 15.6969 49.9137 15.6969C49.24 15.6969 48.9032 15.8653 48.7347 16.7074ZM49.9137 20.0758C48.2295 20.0758 47.0505 19.0653 47.0505 17.3811C47.0505 15.6969 48.2295 14.5179 49.5769 14.5179C51.2611 14.5179 51.9347 15.5284 51.9347 17.2126V17.8863H48.5663C48.7347 18.7284 49.4084 18.8969 50.0821 18.8969C50.5874 18.8969 51.0926 18.7284 51.5979 18.3916V19.5705C51.2611 19.9074 50.7558 20.0758 49.9137 20.0758Z'
						fill='black'
					/>
					<path
						d='M58.6716 14.6526H59.8506V16H58.6716V18.1895C58.6716 18.6948 58.8401 18.8632 59.3453 18.8632C59.5137 18.8632 59.6822 18.8632 59.8506 18.8632V20.0421C59.6822 20.0421 59.3453 20.2105 58.8401 20.2105C57.4927 20.2105 56.9874 19.5369 56.9874 18.1895V16H54.9664V18.1895C54.9664 18.6948 55.1348 18.8632 55.6401 18.8632C55.8085 18.8632 55.9769 18.8632 56.1453 18.8632V20.0421C55.9769 20.0421 55.6401 20.2105 55.1348 20.2105C53.7874 20.2105 53.2822 19.5369 53.2822 18.1895V16H52.4401V14.6526H53.2822V13.1369H54.798V14.6526H56.819V13.1369H58.3348L58.6716 14.6526Z'
						fill='black'
					/>
					<path
						d='M65.1726 16.1347C66.0147 16.1347 66.3516 15.6295 66.3516 14.9558C66.3516 14.2821 66.0147 13.7768 65.1726 13.7768H64.1621V16.1347H65.1726ZM68.0358 14.9558C68.0358 16.64 66.8569 17.4821 65.3411 17.4821H64.1621V20.0084H62.4779V12.4295H65.3411C67.0253 12.4295 68.0358 13.2716 68.0358 14.9558Z'
						fill='black'
					/>
					<path
						d='M71.6064 18.2568V17.7516C71.438 17.5832 71.1011 17.5832 70.7643 17.5832C70.259 17.5832 69.9222 17.7516 69.9222 18.2568C69.9222 18.7621 70.259 18.9305 70.7643 18.9305C71.1011 18.9305 71.438 18.7621 71.6064 18.2568ZM71.6064 19.4358C71.2695 19.941 70.7643 20.1095 70.259 20.1095C69.2485 20.1095 68.4064 19.4358 68.4064 18.2568C68.4064 17.2463 69.2485 16.5726 70.4274 16.5726C70.7643 16.5726 71.2695 16.5726 71.6064 16.741V16.5726C71.6064 16.0674 71.2695 15.7305 70.4274 15.7305C69.9222 15.7305 69.4169 15.8989 68.9116 16.0674V14.8884C69.2485 14.72 70.0906 14.3832 70.7643 14.3832C72.4485 14.3832 73.2906 15.2253 73.2906 16.5726V19.941H71.7748V19.4358'
						fill='black'
					/>
					<path
						d='M74.0652 17.381C74.0652 15.6968 75.2442 14.5179 76.9284 14.5179C77.4337 14.5179 78.1074 14.6863 78.4442 14.8547V16.2021C78.1074 15.8653 77.6021 15.6968 77.2652 15.6968C76.4231 15.6968 75.9179 16.2021 75.9179 17.2126C75.9179 18.0547 76.5916 18.7284 77.2652 18.7284C77.7705 18.7284 78.1074 18.56 78.4442 18.2232V19.5705C78.1074 19.9074 77.4337 19.9074 76.9284 19.9074C75.2442 20.0758 74.0652 19.0653 74.0652 17.381Z'
						fill='black'
					/>
					<path
						d='M80.9368 17.5158V19.8737H79.421V12.4632H80.9368V16.8421L82.621 14.6526H84.4737L82.621 17.0105L84.4737 19.8737H82.621L80.9368 17.5158Z'
						fill='black'
					/>
					<path
						d='M87.9095 18.2568V17.7516C87.7411 17.5832 87.4043 17.5832 87.0674 17.5832C86.5622 17.5832 86.2253 17.7516 86.2253 18.2568C86.2253 18.7621 86.5622 18.9305 87.0674 18.9305C87.4043 18.9305 87.7411 18.7621 87.9095 18.2568ZM87.9095 19.4358C87.5727 19.941 87.0674 20.1095 86.5622 20.1095C85.5516 20.1095 84.7095 19.4358 84.7095 18.2568C84.7095 17.2463 85.5516 16.5726 86.7306 16.5726C87.0674 16.5726 87.5727 16.5726 87.9095 16.741V16.5726C87.9095 16.0674 87.5727 15.7305 86.7306 15.7305C86.2253 15.7305 85.7201 15.8989 85.2148 16.0674V14.8884C85.5516 14.72 86.3937 14.3832 87.0674 14.3832C88.7516 14.3832 89.5937 15.2253 89.5937 16.5726V19.941H88.078V19.4358'
						fill='black'
					/>
					<path
						d='M92.1874 15.4947C92.5243 14.8211 92.8611 14.4842 93.5348 14.4842C93.7032 14.4842 94.0401 14.4842 94.0401 14.6526V16.1684C93.8716 16.1684 93.7032 16 93.3664 16C92.8611 16 92.5243 16.3368 92.3558 16.8421V19.8737H90.6716V14.4842H92.1874V15.4947Z'
						fill='black'
					/>
					<path
						d='M98.2506 18.1895V16.5053C97.9137 16.1684 97.5769 16 97.24 16C96.5663 16 96.0611 16.5053 96.0611 17.3474C96.0611 18.1895 96.5663 18.6947 97.24 18.6947C97.5769 18.6947 97.9137 18.5263 98.2506 18.1895ZM98.2506 19.3684C97.9137 19.8737 97.4084 20.0421 96.7348 20.0421C95.3874 20.0421 94.5453 18.8632 94.5453 17.179C94.5453 15.6632 95.3874 14.3158 96.7348 14.3158C97.4084 14.3158 97.9137 14.4842 98.2506 14.9895V12.2947H99.7663V19.8737H98.2506V19.3684Z'
						fill='black'
					/>
					<path
						d='M23.1348 22.4673H27.8506V23.3095H24.3137V25.6674H27.5137V26.5095H24.3137V29.0358H27.8506V30.0463H23.1348V22.4673Z'
						fill='black'
					/>
					<path
						d='M31.5895 24.6232C32.7685 24.6232 33.4421 25.4653 33.4421 26.6442V30.0126H32.4316V26.6442C32.4316 25.9705 32.0948 25.4653 31.2527 25.4653C30.579 25.4653 30.0737 25.8021 29.9053 26.4758V30.0126H28.8948V24.6232H29.9053V25.4653C30.2421 24.96 30.7474 24.6232 31.5895 24.6232Z'
						fill='black'
					/>
					<path
						d='M36.1705 24.7242H37.5179V25.5663H36.1705V28.4295C36.1705 29.1032 36.5073 29.2716 37.0126 29.2716C37.181 29.2716 37.3495 29.2716 37.5179 29.2716V30.1137C37.3495 30.1137 37.181 30.2821 36.8442 30.2821C35.6652 30.2821 35.16 29.7769 35.16 28.5979V25.5663H34.3179V24.7242H35.16V23.3769H36.1705V24.7242Z'
						fill='black'
					/>
					<path
						d='M39.101 26.8463H41.7958C41.7958 26.0042 41.2905 25.4989 40.6168 25.4989C39.7747 25.4989 39.2695 26.0042 39.101 26.8463ZM40.7852 30.0463C39.2695 30.0463 38.0905 29.0358 38.0905 27.3516C38.0905 25.6674 39.101 24.4884 40.4484 24.4884C41.9642 24.4884 42.6379 25.4989 42.6379 27.0147V27.52H38.9326C39.101 28.5305 39.7747 29.0358 40.6168 29.0358C41.2905 29.0358 41.6274 28.8673 42.1326 28.5305V29.3726C41.9642 30.0463 41.4589 30.0463 40.7852 30.0463Z'
						fill='black'
					/>
					<path
						d='M44.9958 25.5663C45.1642 25.0611 45.6695 24.7242 46.3432 24.7242C46.5116 24.7242 46.8484 24.7242 46.8484 24.8927V25.9032C46.68 25.9032 46.5116 25.7348 46.1748 25.7348C45.6695 25.7348 45.1642 26.0716 44.9958 26.7453V30.2821H43.9853V24.7242H44.9958V25.5663Z'
						fill='black'
					/>
					<path
						d='M50.0148 29.1368C51.0253 29.1368 51.5305 28.2947 51.5305 27.2842C51.5305 26.2737 51.0253 25.4316 50.0148 25.4316C49.5095 25.4316 49.0042 25.7684 48.6674 26.2737V28.2947C49.0042 28.9684 49.5095 29.1368 50.0148 29.1368ZM50.1832 24.5895C51.699 24.5895 52.5411 25.9369 52.5411 27.2842C52.5411 28.8 51.699 29.979 50.1832 29.979C49.5095 29.979 49.0042 29.6421 48.6674 29.3053V32H47.6569V24.5895H48.6674V25.2632C49.0042 24.9263 49.5095 24.5895 50.1832 24.5895Z'
						fill='black'
					/>
					<path
						d='M54.7305 25.5663C54.899 25.0611 55.4042 24.7242 56.0779 24.7242C56.2463 24.7242 56.5832 24.7242 56.5832 24.8927V25.9032C56.4147 25.9032 56.2463 25.7348 55.9095 25.7348C55.4042 25.7348 54.899 26.0716 54.7305 26.7453V30.2821H53.8884V24.7242H54.899V25.5663'
						fill='black'
					/>
					<path
						d='M58.1327 22.5684C58.4695 22.5684 58.8064 22.9052 58.8064 23.2421C58.8064 23.5789 58.4695 23.9158 58.1327 23.9158C57.7958 23.9158 57.459 23.5789 57.459 23.2421C57.459 22.9052 57.7958 22.5684 58.1327 22.5684Z'
						fill='black'
					/>
					<path
						d='M57.6611 30.0463H58.6042V24.7916H57.6611V30.0463Z'
						fill='black'
					/>
					<path
						d='M62.2421 26.8126C63.0843 26.9811 63.9264 27.3179 63.9264 28.3284C63.9264 29.339 63.0843 30.0126 61.9053 30.0126C61.2316 30.0126 60.5579 29.8442 60.0527 29.5074V28.4968C60.5579 28.8337 61.2316 29.1705 61.7369 29.1705C62.2421 29.1705 62.7474 29.0021 62.7474 28.4968C62.7474 27.9916 62.2421 27.9916 61.5685 27.6547C60.8948 27.4863 60.0527 27.1495 60.0527 26.1389C60.0527 25.1284 60.8948 24.4547 61.9053 24.4547C62.579 24.4547 63.0843 24.6232 63.5895 24.96V25.9705C63.0843 25.6337 62.579 25.4653 62.0737 25.4653C61.5685 25.4653 60.8948 25.6337 60.8948 26.1389C60.8948 26.4758 61.4 26.6442 62.2421 26.8126Z'
						fill='black'
					/>
					<path
						d='M65.6443 26.8463H68.339C68.339 26.0042 67.8337 25.4989 67.16 25.4989C66.3179 25.4989 65.8127 26.0042 65.6443 26.8463ZM67.3285 30.0463C65.8127 30.0463 64.6337 29.0358 64.6337 27.3516C64.6337 25.6674 65.6443 24.4884 66.9916 24.4884C68.5074 24.4884 69.1811 25.4989 69.1811 27.0147V27.52H65.4758C65.6443 28.5305 66.3179 29.0358 67.16 29.0358C67.8337 29.0358 68.1706 28.8673 68.6758 28.5305V29.3726C68.5074 30.0463 67.8337 30.0463 67.3285 30.0463Z'
						fill='black'
					/>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height={22}
					width={87}>
					<path
						d='M71.2 9.6c0 1-.3 1.8-1 2.4a3 3 0 0 1-2.1 1 3 3 0 0 1-2.2-1c-.6-.6-.9-1.4-.9-2.4s.3-1.7.9-2.4a3 3 0 0 1 2.2-1c.9 0 1.6.4 2.2 1 .5.7.9 1.4.9 2.4zm2.8-.4a6.1 6.1 0 0 0-3-4.7c-.9-.6-1.9-.8-3-.8-1.6 0-3 .5-4.1 1.7a5.8 5.8 0 0 0-1.7 4.3c0 1.7.6 3.2 1.9 4.4 1.1 1 2.4 1.5 3.9 1.5 1 0 2-.3 3-.8l.2-.1V16c0 1-.4 1.8-1 2.4a3 3 0 0 1-2.1 1 3 3 0 0 1-2.2-1l-1.9 2c1.2 1.1 2.5 1.6 4 1.6a6 6 0 0 0 5.2-3c.6-1 .8-2 .8-3V9.2zm10.1.5c0 1-.3 1.8-.9 2.4a3 3 0 0 1-2.2 1c-1 0-1.7-.4-2.2-1-.6-.6-1-1.4-1-2.4s.4-1.8 1-2.4a3.1 3.1 0 0 1 4.5 0c.5.6.8 1.4.8 2.4zm2-3a5.8 5.8 0 0 0-5.3-3c-1.5 0-3 .6-4 1.8A5.8 5.8 0 0 0 75 9.7c0 1.8.6 3.3 2 4.5 1.1 1 2.4 1.5 4 1.5 1 0 2-.2 3-.8.9-.5 1.6-1.3 2.1-2.2.6-1 .9-2 .9-3s-.3-2-.8-3zM47.8.2c-.8 0-1.5.7-1.5 1.6a1.5 1.5 0 1 0 3 0c0-1-.6-1.6-1.5-1.6zm13 6.3c-.5-.9-1-1.6-1.8-2.1s-1.7-.7-2.9-.7a5 5 0 0 0-3 .8c-.7.6-1.3 1.3-1.6 2.4-.2.5-.3 1.5-.4 2.8v5.7h3V9.7c0-1 0-1.7.2-2 .1-.5.4-.8.7-1 .3-.3.7-.4 1.2-.4s.9.1 1.2.4c.3.2.6.5.8 1l.1 2v5.7h3V9.7c-.1-1.5-.3-2.6-.6-3.2zm-19.3 6c-.3-.3-.6-.6-.7-1l-.2-2V0h-2.8v9.4c0 1.5.1 2.6.4 3.2.4 1 1 1.6 1.7 2.1.8.5 1.7.8 2.9.8H45v-2.7h-2.3a2 2 0 0 1-1.2-.4zm5 2.9h2.9v-11h-3v11zM32.6 12a3 3 0 0 1-2.2 1c-1 0-1.7-.4-2.2-1-.6-.6-1-1.4-1-2.4s.4-1.8 1-2.4a3 3 0 0 1 2.2-1c.9 0 1.6.4 2.2 1s.9 1.4.9 2.4-.3 1.8-.9 2.4zm3-5.4a6 6 0 0 0-9.2-1.5 5.7 5.7 0 0 0-2 4.5c0 1.6.6 3 1.8 4.2a5.8 5.8 0 0 0 4.2 1.8 6 6 0 0 0 6.1-6c-.1-1-.4-2-1-3zM8.2 12a3 3 0 0 1-2.3 1c-.8 0-1.6-.4-2.2-1-.6-.6-.8-1.4-.8-2.4s.2-1.8.8-2.4a3 3 0 0 1 2.2-1c1 0 1.7.4 2.3 1s.9 1.4.9 2.4-.3 1.8-.9 2.4zM12 0H9v4.5-.1a6 6 0 0 0-3-.8C4.4 3.6 3 4 2 5a5.8 5.8 0 0 0-2 4.5c0 1.6.6 3 1.8 4.2a5.8 5.8 0 0 0 4.1 1.8 6 6 0 0 0 6-5.6V0zm8.5 9.5-.1 2c-.2.5-.4.8-.8 1-.3.3-.7.4-1.2.4s-1-.1-1.2-.4a2 2 0 0 1-.8-1l-.2-2V3.8h-2.9v5.8c0 1.3.2 2.2.3 2.8.4 1 1 1.8 1.7 2.4.8.5 1.8.8 3 .8s2.1-.2 2.9-.7 1.3-1.2 1.7-2c.3-.7.4-1.8.4-3.3V3.8h-2.8v5.7z'
						fill='currentColor'
					/>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					height={48}
					viewBox='0 0 164 48'
					width={164}>
					<path
						d='M103.539 32.6371C105.145 32.6371 106.752 32.0192 107.987 30.907L110.212 33.2549C108.482 34.985 106.134 35.9735 103.662 35.85C98.3484 35.85 94.7648 32.2663 94.7648 27.447C94.6412 22.8747 98.2248 19.1675 102.797 19.0439C102.921 19.0439 103.044 19.0439 103.168 19.0439C108.482 19.0439 111.571 23.1219 111.324 28.8063H98.5956C98.9663 31.2777 101.191 32.8842 103.539 32.6371ZM107.369 26.0876C107.246 23.8633 105.392 22.1333 103.168 22.2569C100.82 22.1333 98.8427 23.7397 98.5956 26.0876H107.369Z'
						fill='#B5B9C1'
					/>
					<path
						d='M20 32.5133L29.7623 22.6274H20.2471V19.5381H34.211V22.751L24.4487 32.6369H34.3346V35.7262H20V32.5133Z'
						fill='#B5B9C1'
					/>
					<path
						d='M45.9473 32.6366C47.5538 32.6366 49.1603 32.0187 50.396 30.9065L52.6203 33.2544C50.8903 35.1081 48.4188 36.0966 45.9473 35.9731C40.5101 35.9731 37.05 32.3894 37.05 27.5701C36.9265 22.9978 40.5101 19.2906 45.0823 19.167C45.2059 19.167 45.3295 19.167 45.453 19.167C50.7667 19.167 53.8561 23.245 53.4853 28.9294H41.0044C41.3751 31.2773 43.5994 32.8837 45.9473 32.6366ZM49.7781 26.0872C49.6546 23.8628 47.801 22.1328 45.5766 22.2564C43.3523 22.1328 41.3751 23.7393 41.0044 26.0872H49.7781Z'
						fill='#B5B9C1'
					/>
					<path
						d='M74.6188 27.5703C74.3716 23.1216 77.8317 19.2909 82.2803 19.1673C82.4039 19.1673 82.5275 19.1673 82.6511 19.1673C84.7518 19.1673 86.729 20.0323 87.9647 21.6388V12H91.4248V35.6026H87.9647V33.3783C86.6054 34.9847 84.6282 35.9733 82.5275 35.9733C78.0788 35.9733 74.3716 32.2661 74.4952 27.8174C74.6188 27.6939 74.6188 27.5703 74.6188 27.5703ZM88.2119 27.5703C88.2119 24.7281 85.864 22.5038 83.1454 22.5038C80.3032 22.5038 78.0788 24.8517 78.0788 27.5703C78.0788 30.4125 80.4267 32.6368 83.1454 32.6368C85.9876 32.6368 88.2119 30.4125 88.2119 27.5703Z'
						fill='#B5B9C1'
					/>
					<path
						d='M113.422 32.2659L116.511 30.5359C117.376 32.0188 118.983 32.8838 120.589 32.8838C122.566 32.8838 123.555 31.8952 123.555 30.783C123.555 29.6709 121.701 29.1766 119.601 28.8059C116.882 28.188 114.04 27.323 114.04 23.9865C114.04 21.3914 116.511 19.0435 120.342 19.0435C122.937 18.92 125.409 20.0321 126.891 22.1329L124.049 23.8629C123.184 22.6272 121.825 22.0093 120.466 22.0093C118.612 22.0093 117.747 22.8743 117.747 23.9865C117.747 25.0986 119.23 25.4694 121.578 25.9637C124.296 26.5815 127.262 27.4465 127.262 30.783C127.262 33.0074 125.285 35.9731 120.713 35.9731C117.623 36.2203 114.781 34.7374 113.422 32.2659Z'
						fill='#B5B9C1'
					/>
					<path
						d='M135.913 28.4353L133.194 31.4011V35.6026H129.734V12H133.194V27.4467L140.485 19.4144H144.687L138.385 26.3346L144.81 35.6026H140.98L135.913 28.4353Z'
						fill='#B5B9C1'
					/>
					<path
						d='M64.3661 19.167C60.2881 19.167 56.8281 21.8857 56.8281 26.2107V35.7259H60.2881V26.705C60.041 24.6043 61.5239 22.7507 63.6246 22.5035C63.8718 22.5035 64.1189 22.5035 64.3661 22.5035C66.9611 22.5035 68.1969 24.11 68.1969 26.705V35.7259H71.9041V26.2107C71.9041 21.7621 68.444 19.167 64.3661 19.167Z'
						fill='#B5B9C1'
					/>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height={16}
					viewBox='0 0 122 16'
					width={122}>
					<g fill='currentColor'>
						<path d='m53.763 9.237-1.154 4.246c-.242.024-.547.06-1.02.06-2.265 0-2.013-.683-1.057-4.384.993-3.847 1.57-4.549 2.985-4.549 1.36 0 1.37.919 1.025 2.08h3.452c.56-2.168.185-4.09-3.85-4.09-4.496 0-5.717.95-7.165 6.559-1.349 5.223-.906 6.61 3.953 6.61 2.304 0 3.268-.17 4.672-.426l1.625-6.106zM61.997 13.426c-.45 0-.607-.137-.522-.502l.783-3.072h4.618l.522-2.015h-4.62l.524-2.049c.138-.535.518-.99 1.262-.99h3.698l.521-2.017H63.41c-2.229 0-2.899.399-3.765 3.757l-1.597 6.144c-.49 2.06.122 2.958 1.804 2.958h4.637c.913 0 1.501-.486 1.784-1.232l.381-.982zM114.824 13.426c-.45 0-.607-.137-.522-.502l.783-3.072h4.619l.521-2.015h-4.619l.524-2.049c.138-.535.518-.99 1.262-.99h3.697l.522-2.017h-5.374c-2.23 0-2.9.399-3.767 3.757l-1.594 6.144c-.49 2.06.121 2.958 1.802 2.958h4.638c.914 0 1.5-.486 1.784-1.232l.38-.982zM38.76 13.443h-.948L40.045 4.8c.287-.001.395-.013 1.105-.013 2.005 0 2.002.664 1.045 4.367-.966 3.748-1.528 4.288-3.434 4.288zM41.725 2.78H37.1l-3.22 12.473c-.055.213.07.386.278.386h4.117c5.173 0 6.044-.99 7.462-6.485 1.233-4.774.474-6.374-4.013-6.374zM106.395 2.756c-2.663 0-3.901.057-4.628.025l-3.221 12.473c-.056.213.068.386.276.386h3.09L104.71 4.8c.286 0 .72-.024 1.158-.024 1.5 0 1.698.534 1.302 2.066l-2.173 8.412c-.055.213.07.386.278.386h3.09l2.272-8.798c.785-3.047-.551-4.086-4.242-4.086M79.64 2.78l-.533 2.09h3.431c.035 0 .036.043.004.067-.548.412-.883 1.002-1.041 1.617l-2.251 8.7c-.056.213.07.386.277.386h3.317L85.63 4.87h1.699c.954 0 1.534-.4 1.857-1.234l.325-.855zM31.547 15.64l3.221-12.473c.056-.213-.069-.386-.278-.386h-3.265l-3.221 12.473c-.055.213.069.386.277.386zM91.964 13.658c-1.483 0-1.702-.541-.668-4.55.861-3.335 1.682-4.498 3.004-4.498 1.482 0 1.646.798.69 4.498-.946 3.665-1.88 4.55-3.026 4.55zm2.854-11.054c-3.889 0-5.575.692-7.103 6.607-1.321 5.124-.262 6.607 3.69 6.607 4.023 0 5.613-.829 7.104-6.607 1.08-4.182.86-6.607-3.691-6.607zM2.292 9.306l2.01-7.064C4.499 1.516 5.3.854 6.11.854h6.15c.104 0 .136.134.057.188-3.199 2.193-7.055 5.445-9.85 8.356-.074.077-.204.016-.175-.092M7.15 13.548l1.991-6.972c.03-.106-.084-.183-.168-.11C6.043 8.99 2.51 12.674.3 15.461c-.056.07-.027.179.07.179h8.615c3.632 0 5.62-1.127 6.34-3.82.588-2.195-.56-3.69-2.392-4.076-.033-.007-.062-.07 0-.08 1.55-.265 3.113-.89 3.671-3.154.604-2.452-1.267-3.795-3.42-3.656L9.893 12.399c-.178.624-.845 1.15-1.478 1.15zM25.87 10.484c-.115-.384-.24-.664-.42-.892-.025-.03-.03-.068.012-.082 1.476-.456 2.442-1.39 2.851-2.972.54-2.091-.777-3.757-4.103-3.757h-4.942l-3.222 12.473c-.055.213.068.386.278.386h3.088l2.8-10.84c.298 0 .584-.012 1.295-.012 1.191 0 1.631.736 1.375 1.728-.339 1.31-1.35 2.044-2.555 2.044h-.454l1.286 6.222c.152.607.457.858 1.153.858h2.758zM67.909 11.284c-1.308 3.132.397 4.55 3.87 4.55 3.171 0 4.93-.754 5.685-3.675.257-.997.092-2.075-.52-2.74-1.187-1.291-3.466-1.533-4.268-2.28-.408-.382-.404-.914-.285-1.372.217-.842.781-1.3 1.696-1.3 1.432 0 1.47.883 1.117 1.931h3.074c.724-2.188-.224-3.904-3.845-3.904-3.047 0-4.692 1.199-5.283 3.492-.162.63-.103 1.657.273 2.3.837 1.435 3.054 1.615 4.28 2.468.534.37.55.872.408 1.423-.276 1.07-.813 1.582-1.882 1.582-1.028 0-1.645-.599-1.057-2.475z' />
					</g>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height={40}
					viewBox='0 40 490 40'
					width={122}>
					<g
						fill='currentColor'
						transform='translate(10 -10)'>
						<path d='M96.177 24.283c-.073-.658-.657-.95-1.096-.95-.438 0-10.012-.732-10.012-.732s-6.65-6.656-7.455-7.314c-.73-.732-2.12-.512-2.704-.366-.073 0-1.461.439-3.727 1.17-2.266-6.51-6.139-12.434-13.082-12.434h-.658C55.543 1.17 53.058 0 51.013 0c-16.08 0-23.826 20.114-26.238 30.354-6.285 1.975-10.743 3.292-11.255 3.511-3.508 1.097-3.58 1.17-4.02 4.462-.365 2.487-9.5 73.216-9.5 73.216l71.11 13.312 38.588-8.338c.073-.147-13.447-91.575-13.52-92.234Zm-28.94-7.168c-1.754.512-3.874 1.17-5.993 1.902v-1.316c0-3.95-.512-7.168-1.462-9.728 3.654.438 5.92 4.461 7.455 9.142ZM55.324 8.777c.95 2.487 1.608 5.998 1.608 10.825v.732c-3.947 1.243-8.112 2.487-12.424 3.876 2.411-9.216 7.016-13.75 10.816-15.433Zm-4.677-4.535c.73 0 1.461.293 2.046.732-5.189 2.413-10.67 8.484-12.936 20.772-3.435 1.097-6.723 2.048-9.866 3.072C32.522 19.456 39.1 4.242 50.647 4.242ZM58.1 44.544l-4.677 14.117s-4.239-2.268-9.282-2.268c-7.527 0-7.893 4.754-7.893 5.925 0 6.436 16.81 8.923 16.81 24.064 0 11.922-7.528 19.602-17.687 19.602-12.278 0-18.417-7.607-18.417-7.607l3.289-10.825s6.431 5.559 11.84 5.559c3.58 0 5.042-2.78 5.042-4.828 0-8.411-13.74-8.777-13.74-22.674 0-11.63 8.332-22.894 25.214-22.894 6.285-.073 9.501 1.829 9.501 1.829Z' />
						<path d='M95.081 23.186c-.438 0-10.012-.731-10.012-.731s-6.65-6.656-7.455-7.314c-.292-.293-.657-.44-.95-.44L71.33 124.856l38.588-8.338s-13.52-91.575-13.593-92.234c-.293-.658-.804-.95-1.243-1.097Z' />
						&gt;
						<path d='M154.717 71.095c-3.873-2.048-5.847-3.877-5.847-6.29 0-3.072 2.778-5.047 7.09-5.047 5.042 0 9.5 2.048 9.5 2.048l3.508-10.752s-3.215-2.487-12.716-2.487c-13.228 0-22.437 7.607-22.437 18.286 0 6.07 4.312 10.678 10.013 13.97 4.677 2.56 6.285 4.462 6.285 7.241 0 2.853-2.339 5.193-6.65 5.193-6.359 0-12.425-3.291-12.425-3.291l-3.727 10.752s5.554 3.73 14.909 3.73c13.593 0 23.46-6.73 23.46-18.798-.147-6.583-5.043-11.117-10.963-14.555Zm54.228-22.674c-6.724 0-11.986 3.218-16.005 8.045l-.147-.073 5.847-30.427h-15.128l-14.763 77.531h15.128l5.043-26.478c1.973-10.02 7.162-16.237 11.986-16.237 3.435 0 4.75 2.34 4.75 5.632 0 2.048-.146 4.68-.658 6.729l-5.7 30.354h15.128l5.92-31.305c.658-3.291 1.096-7.241 1.096-9.947-.073-8.704-4.531-13.824-12.497-13.824Zm46.7 0c-18.27 0-30.33 16.457-30.33 34.816 0 11.702 7.236 21.211 20.83 21.211 17.905 0 29.963-16.018 29.963-34.816.073-10.898-6.212-21.211-20.463-21.211Zm-7.454 44.47c-5.19 0-7.309-4.388-7.309-9.947 0-8.704 4.458-22.82 12.717-22.82 5.335 0 7.162 4.68 7.162 9.142 0 9.29-4.604 23.625-12.57 23.625Zm66.724-44.47c-10.231 0-16.005 9.07-16.005 9.07h-.146l.877-8.12h-13.447c-.658 5.486-1.9 13.898-3.07 20.115L272.674 125h15.128l4.238-22.455h.366s3.142 1.975 8.843 1.975c17.832 0 29.452-18.286 29.452-36.718-.073-10.24-4.677-19.382-15.786-19.382Zm-14.47 44.617c-3.946 0-6.285-2.268-6.285-2.268l2.485-14.116c1.754-9.509 6.723-15.726 11.985-15.726 4.678 0 6.066 4.315 6.066 8.338.073 9.801-5.773 23.772-14.251 23.772Zm51.816-66.34c-4.823 0-8.697 3.876-8.697 8.776 0 4.462 2.85 7.607 7.162 7.607h.146c4.75 0 8.77-3.218 8.843-8.777.074-4.462-2.923-7.607-7.454-7.607Zm-21.194 76.726h15.128l10.232-53.833h-15.202l-10.158 53.833Zm63.948-53.906H384.49l.511-2.487c.877-5.193 3.947-9.728 9.063-9.728 2.704 0 4.823.804 4.823.804l2.923-11.922s-2.557-1.316-8.258-1.316c-5.335 0-10.743 1.536-14.836 5.046-5.189 4.389-7.6 10.752-8.77 17.189l-.438 2.487h-7.09l-2.265 11.483h7.09l-8.04 42.423h15.128l8.04-42.423h10.45l2.193-11.556Zm36.468.073s-9.5 23.918-13.666 37.01h-.147c-.292-4.242-3.727-37.01-3.727-37.01h-15.932l9.135 49.298c.147 1.097.074 1.756-.365 2.487-1.754 3.438-4.75 6.73-8.258 9.143-2.85 2.048-6.066 3.438-8.624 4.315l4.239 12.873c3.07-.658 9.5-3.218 14.836-8.265 6.87-6.436 13.3-16.457 19.878-30.061l18.49-39.863h-15.859v.073Z' />
					</g>
				</svg>
			</div>
		</div>
	);
};

export default CertificateSlider;
