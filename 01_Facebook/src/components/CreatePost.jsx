import React, { useContext, useRef } from 'react';

function CreatePost() {
	const { addPost } = useContext(PostListProvid);
	const userId = useRef();
	const postTitle = useRef();
	const postBody = useRef();
	const reactions = useRef();
	const tags = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<div>
			<form
				className="w-[80%] p-2 m-5"
				onSubmit={handleSubmit}>
				<div className="mb-3">
					<label
						htmlFor="userId"
						className="form-label">
						User Id
					</label>
					<input
						type="text"
						ref={userId}
						className="form-control border"
						id="userId"
						placeholder="Enter User Id"
					/>
				</div>

				<div className="mb-3">
					<label
						htmlFor="title"
						className="form-label">
						Post Title
					</label>
					<input
						type="text"
						ref={postTitle}
						className="form-control border"
						id="title"
						placeholder="How are you feeling today..."
					/>
				</div>

				<div className="mb-3">
					<label
						htmlFor="body"
						className="form-label">
						Post Content
					</label>
					<textarea
						type="text"
						ref={postBody}
						rows="3"
						className="form-control border"
						id="body"
						placeholder="Tell us more about it."
					/>
				</div>

				<div className="mb-3">
					<label
						htmlFor="reactions"
						className="form-label">
						Number of Reactions
					</label>
					<input
						type="text"
						ref={reactions}
						className="form-control border"
						id="reactions"
						placeholder="Please enter tags using space"
					/>
				</div>
				<div className="mb-3">
					<label
						htmlFor="tags"
						className="form-label">
						Hash Tags
					</label>
					<input
						type="text"
						ref={tags}
						className="form-control border"
						id="tags"
						placeholder="Enter tags using space."
					/>
				</div>

				<button
					type="submit"
					className="btn btn-primary">
					Post
				</button>
			</form>
		</div>
	);
}

export default CreatePost;
