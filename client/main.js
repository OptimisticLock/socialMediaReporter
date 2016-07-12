import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.hello.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    },
});

Template.sel.events({
    submit(event) {
        event.preventDefault()
        // Get value from form element
        const target = event.target;
        const url = target.url.value;
        console.log("URL is", url)

        Meteor.call('addUrl', {
            url,
            arg2: 'This is kukuarg'
        }, (err, res) => {
            if (err) {
                alert(err);
            } else {
                console.log("success")
            }
        });
    }
})


