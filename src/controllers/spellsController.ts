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

    updateSpell = async (request: Request, response: Response) => {
        console.log('Request received for update spell: ', request.body);
        const id = request.body;

        if(!id){
            return response.status(400).json({ message: 'Spell ID is mandatory for update'});
        }

        try{
            const updatedSpell = await spellService.updateSpell(request.body);

            if(!updatedSpell){
                return response.status(404).json({ message: 'Spell not found, please check the ID'});
            }
            
            console.log('Spell updated successfully: ', updatedSpell);
            return response.status(200).json(updatedSpell);
        }catch(error){
            console.log('Error occured during update: ', error);
            return response.status(500).json({ message: 'Failed to perform update'});
        }
    };

}

export default new spellsController();