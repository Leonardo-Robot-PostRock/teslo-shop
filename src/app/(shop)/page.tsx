import Image from "next/image";
import { titleFont } from '@/config/fonts';

export default function Home() {
  return (
    <main>
      <h1>Hola mundo</h1>
      <h1 className={titleFont.className}>Hola mundo</h1>
    </main>
  );
}
