const express = require('express');
const path = require ('path');


const router = express.Router();

router.get('/micah', (reg, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'micah.html'));
});

router.get('', (reg, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'micah.html'));
});

router.get('/joinCampaigns', (reg, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'joinCampaigns.html'));
});

router.get('/joinCommunity', (reg, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'joinCommunity.html'));
});

router.get('/planforchange', (reg, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'planforchange.html'));
});
router.get('/updates', (reg, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'updates.html'));
});
router.get('/whyHonMicah', (reg, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'whyHonMicah.html'));
});

module.exports = router;