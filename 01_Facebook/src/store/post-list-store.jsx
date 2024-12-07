import { createContext, useReducer } from 'react';

export const PostList = createContext({
	postList: [],
	addPost: () => {},
	deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
	return currPostList;
};

const PostListProvider = ({ children }) => {
	const [postList, dispatchPostList] = useReducer(
		postListReducer,
		DEFAULT_POST_lIST
	);

	const addPost = () => {};
	const deletePost = () => {};

	return (
		<PostList.Provider value={{ postList, addPost, deletePost }}>
			{children}
		</PostList.Provider>
	);
};

const DEFAULT_POST_lIST = [
	{
		id: 1,
		title: 'Going to Pakistan',
		body: 'Hi, Friends I am going to Pakistan for my voccation. Hope to enjoy a lot. Peace out.',
		reaction: 2,
		userID: 'user-9',
		tags: ['voccation', 'Pakistan', 'enjoy'],
	},
	{
		id: 2,
		title: 'Pass ho gia bhai',
		body: '4 saal ki masti k bad bhi ho gay hain pass. Hard to believe.',
		reaction: 15,
		userID: 'user-12',
		tags: ['graduation', 'unbeleivable'],
	},
];

export default PostListProvider;
