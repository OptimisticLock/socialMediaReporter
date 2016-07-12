

var webdriver = require('selenium-webdriver')
    , By = webdriver.By
    , until = webdriver.until;

var driver

export function log(a, b) {
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
            resolve(undefined)
    });
}

export function getPage(page, resolve, reject) {
    console.time("pageLoad")

    driver = driver || new webdriver.Builder().forBrowser('chrome').build();

    driver.get(page).then(function (result) {
        console.timeEnd("pageLoad")
    }, function(error) {
        console.log("ERRROR!!!!!")
    }).catch(function(error) {
        console.log("ERROR", error)
        var newError = new Error("Error getting page " + page)
        newError.old = error
 //       throw newError
    })

    var links = Object.create(null);

    var urls = [
        "https://twitter.com/"
        , "https://www.facebook.com"
        , "https://plus.google.com"
        , "http://www.yelp.com"
        , "https://instagram.com"
    ]

    var promises = urls.map(function (url) {
        return new Promise((resolve, reject) => {
            getLinkTo(url, resolve, reject)
        })
    })

    Promise.all(promises).then(values => {
        resolve(values)
    })
}
