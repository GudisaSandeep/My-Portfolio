import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Sandeep Gudisa — AI Engineer, Founder of Fixyt, and Co-Founder of WhiteSea Labs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [heading, body, portrait] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/space-grotesk-500.ttf")),
    readFile(join(process.cwd(), "public/fonts/inter-400.ttf")),
    readFile(
      join(
        process.cwd(),
        "public/WhatsApp Image 2026-11-01 at 12.42.26 PM.jpeg",
      ),
    ),
  ]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f7f6f2",
          padding: "48px 56px",
          color: "#182023",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between",
            paddingRight: 35,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#2855e8",
              fontSize: 22,
              letterSpacing: 3,
            }}
          >
            SANDEEP GUDISA / MUMBAI
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Space",
              fontSize: 73,
              lineHeight: 1.08,
              letterSpacing: -4,
            }}
          >
            <span>AI engineer.</span>
            <span>Product builder.</span>
            <span style={{ color: "#2855e8" }}>Founder of Fixyt.</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 20,
              lineHeight: 1.7,
            }}
          >
            <span>Co-Founder, WhiteSea Labs</span>
            <span>Software Development Engineer, Vector</span>
          </div>
        </div>
        <img
          src={`data:image/jpeg;base64,${portrait.toString("base64")}`}
          alt=""
          width={330}
          height={534}
          style={{ objectFit: "cover", objectPosition: "50% 38%" }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space", data: heading, weight: 500 },
        { name: "Inter", data: body, weight: 400 },
      ],
    },
  );
}
