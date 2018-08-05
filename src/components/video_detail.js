import React from 'react';



const VideoDetail = ({video}) => {
	if(!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;

	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe 
					className="embed-responsive-item"
					src={`https://www.youtube.com/embed/${videoId}`}
				/>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;