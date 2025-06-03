import React from "react";

async function Language({ params }: { params: Promise<{ langId: string }> }) {
  const { langId } = await params;
  return (
    <div>
      <h1>this content are in this {langId} language</h1>
    </div>
  );
}

export default Language;
