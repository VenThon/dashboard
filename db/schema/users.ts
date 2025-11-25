import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),

  username: text("username").notNull(),

  email: text("email").notNull().unique(),

  password: text("password").notNull(),

  isVerified: boolean("is_verified").notNull().default(false),

  createdAt: timestamp("created_at").defaultNow(),

  updatedAt: timestamp("updated_at").defaultNow(),
});
