import { z } from "zod";

export const SERVICE_CATEGORIES = [
  "Procurement & Logistics",
  "Pipeline Construction & Fabrication",
  "Flow Control & Measurement",
  "Process, Heat Transfer & Vessels",
  "Electrical & Instrumentation",
  "Civil & Structural Engineering",
  "Offshore Marine Services",
  "Fire Fighting & Safety Installation",
  "Personal Protective Equipment (PPE)",
  "Equipment Leasing & Manpower",
] as const;

export const rfqSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(160),
  email: z.string().trim().email("Enter a valid corporate email").max(200),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(40).regex(/^[+\d\s()-]+$/, "Digits, spaces, + ( ) - only"),
  company: z.string().trim().max(200).optional(),
  category: z.enum(SERVICE_CATEGORIES, { message: "Select a service category" }),
  location: z.string().trim().min(2, "Enter the project location").max(200),
  notes: z.string().trim().min(15, "Please provide at least 15 characters of specification detail").max(5000),
  attachmentName: z.string().max(260).optional(),
});

export type RfqInput = z.infer<typeof rfqSchema>;
