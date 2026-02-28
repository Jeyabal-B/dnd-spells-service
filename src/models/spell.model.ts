import mongoose, { Document, Schema } from 'mongoose';

export interface SpellDocument extends Document {
    id?: number;
    name: string;
    level: number;
    castingTime: string;
    duration: string;
    range: string;
    school: string;
    damageTypes?: string[];
    source: string;
    prepared: boolean;
    known: boolean;
}

const SpellSchema = new Schema<SpellDocument>({
    name: { type: String, required:true},
    level: { type: Number, required:true},
    castingTime: { type: String, required:true},
    duration: { type: String, required:true},
    range: { type: String, required:true},
    school: { type: String, required:true},
    damageTypes: { type: [String], default: []},
    source: { type: String, required:true},
    prepared: { type: Boolean, default: false},
    known: { type: Boolean, default: false}
});

export const SpellModel = mongoose.model<SpellDocument>('Spell', SpellSchema);