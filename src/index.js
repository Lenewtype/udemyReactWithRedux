import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

const API_KEY = 'AIzaSyBnEbz1EIzq20YSRStJEbDEs5qW8U1SuCI';




class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			term: '',
			videos: [],
			selectedVideo: null
		};

		this.debouncedSearch = _.debounce( (term) => {
			this.videoSearch(term);
		}, 300);

		this.onVideoSelect = this.onVideoSelect.bind(this);
		this.videoSearch = this.videoSearch.bind(this);

		this.videoSearch('digimon');
	}

	videoSearch(term = 'cats') {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({videos: videos, selectedVideo: videos[0]});
		});
	}

	onVideoSelect(video) {
		this.setState({selectedVideo: video});
	}

	render(){
		return (
			<div>
				<SearchBar term={this.state.term} onSearchTermChange={this.debouncedSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					videos={this.state.videos}
					onVideoSelect={this.onVideoSelect}
				/>
			</div>
		);
	}
};

ReactDOM.render(<App />, document.querySelector('.container'));