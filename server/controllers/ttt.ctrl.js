var ResponseUtils = appRequire('utils.response');
var http = require('http');
var https = require('https');
var dictServiceURL = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf&lang=en-ru&text=';

let dictCopy;
function getFrequency(req, res) {
    var count = req.params.num;
    http.get('http://norvig.com/big.txt', (resp) => {
        var data = '';


        resp.on('data', (chunk) => {
            data += chunk;
        });


        resp.on('end', () => {
            console.log('file fetch ended');
            // data = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
            var fetchDetailsURL = [];
            var sortedData = getWordCount(data);
            var topWords = sortedData.slice(0, count);

            for(let i=0;i<topWords.length;i++){
                fetchDetailsURL.push(getDictReferences(dictServiceURL+topWords[i][0]));
            }
            
            let responseObj=[];
            Promise.all(fetchDetailsURL)
                .then(dataObj=>{
                    dataObj.forEach(item=>{
                        let details = item.def[0] || {};
                        let syn;
                        if (details && details.tr && details.tr[0]) {
                            syn= details.tr[0];
                        }
                        details.text= details.text ? details.text.toLowerCase() : null;
                        responseObj.push({
                            word: details.text,
                            count: dictCopy[details.text],
                            pos: details.pos || "",
                            syn: syn || ""

                        })
                    })
                    // console.log(responseObj, 'res obj');
                    return res.json(ResponseUtils.responseMessage(true, 'success', responseObj));
                })
                .catch(error=>{
                    console.log(error, 'error');
                    return res.status(500).json(ResponseUtils.responseError(error));
                });
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
        return res.json(ResponseUtils.responseError(err));
    });
}


function getWordCount(data) {
    var toSort = [];
    var wordDict = {};
    var newData = data.split(/\s+/);

    newData.forEach(function (datum) {
        datum = datum.toLowerCase();
        datum = datum.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:’'–",.<>\{\}\[\]\\\/]/gi, ' ').trim();
        if (datum) {
            if (datum.indexOf(' ') >= 0) {
                datum = datum.split(/\s+/);
                datum.forEach(function (childDatum) {
                    if (wordDict[childDatum]) {
                        wordDict[childDatum] += 1;
                    } else {
                        wordDict[childDatum] = 1;
                    }
                });
            } else {
                if (wordDict[datum]) {
                    wordDict[datum] += 1;
                } else {
                    wordDict[datum] = 1;
                }
            }
        }
    });

    dictCopy = wordDict;

    // push into array
    for (var word in wordDict) {
        toSort.push([word, wordDict[word]]);
    }


    // sort the array
    toSort.sort(function (a, b) {
        return b[1] - a[1];
    });
    return toSort;
}

const getDictReferences = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error('Failed to load page, status code: ' + response.statusCode));
                }
            const body = [];
            response.on('data', (chunk) => body.push(chunk));
            response.on('end', () => {
                return resolve(JSON.parse(body.join('')));
                });
            // });
    }).on("error", (err) => {
        console.log(url,'--url--');
        console.log(err.message, " Error");
        reject(err);
    });
});
}






module.exports = {
    getFrequency: getFrequency
};