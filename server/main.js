import {Meteor} from 'meteor/meteor';
import { log, getPage } from '/imports/somethingSel'

Meteor.startup(() => {

});

function timesByTwo(n, delay) {
    return new Promise((resolve, reject) => {
        Meteor.setTimeout(() => {
            if (typeof n !== 'number') {
                console.log("rejecting")
                reject('Not-a-number')
            }
            resolve(n * 2)
        }, delay)
    })
}


Meteor.methods({
    addUrl({url, arg2}) {
        console.log("add url")
        return timesByTwo("kuku", 1000).catch(e => {
            throw new Meteor.Error(e)
        })

        throw new Meteor.Error(500, 'Error 500: Not found', 'the document is not found');
    }
});
