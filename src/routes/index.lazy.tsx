import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section>
      <div className="flex items-center justify-center mx-auto mt-40">
        <div className="flex flex-col gap-3">
          <h1 className="bg-gradient-to-r from-primary to-[#E0E8F3] text-transparent bg-clip-text">
            Discover.
          </h1>
          <h1 className="bg-gradient-to-r from-primary to-[#E0E8F3] text-transparent bg-clip-text">
            Listen.
          </h1>
          <h1 className="bg-gradient-to-r from-primary to-[#E0E8F3] text-transparent bg-clip-text">
            Repeat.
          </h1>
          <p className="muted w-2/3">
            Saund is a community of music lovers who share their playlists,
            recommendations, and opinions with each other. Whether you want to
            discover new genres, explore different moods, or follow your
            favorite artists, Saund helps you find your perfect tune.
          </p>
          <Button className="w-fit rounded-2xl">Get Started</Button>
        </div>

        <img
          src="/header.png"
          alt="Header"
          draggable={false}
          className="w-2/5"
        />
      </div>
    </section>
  );
}
