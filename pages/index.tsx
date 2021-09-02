import "keen-slider/keen-slider.min.css";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Slider from "../components/Slider";
import iosBadge from "../public/app-store-badge.svg";
import androidBadge from "../public/google-play-badge.svg";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gray-900">
      <Head>
        <title>Neates — Notes near you</title>
        <meta
          name="description"
          content="Share notes with the rest of the world. Write something meaningful or celebrate a special occasion. Read notes left near you by other people."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col md:h-full md:flex-row">
        <Slider />
        <div className="flex flex-col justify-center p-8 w-full text-white md:w-2/3">
          <h1 className="font-bold text-6xl mb-4">Neates</h1>
          <p className="text-xl mb-4 text-gray-200">
            Neates is the app where you can celebrate important moments with a little note that marks its place and
            time! As you travel around the world you&apos;ll be able to see other users&apos; notes and feel more
            connected to the places and people around you.
          </p>
          <p className="text-xl italic text-gray-200">
            This app will be available soon on the Apple App Store and Google Play Store!
          </p>
          <div className="flex w-full h-24 space-x-2">
            <div className="w-40 relative">
              <Image src={iosBadge} alt="App Store Badge" layout="fill" objectFit="fill" />
            </div>
            <div className="w-40 relative">
              <Image src={androidBadge} alt="App Store Badge" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
