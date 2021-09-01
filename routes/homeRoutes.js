const router = require('express').Router();
const path = require('path');

//directory for main page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//directory for stats page (maps)
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});
//directory for excercise form page
router.get('/excercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/excercise.html"));
});

module.exports = router;