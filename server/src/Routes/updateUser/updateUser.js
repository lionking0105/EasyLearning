const {Router} = require('express');
const router = Router();
const { updateUser } = require("./controllers");

router.patch("/", async (req, res) => {
    try {
        res.send(await updateUser(req.body));
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;