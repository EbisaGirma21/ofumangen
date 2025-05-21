import { Schema, model, Document } from 'mongoose';

// Interface representing a {{ModelName}} document in MongoDB
interface I{{ModelName}} extends Document {
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Schema definition
const {{ModelName}}Schema = new Schema<I{{ModelName}}>(
  {
    name: {
      type: String,
      required: true,
      index: true, // For search functionality
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

// Create and export the model
const {{ModelName}} = model<I{{ModelName}}>('{{ModelName}}', {{ModelName}}Schema);
export { {{ModelName}}, I{{ModelName}} };
