
const { Router } = require("express");
const router = Router();

router.get('/', async function (req, res){
    res.render('../views/index')
})

module.exports = router;