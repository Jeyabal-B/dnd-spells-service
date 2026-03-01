import mongoose, { Document, Schema } from 'mongoose';

export interface SpellDocument extends Document {
  id?: number;

  name: string;
  level: number;
  school: string;

  castingTime: string;
  range: string;
  duration: string;

  components: {
    verbal: boolean;
    somatic: boolean;
    material: boolean;
    materialText?: string;
  };

  ritual: boolean;
  concentration: boolean;

  classes: string[];

  description: string;
  higherLevel?: string;

  damageTypes?: string[];
  savingThrow?: string;
  damageScaling?: Record<string, string>;

  tags?: string[];

  source: string;
  mechanic: string;
  prepared: boolean;
  known: boolean;
}

const SpellSchema = new Schema<SpellDocument>({
  id: { type: Number },

  name: { type: String, required: true },
  level: { type: Number, required: true },
  school: { type: String, required: true },

  castingTime: { type: String, required: true },
  range: { type: String, required: true },
  duration: { type: String, required: true },

  components: {
    verbal: { type: Boolean, required: true },
    somatic: { type: Boolean, required: true },
    material: { type: Boolean, required: true },
    materialText: { type: String }
  },

  ritual: { type: Boolean, required: true },
  concentration: { type: Boolean, required: true },

  classes: { type: [String], required: true },

  description: { type: String, required: true },
  higherLevel: { type: String },

  damageTypes: { type: [String], default: [] },
  savingThrow: { type: String },
  damageScaling: { type: Schema.Types.Mixed },

  tags: { type: [String], default: [] },

  source: { type: String, required: true },
  mechanic: { type: String, required: false },
  prepared: { type: Boolean, default: false },
  known: { type: Boolean, default: false }
});

export const SpellModel = mongoose.model<SpellDocument>('Spell', SpellSchema);