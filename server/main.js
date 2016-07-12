import {Meteor} from 'meteor/meteor';
import { log, getPage } from '/imports/somethingSel'

Meteor.startup(() => {

});

Meteor.methods({
    addUrl({url, arg2}) {
        throw new Meteor.Error(500, 'Error 500: Not found', 'the document is not found');
    }
});
