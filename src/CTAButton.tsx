import React from "react";

export function CTAButton({ title, onClick }: { title: string; onClick: () => void }) {
  return <button style={{ fontSize: 21.76 }} onClick={onClick}>{title}</button>;
}
