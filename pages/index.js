import Head from "next/head";
import Body from "../Components/HomePage/Body";
import Footer from "../Components/HomePage/Footer";
import Header from "../Components/HomePage/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/google.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
      <Footer />
    </div>
  );
}
