import { Meteor } from 'meteor/meteor';
import { log } from '/imports/somethingSel'


Meteor.startup(() => {

});


Meteor.methods({
    addUrl({ url, arg2 }) {
        log("kuku!", url, arg2)
    }
});
