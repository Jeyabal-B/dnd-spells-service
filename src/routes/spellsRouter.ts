import express from 'express'

import spellsController from '../controllers/spellsController.js'

const router = express.Router();

router.get('/getAllSpells', spellsController.getAllSpells);
router.post('/spell', spellsController.addSpell);
router.post('/spells', spellsController.addSpells);

export default router;