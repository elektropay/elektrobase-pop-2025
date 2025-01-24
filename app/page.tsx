import Hero from "@/components/hero";

export default async function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-16 items-center">
      <main className="flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Integrations</h2>
        
      </main>
      </div>
    </>
  );
}
