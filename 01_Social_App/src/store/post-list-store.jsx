import { createContext, useReducer } from 'react';

export const PostList = createContext({
	postList: [],
	addPost: () => {},
	deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
	switch (action.type) {
		case 'DELETE_POST':
			return currPostList.filter((post) => post.id !== action.payload.postId);
		default:
			return currPostList;
	}
};

const DEFAULT_POST_LIST = [
	{
		id: 1,
		title: 'Going to Pakistan',
		body: 'Hi, Friends I am going to Pakistan for my vacation. Hope to enjoy a lot. Peace out.',
		reaction: 2,
		userID: 'user-9',
		tags: ['vacation', 'Pakistan', 'enjoy'],
	},
	{
		id: 2,
		title: 'Pass ho gaya bhai',
		body: '4 saal ki masti ke baad bhi ho gaye hain pass. Hard to believe.',
		reaction: 15,
		userID: 'user-12',
		tags: ['graduation', 'unbelievable'],
	},
];

const PostListProvider = ({ children }) => {
	const [postList, dispatchPostList] = useReducer(
		postListReducer,
		DEFAULT_POST_LIST
	);

	const addPost = (newPost) => {
		dispatchPostList({
			type: 'ADD_POST',
			payload: { newPost },
		});
	};

	const deletePost = (postId) => {
		dispatchPostList({
			type: 'DELETE_POST',
			payload: { postId },
		});
	};

	return (
		<PostList.Provider value={{ postList, addPost, deletePost }}>
			{children}
		</PostList.Provider>
	);
};

export default PostListProvider;
