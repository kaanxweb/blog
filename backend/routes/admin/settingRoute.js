const express = require('express');
const settingController = require('../../controllers/admin/settingController');
const router = express.Router();

router.get('/settings', settingController.getSiteSettings);

module.exports = router;