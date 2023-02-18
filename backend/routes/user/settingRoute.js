const express = require('express');
const settingController = require('../../controllers/user/settingController');
const router = express.Router();

router.get('/settings', settingController.getSiteSettings);

module.exports = router;