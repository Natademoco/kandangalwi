import Hero from "@/components/Hero";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Realms } from "@/components/Realms";
import { Team } from "@/components/Team";
import { Discord } from "@/components/Discord";

export default function Home() {
  return (
    <div>
      <BackgroundLines>
        <Hero />
      </BackgroundLines>
      <Realms />
      <Team />
      <Discord />
    </div>
  );
}
