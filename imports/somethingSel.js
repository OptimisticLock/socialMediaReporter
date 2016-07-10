

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

function log(a, b) {
    console.log("Logging", a, b, arguments)
}


function getLinkTo(url, resolve, reject) {
    // '[href*="twitter"]'
    var css = `[href*="${url}"]`
    driver.findElements(By.css(css)).then(function (links) {

        if (links.length > 0) {
            links[0].getAttribute("href").then(function (str) {
                resolve(str)
            })
        }
        else
            resolve(url + " not found")

    });
}




function getPage(page, resolve, reject) {
    console.time("pageLoad")

    driver.get(page).then(function(a, b)  {
        console.timeEnd("pageLoad")
        console.log("Hello", a, b, arguments)
    })

    var links = Object.create(null);

    var urls = [
          "https://twitter.com/"
        , "https://www.facebook.com"
        , "https://plus.google.com"
        , "http://www.yelp.com"
        , "https://instagram.com"
    ]

    var promises = urls.map(function(url) {
        return new Promise((resolve, reject) => {
            getLinkTo(url, resolve, reject)
        })
    })

    Promise.all(promises).then(values => {
        resolve(values)
    })
}

console.time("getPage")

var p = getPage('http://belmarstore.com/',
    function resolve(values) {
        console.log("Values: " + values)
        console.timeEnd("getPage")
    },

    function reject() {
        console.log("Error")
    })



