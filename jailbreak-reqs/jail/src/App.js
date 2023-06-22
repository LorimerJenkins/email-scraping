import './App.css';
import axios from 'axios';
import cheerio from 'cheerio';


function App() {


  async function run() {
    const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://www.linkedin.com/in/lorimerjenkins/';
  
    try {
      const response = await axios.get(corsProxyUrl + targetUrl);
      if (response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html);
  
        const emailElements = [];
  
        $('a[href^="mailto:"]').each((index, element) => {
          const email = $(element).attr('href').replace('mailto:', '');
          emailElements.push(email);
        });
  
        $('*').each((index, element) => {
          const text = $(element).text();
          const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
          const matches = text.match(regex);
  
          if (matches) {
            matches.forEach((email) => {
              if (!emailElements.includes(email)) {
                emailElements.push(email);
              }
            });
          }
        });
  
        console.log('Scraped email addresses:');
        console.log(emailElements);
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
  }
  





  return (
    <div className="App">
      <button style={{
        width: '100vw',  
        height: '100vh',
      }} onClick={() => run()}>Run</button>
    </div>
  );
}

export default App;
