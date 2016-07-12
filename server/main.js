import { Meteor } from 'meteor/meteor';
import { log, getPage } from '/imports/somethingSel'

Meteor.startup(() => {

});

Meteor.methods({
    addUrl({ url, arg2 }) {
        log("kuku!", url)

        console.time("getPage")

 //       var p = getPage('http://belmarstore.com/',

        var p = getPage(url,
            function resolve(values) {
                console.log("Values: " + values)
                console.timeEnd("getPage")
                // Insert a post into the collection
                Sites.insert({
                    url,
                    createdAt: new Date(),            // current time
       //             author: Meteor.userId(),           // _id of logged in user
       //             lat: latLng.lat,
       //             lng: latLng.lng,
       //             username: username  // username of logged in user
                      values
                });
            },

            function reject() {
                console.log("Error")
            })

    }
});
