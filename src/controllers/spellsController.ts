import { Request, Response } from 'express'
import spellService from '../services/spellService.js';

class spellsController {

    getAllSpells = async (request: Request, response: Response) => {
        try{
            const spells = await spellService.getAllSpells();
            return response.status(200).json(spells);
        }catch(error){
            console.error('Error occured while fetching all the spells: ', error);
            return response.status(500).json({ message:'Failed to fetch all spells', error});
        }
    };

    addSpell = async (request: Request, response: Response) => {
        console.log('Input Received: ', request.body);
        
        try{
            const newSpell  = await spellService.addSpell(request.body);
            return response.status(200).json(newSpell);
        }catch (error){
            console.error('Error occured while adding a new spell: ', error);
            return response.status(400).json({ message : 'Invalid Spell Data', error});
        }        
    }

    addSpells = async (request: Request, response: Response) => {
        console.log('Bulk Input Received:', request.body);

        if (!Array.isArray(request.body)) {
            return response.status(400).json({ message: 'Expected an array of spells' });
        }

        try {
            const newSpells = await spellService.addSpells(request.body);
            return response.status(200).json(newSpells);
        } catch (error) {
            console.error('Error occurred while adding multiple spells:', error);
            return response.status(400).json({ message: 'Invalid Spell Data in list', error });
        }
    };

}

export default new spellsController();