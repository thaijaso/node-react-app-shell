import {ReduceStore} from 'flux/utils';
import MessageDispatcher from './MessageDispatcher';

class MessageStore extends ReduceStore {
	constructor() {
		super(MessageDispatcher);
	}

	getInitialState() {
		return '';
	}

	reduce(state, action) {
		return state;
	}
}

export default new MessageStore();