import { db } from "@/db";
import { rfqRequests } from "@/db/schema";
import { rfqSchema } from "@/lib/rfq";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  const parsed = rfqSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ ok: false, error: "Validation failed", issues: parsed.error.issues }, { status: 422 });
  }
  if (!db) {
    return Response.json(
      {
        ok: false,
        error:
          "The RFQ desk is temporarily unavailable. Please try again in a few minutes.",
      },
      { status: 503 },
    );
  }

  try {
    const d = parsed.data;
    const [row] = await db
      .insert(rfqRequests)
      .values({ ...d, company: d.company || null, attachmentName: d.attachmentName || null })
      .returning({ id: rfqRequests.id });
    return Response.json({ ok: true, reference: `AKS-RFQ-${String(row.id).padStart(5, "0")}` });
  } catch {
    return Response.json({ ok: false, error: "Could not save your request. Please try again." }, { status: 500 });
  }
}
