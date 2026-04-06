const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}
const counterFile = path.join(dataDir, 'counter.txt');

// Initialize counter file if not exists
if (!fs.existsSync(counterFile)) {
    fs.writeFileSync(counterFile, '0');
}

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// API to get and increment global refresh count securely mapped to file
app.post('/api/refresh', (req, res) => {
    try {
        let count = parseInt(fs.readFileSync(counterFile, 'utf8') || '0');
        count += 1;
        fs.writeFileSync(counterFile, count.toString());
        res.json({ count });
    } catch (error) {
        console.error('Error updating counter:', error);
        res.status(500).json({ error: 'Failed to update counter' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
