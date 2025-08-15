const fs = require('fs');
const path = require('path');

// Function to fix paths in HTML files
function fixPaths(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixPaths(filePath);
    } else if (file.endsWith('.html')) {
      console.log(`Fixing paths in: ${filePath}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace absolute paths with relative paths
      content = content.replace(/href="\/_next\//g, 'href="./_next/');
      content = content.replace(/src="\/_next\//g, 'src="./_next/');
      content = content.replace(/href="\/favicon\.ico"/g, 'href="./favicon.ico"');
      content = content.replace(/href="\/Suriyan-SD\.pdf"/g, 'href="./Suriyan-SD.pdf"');
      
      fs.writeFileSync(filePath, content);
    }
  });
}

// Run the fix
console.log('Fixing paths for GitHub Pages...');
fixPaths('./out');
console.log('Paths fixed successfully!');
