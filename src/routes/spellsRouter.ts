import express from 'express'

import spellsController from '../controllers/spellsController.js'

const router = express.Router();

router.get('/getAllSpells', spellsController.getAllSpells);

export default router;