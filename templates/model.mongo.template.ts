import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface I{{ModelName}} extends Document {
  name: string;
  email: string;
  password: string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
  createdAt?: Date;
  updatedAt?: Date;
}

const {{ModelName}}Schema = new Schema<I{{ModelName}}>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
  },
  { timestamps: true }
);

// Hash password before save
{{ModelName}}Schema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
{{ModelName}}Schema.methods.comparePassword = async function (candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const {{ModelName}} = model<I{{ModelName}}>('{{ModelName}}', {{ModelName}}Schema);
export { {{ModelName}}, I{{ModelName}} };
