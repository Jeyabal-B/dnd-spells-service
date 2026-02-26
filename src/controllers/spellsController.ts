import express from 'express'
import { Spell } from '../models/spell.js'

//temporary - replace it soon with a db call
const spells: Spell[] = [
    {
        id: 1001,
        name: 'Magic Missile',
        level: 1,
        source: 'PHP 2014',
        known: true,
        prepared: true,
        castingTime: '1 action',
        school: 'Evocation'
    }
];

class spellsController {

    getAllSpells = async (request: express.Request, response: express.Response) => {
        return response.status(200).json(spells);
    }

    addSpell = async (request: express.Request, response: express.Response) => {
        try{
            const newSpell: Spell = {
                id: Date.now(),
                ... request.body
            }
            spells.push(newSpell);
            return response.status(200).json(spells);
        }catch (error){
            return response.status(400).json({ message : 'Invalid Spell Data', error});
        }        
    }
}

export default new spellsController();