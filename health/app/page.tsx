
import Body from "./components/Body";
import Info from "./components/Info";
import Menu from "./components/Menu";
import PacientPhoto from "./components/PacientPhoto";

export default function Home() {
  return (
    <main className="flex flex-row max-w-screen-xl">
      <Menu></Menu>
      <PacientPhoto></PacientPhoto>
      <Body></Body>
      <Info></Info>
    </main>
  )
}
