import { EventEmitter } from 'events';

class NewsStore extends EventEmitter {
	constructor() {
		super();
		this.news = [
	      {
	        title: 'News 1',
	        text: 'Great News 1'
	      },
	      {
	        title: 'News 2',
	        text: 'Great News 2'
	      },
	      {
	        title: 'News 3',
	        text: 'Great News 3'
	      },
	    ];
	}

	getAll() {
		return this.news;
	}
}

const newsStore = new NewsStore;

export default newsStore;