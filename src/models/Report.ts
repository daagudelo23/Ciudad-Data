import { Schema, model } from 'mongoose';

const GeoReportSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String }
  },
  { timestamps: true }
);

export const GeoReportModel = model('GeoReport', GeoReportSchema);
