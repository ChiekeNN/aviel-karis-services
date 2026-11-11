import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const rfqRequests = pgTable("rfq_requests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  company: varchar("company", { length: 200 }),
  category: varchar("category", { length: 80 }).notNull(),
  location: varchar("location", { length: 200 }).notNull(),
  notes: text("notes").notNull(),
  attachmentName: varchar("attachment_name", { length: 260 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
