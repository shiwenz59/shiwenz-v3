import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SZ's Resume",
};

export default function ResumePage() {
  return (
    <iframe
      src="/resume.pdf"
      style={{ width: "100vw", height: "100vh", border: "none", display: "block" }}
      title="SZ's Resume"
    />
  );
}
