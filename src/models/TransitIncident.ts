import { Schema, model } from 'mongoose';

const TransitIncidentSchema = new Schema(
  {
    type: { type: String, required: true },
    description: { type: String },
    route: { type: String }
  },
  { timestamps: true }
);

export const TransitIncidentModel = model('TransitIncident', TransitIncidentSchema);
