import fs from 'fs';
import path from 'path';

const baseDir = 'nested_structure';

// Function to create directories and .gitkeep files
function createNestedStructure(currentPath: string, depth: number) {
  if (depth > 2) return;

  for (let i = 0; i < 256; i++) {
    const hexValue = i.toString(16).padStart(2, '0');
    const newPath = path.join(currentPath, hexValue);

    fs.mkdirSync(newPath, { recursive: true });

    if (depth === 2) {
      fs.writeFileSync(path.join(newPath, '.gitkeep'), '');
    } else {
      createNestedStructure(newPath, depth + 1);
    }
  }
}

// Create the base directory
fs.mkdirSync(baseDir, { recursive: true });

// Start creating the nested structure
createNestedStructure(baseDir, 1);

console.log('Nested directory structure created successfully.');
