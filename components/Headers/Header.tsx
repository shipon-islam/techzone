import { getCards } from "@/actions/card";
import Navbar from "./Navbar";
export const dynamic = "force-dynamic";
export default async function Header() {
  const card = await getCards();
  return (
    <div>
      <Navbar cards={card.length} />
    </div>
  );
}
