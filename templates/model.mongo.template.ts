import { Schema, model, Document } from 'mongoose';

interface I{{ModelName}} extends Document {
  name: string;
  email: string;
}

const {{ModelName}}Schema = new Schema<I{{ModelName}}>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const {{ModelName}} = model<I{{ModelName}}>('{{ModelName}}', {{ModelName}}Schema);

export { {{ModelName}} };
