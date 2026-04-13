import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BillKaro | WhatsApp-First Smart Invoicing by CelerApps",
  description:
    "WhatsApp pe Bill Banao, Paisa Apne Aap Pao. Turn WhatsApp into your invoicing + collection machine.",
  icons: {
    icon: "/billkaro/icon.png",
    apple: "/billkaro/apple-icon.png",
  },
};

export default function BillKaroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
