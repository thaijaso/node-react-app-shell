import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import MessageStore from '../data/MessageStore';

function getStores() {
	return [
		MessageStore
	];
}

function getState() {
	return {

	};	
}

export default Container.createFunctional(AppView, getStores, getState);