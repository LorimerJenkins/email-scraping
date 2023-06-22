const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://calendly.com/lorimerjenkins';

axios.get(url)
  .then(response => {
    if (response.status === 200) {
      const html = response.data;
      console.log(html)
      const $ = cheerio.load(html);

      const socialMediaElements = [];

      // Add selectors for social media links or usernames
      $('a[href^="https://twitter.com/"]').each((index, element) => {
        const twitterLink = $(element).attr('href');
        socialMediaElements.push(twitterLink);
      });

      $('a[href^="https://www.facebook.com/"]').each((index, element) => {
        const facebookLink = $(element).attr('href');
        socialMediaElements.push(facebookLink);
      });

      // Add more selectors for other social media platforms

      console.log('Scraped social media links or usernames:');
      console.log(socialMediaElements);
    }
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });


