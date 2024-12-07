import React from 'react';

function Post({ post }) {
	return (
		<div>
			<div
				key={post.id}
				className="card w-[18rem] mx-5 my-12 p-2 border">
				<div className="card-body">
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
