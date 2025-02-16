import Loader from "@/components/ui/Loader";
import {
  LiveblocksProvider,
  ClientSideSuspense,
  RoomProvider,
} from "@liveblocks/react/suspense";

import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
