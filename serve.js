const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Required headers for FFmpeg WASM (SharedArrayBuffer support)
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
