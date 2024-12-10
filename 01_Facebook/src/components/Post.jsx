import React, { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import PostList from '../store/post-list-store';

function Post({ post }) {
	const { deletePost } = useContext(PostList);

	return (
		<div>
			<div
				key={post.id}
				className="card w-[30rem] mx-5 my-12 border">
				<div className="card-body">
					<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
						<AiFillDelete onClick={() => deletePost(post.id)} />
						<span className="visually-hidden">unread messages</span>
					</span>
					<h5 className="card-title">{post.title}</h5>
					<p className="card-text">{post.body}</p>
					{post.tags.map((tag) => (
						<span
							key={tag}
							className="badge text-bg-primary inline m-0.5">
							{tag}
						</span>
					))}
					<div
						className="alert alert-info mt-4 w-full"
						role="alert">
						This post has been reacted by {post.reaction} people.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
