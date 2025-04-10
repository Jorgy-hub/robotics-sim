import Image from "next/image";
import Field from "@/components/field/field";
import Editor from "@/components/editor/editor";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2">
      <main className="flex flex-col row-start-2">
        <Editor></Editor>
        <Field></Field>
      </main>
    </div>
  );
}
