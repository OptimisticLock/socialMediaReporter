import { Meteor } from 'meteor/meteor';
import { log, getPage } from '/imports/somethingSel'

Meteor.startup(() => {

});

Meteor.methods({
    addUrl({ url, arg2 }) {
        log("kuku!", url, arg2)

        console.time("getPage")

 //       var p = getPage('http://belmarstore.com/',
        
        var p = getPage(url,
            function resolve(values) {
                console.log("Values: " + values)
                console.timeEnd("getPage")
            },

            function reject() {
                console.log("Error")
            })

    }
});
