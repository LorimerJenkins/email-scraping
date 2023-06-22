const unirest = require("unirest")
const cheerio = require("cheerio")


async function dsdsds() {

    let url = 'https://www.linkedin.com/posts/marcelvanoost_fintech-payments-paytech-activity-7077647020932374528-y9UH?utm_source=share&utm_medium=member_desktop'

    let response = await unirest.get(url).headers({"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"})
    const $ = cheerio.load(response.body)

    console.log(response)

}

dsdsds()

    



    