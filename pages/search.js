import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../Components/SearchPage/Header";
import SearchResults from "../Components/SearchPage/SearchResults";
import Response from "../Response";

function Search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/google.ico" />
      </Head>
      <Header />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyText = false;
  const startIndex = context.query.start || "0";
  console.log(context.query.start);
  const data = useDummyText
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=&cx=9867c733a42c0c643&q=${context.query.term}`
      ).then((res) => res.json());
  return {
    props: {
      results: data,
    },
  };
}
