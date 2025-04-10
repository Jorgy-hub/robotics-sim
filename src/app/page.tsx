import Image from "next/image";
import Field from "@/components/field/field";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Field></Field>
      </main>
    </div>
  );
}
