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

	// test(){
	// 	setTimeout(() => {this.createNews('title','text')}, 2000)
	// 	console.log('created', this.news)
	// }

	createNews(title, text) {
		this.news.push({
			title,
			text
		});

		this.emit("change");
	}

	getAll() {
		// this.test(); // to test emitter (update dom)
		return this.news;
	}
}

const newsStore = new NewsStore;

export default newsStore;