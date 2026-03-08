import { SpellModel } from "../models/spell.model.js";

class spellService {
    async getAllSpells() {
        return await SpellModel.find().lean();
    }

    async addSpell(request: any) {
        return await SpellModel.create(request);
    }

    async addSpells(request: any) {
        return await SpellModel.insertMany(request, { ordered: false });
    }
}

export default new spellService();