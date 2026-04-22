import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";

export const usersTable = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => nanoid(20)),
  username: text("username").unique().notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});
