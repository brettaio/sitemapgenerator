const fs = require('fs');
const path = require('path');

// Specify the path to your text file
const filePath = path.join(__dirname, 'sitemapList.txt');

// Read the contents of the file
const fileContents = fs.readFileSync(filePath, 'utf8');

// Split the contents by new line to get an array of URLs
const urls = fileContents.split('\n').filter(Boolean); // filter(Boolean) removes any empty strings

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `   <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <priority>0.80</priority>
   </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync('sitemap.xml', sitemap);
console.log('Sitemap generated!');
