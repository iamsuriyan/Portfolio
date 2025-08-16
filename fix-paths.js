const fs = require('fs');
const path = require('path');

// Function to recursively find and fix paths in HTML files
function fixPathsInDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      fixPathsInDirectory(filePath);
    } else if (file.endsWith('.html')) {
      // Fix paths in HTML files
      fixPathsInFile(filePath);
    }
  });
}

// Function to fix paths in a single HTML file
function fixPathsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix CSS paths - remove leading slash
    content = content.replace(/href="\/([^"]*\.css)"/g, 'href="./$1"');
    
    // Fix JS paths - remove leading slash
    content = content.replace(/src="\/([^"]*\.js)"/g, 'src="./$1"');
    
    // Fix image paths - remove leading slash
    content = content.replace(/src="\/([^"]*\.(png|jpg|jpeg|gif|svg|webp))"/g, 'src="./$1"');
    
    // Fix other asset paths - remove leading slash
    content = content.replace(/href="\/([^"]*\.(ico|woff|woff2|ttf|eot))"/g, 'href="./$1"');
    
    // Fix data attributes that might contain paths
    content = content.replace(/data-src="\/([^"]*)"/g, 'data-src="./$1"');
    
    // Write the fixed content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    
    console.log(`Fixed paths in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing paths in ${filePath}:`, error.message);
  }
}

// Main execution
try {
  const outDir = path.join(process.cwd(), 'out');
  
  if (fs.existsSync(outDir)) {
    console.log('Fixing paths for GitHub Pages deployment...');
    fixPathsInDirectory(outDir);
    console.log('Path fixing completed successfully!');
  } else {
    console.error('Error: "out" directory not found. Make sure to run "next build" first.');
    process.exit(1);
  }
} catch (error) {
  console.error('Error during path fixing:', error.message);
  process.exit(1);
}
