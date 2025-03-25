import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
export default function Home() {
  return (
    <main className="homePage">
      <Image className="logo" src={logo} alt="logo" />
      <h1>OAK FILM STUDIOS</h1>
      <p>
        Hrvatska matematička stranka je jako lijepo ustanovila da je lako
        izmisljati ovaj paragraf i samo tipkati da popunimo prostor hihi.Izgleda
        da ovo nije dosta za popunu pa eto još malo tipkam i izmisljam nove
        rijeci olala je babobanana je robinjov sistemski znalac.
      </p>
      <p>
        Hrvatska matematička stranka je jako lijepo ustanovila da je lako
        izmisljati ovaj paragraf i samo tipkati da popunimo prostor hihi.Izgleda
        da ovo nije dosta za popunu pa eto još malo tipkam i izmisljam nove
        rijeci olala je babobanana je robinjov sistemski znalac.
      </p>
      <p>
        Hrvatska matematička stranka je jako lijepo ustanovila da je lako
        izmisljati ovaj paragraf i samo tipkati da popunimo prostor hihi.Izgleda
        da ovo nije dosta za popunu pa eto još malo tipkam i izmisljam nove
        rijeci olala je babobanana je robinjov sistemski znalac.
      </p>
      <div>
        <Link className="movies-link" href="/movies">
          Check Out Movies
        </Link>
      </div>
    </main>
  );
}
