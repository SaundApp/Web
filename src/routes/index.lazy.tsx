import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section>
      <div className="mt-40">
        <div className="flex flex-col gap-3">
          <h1 className="w-1/2">
            Et consectetur magna tempor aliqua mollit cupidatat eu aute est anim
            enim Lorem laboris.
          </h1>
          <p className="muted w-1/3">
            Esse excepteur nostrud et sint eiusmod ad ullamco occaecat. Do esse
            eiusmod non commodo sit sint elit officia enim ullamco officia
            Lorem.
          </p>
          <Button className="w-fit rounded-2xl">About Us</Button>
        </div>
      </div>
    </section>
  );
}
