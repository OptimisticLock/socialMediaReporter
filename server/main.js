import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    import '/imports/somethingSel'
    
});


Meteor.methods({
    addUrl({ url, arg2 }) {
        console.log("kuku!", url, arg2)
    }
});
