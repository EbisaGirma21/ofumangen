# 🚀 ofumangen

**ofumangen** is a **TypeScript-powered CLI tool** that automates the generation of Express.js backend code. Quickly scaffold **models, controllers, and routes** with best practices in mind, reducing boilerplate and speeding up development.

✔ **TypeScript-first**  
✔ **Supports MongoDB (Mongoose) & SQL (Sequelize)**  
✔ **Modular & customizable templates**  
✔ **Zero-config defaults**

> **Name Meaning**  
> The name **Ofumangen** comes from Afaan Oromo:
>
> - **"Ofumaan"** means "by itself" or "automatically"
> - **"gen"** is a short form of **generator**  
>   Together, **Ofumangen** means "self-generator".

---

## ⚠️ **Required Development Dependency**

Since this project uses TypeScript with Node.js built-in modules, you must install Node.js types if you're compiling TypeScript manually or using it in dev mode:

```bash
npm install -g ts-node typescript
```

and

```bash
npm install --save-dev @types/node
```

## 📦 Installation

```bash
npm install ofumangen
# or
yarn add  ofumangen
```

---

## 🛠 Usage

### **1. Generate a Model**

Choose your database type:

| Database       | Command                                             |
| -------------- | --------------------------------------------------- |
| **MongoDB**    | `npx ofumangen generate model mongo <ModelName>`    |
| **MySQL**      | `npx ofumangen generate model mysql <ModelName>`    |
| **PostgreSQL** | `npx ofumangen generate model postgres <ModelName>` |

**Example**:

```bash
npx ofumangen generate model mongo User
```

---

### **2. Generate a Controller**

```bash
npx ofumangen generate controller <ModelName>
```

**Example**:

```bash
npx ofumangen generate controller User
```

---

### **3. Generate a Route**

```bash
npx ofumangen generate route <ModelName>
```

**Example**:

```bash
npx ofumangen generate route User
```

---

## 🏗 Example Integration

After generation, add express dependency and integrate the files into your Express app:

```bash
npm install -D typescript ts-node-dev @types/node @types/express
```

```bash
 npx tsc --init
```

```ts
// src/app.ts
import express from "express";
import userRoutes from "./routes/user"; // Auto-generated
import connectDB from "./config/db";

const app = express();
app.use(express.json());

connectDB();

// Register routes
app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

```bash
npm install -D @types/mongoose
```

```ts
// config/db.ts
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
```

```bash
npm run dev
```

---

## 📂 Generated File Structure

```
/
├── models/
│   └── User.ts          # Mongoose/Sequelize model
├── controllers/
│   └── UserController.ts # Type-safe controller
└── routes/
    └── user.ts          # Express router
```

---

## 🔧 Customization

Override default templates by placing custom files in:

```
.ofumangen-templates/
  ├── model.mongo.ts
  ├── controller.ts
  └── route.ts
```

---

## 📜 License

MIT © Ebisa Girma

---

### ✨ **Why ofumangen?**

- **Saves time** by automating repetitive code.
- **Enforces consistency** across your codebase.
- **Flexible** with support for multiple databases.

**Try it now!**

```bash
npx ofumangen generate model mongo Product
```

---

## License

This project is licensed under the MIT License © 2025 [Ebisa Girma](https://github.com/EbisaGirma21)
