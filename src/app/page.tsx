import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="min-h-screen bg-black text-white">
        <h1>can u see this my nig?</h1>
      </main>
    </HydrateClient>
  );
}
