/* eslint-disable @typescript-eslint/no-require-imports */
// Script untuk generate placeholder images sebagai base64 data URL
// Jalankan ini sekali untuk generate SVG placeholder

const fs = require('fs');
const path = require('path');

const figures = [
  { id: 'soekarno', name: 'Soekarno', color: '#1e3a8a' },
  { id: 'hatta', name: 'Mohammad Hatta', color: '#1e40af' },
  { id: 'kartini', name: 'Raden Ajeng Kartini', color: '#2563eb' },
  { id: 'diponegoro', name: 'Pangeran Diponegoro', color: '#3b82f6' },
  { id: 'sudirman', name: 'Jenderal Sudirman', color: '#60a5fa' }
];

// Generate SVG placeholder dengan warna berbeda
figures.forEach(fig => {
  const svg = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="${fig.color}"/>
      <text x="200" y="140" font-size="48" fill="white" text-anchor="middle" font-weight="bold" font-family="Arial">
        🖼️
      </text>
      <text x="200" y="180" font-size="24" fill="white" text-anchor="middle" font-family="Arial">
        ${fig.name}
      </text>
    </svg>
  `.trim();

  // Save as file
  const filepath = path.join(__dirname, `..`, `public`, `images`, `${fig.id}.svg`);
  if (fs.existsSync(filepath)) {
    console.log(`Skipped existing artwork: ${fig.id}.svg`);
    return;
  }
  fs.writeFileSync(filepath, svg);
  console.log(`Created: ${fig.id}.svg`);
});

console.log('All placeholder images created successfully!');
