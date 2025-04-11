'use client';
import Image from "next/image";
import Field from "@/components/field/field";
import Editor from "@/components/editor/editor";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("console.log('hello world!');");
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2">
      <main className="flex flex-col row-start-2">
        <Editor value={value} setValue={setValue}></Editor>
        <Field value ={value}></Field>
      </main>
    </div>
  );
}
