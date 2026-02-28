import { Request, Response } from 'express'
import { SpellModel } from '../models/spell.model.js'

class spellsController {

    getAllSpells = async (request: Request, response: Response) => {
        try{
            const spells = await SpellModel.find().lean();
            return response.status(200).json(spells);
        }catch(error){
            console.error('Error occured while fetching all the spells: ', error);
            return response.status(500).json({ message:'Failed to fetch all spells', error});
        }
    };

    addSpell = async (request: Request, response: Response) => {
        console.log('Input Received: ', request.body);
        
        try{
            const newSpell  = await SpellModel.create(request.body);
            return response.status(200).json(newSpell);
        }catch (error){
            console.error('Error occured while adding a new spell: ', error);
            return response.status(400).json({ message : 'Invalid Spell Data', error});
        }        
    }
}

export default new spellsController();