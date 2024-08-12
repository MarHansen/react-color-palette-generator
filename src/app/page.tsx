import Head from "next/head";
import ColorPaletteGenerator from "./palette";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Color Palette Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <ColorPaletteGenerator />
      </main>
    </div>
  );
};

export default Home;
