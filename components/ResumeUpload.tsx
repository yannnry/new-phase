"use client";
import React, { useState } from "react";
import { FileUpload } from "./ui/FileUpload";

export function ResumeUpload() {
  return (
    <div className=" max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload />
    </div>
  );
}
