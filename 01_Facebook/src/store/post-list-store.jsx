import { createContext, useReducer } from 'react';

// Create a context
export const PostList = createContext({
	postList: [],
	addPost: () => {},
	deletePost: () => {},
});

// Reducer function to handle actions
const postListReducer = (currPostList, action) => {
	switch (action.type) {
		case 'DELETE_POST':
			// Filter out the post with the given ID
			return currPostList.filter((post) => post.id !== action.payload.postId);
		case 'ADD_POST':
			// Add a new post to the list
			return [...currPostList, action.payload.newPost];
		default:
			// Return the current state for unrecognized actions
			return currPostList;
	}
};

// Default post list
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

// Context provider component
const PostListProvider = ({ children }) => {
	const [postList, dispatchPostList] = useReducer(
		postListReducer,
		DEFAULT_POST_LIST
	);

	// Function to add a new post
	const addPost = (newPost) => {
		dispatchPostList({
			type: 'ADD_POST',
			payload: { newPost },
		});
	};

	// Function to delete a post by ID
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
