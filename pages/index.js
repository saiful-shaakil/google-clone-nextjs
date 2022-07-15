import Head from "next/head";
import Header from "../Components/Header";
import Body from "../Components/Body";
import Footer from "../Components/Footer";

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
