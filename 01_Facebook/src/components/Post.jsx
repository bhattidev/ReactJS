import React from 'react';

function Post({ post }) {
	return (
		<div>
			<div
				key={post.id}
				className="card w-[18rem] mx-5 my-12 p-2 border">
				<div className="card-body">
					<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
						{post.reaction}
						<span class="visually-hidden">unread messages</span>
					</span>
					<h5 className="card-title">{post.title}</h5>
					<p className="card-text">{post.body}</p>
					{post.tags.map((tag) => (
						<span className="badge text-bg-primary inline m-0.5">{tag}</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default Post;
