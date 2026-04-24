import { Title } from "../components/Title"
import { Header } from "../components/Header"
import { AsideBar } from "../components/AsideBar"
import { Dash } from "../components/Dash"

export default function Page() {
  return (
    <main>
        <Title />
        <AsideBar />
        <Header />
        <Dash/>
    </main>
  )
}
