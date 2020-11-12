var request = require('request');

const getProfile = (id)=>{
    return new Promise((res, rej)=>{
        let url = `https://api.sportradar.us/tennis-t2/en/players/${id}/profile.json?api_key=${process.env.API_KEY}`;
        let testUrl = `https://api.sportradar.us/tennis-t2/en/players/sr:competitor:14882/profile.json?api_key=${process.env.API_KEY}`;
        
        var headers = {
            'X-Originating-IP': '37.228.233.192'
            // 'cookie': 'somecookie',
            // 'origin': 'https://foo.bar',
            // 'accept-encoding': 'gzip, deflate, br',
            // 'accept-language': 'en-US,en;q=0.9,pt;q=0.8',
            // 'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
            // 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'accept': '*/*',
            // 'referer': 'https://foo.bar/path',
            // 'authority': 'www.foo.bar',
            // 'x-requested-with': 'XMLHttpRequest'
        };
        var options = {
            uri: url,
            method: 'GET',
            headers: headers
        };
    
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                res(JSON.parse(response.body))
            }
            else {
                console.log(error);
            }
        }
    
        request(options, callback);
    });    
}

let getArticles = (id)=>{
    return new Promise((res, rej)=>{
        let url = "https://livescore6.p.rapidapi.com/news/list?category=tennis";
        let headers = {
            "x-rapidapi-host": "livescore6.p.rapidapi.com",
            "x-rapidapi-key": process.env.RAPID_API_KEY
    
        }
        var options = {
            url,
            method: 'GET',
            headers: headers
        };
    
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                let toJ = JSON.parse(body)
                res(toJ)
            }
            else {
                rej("ER", error)
            }
        }
        request(options, callback);
    
    })
}

module.exports = {
    getArticles,
    getProfile
}