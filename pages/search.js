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
  const useDummyText = true;
  const startIndex = context.query.start || "0";
  console.log(context.query.start);
  const data = useDummyText
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=&cx=79a735bcc9114d334&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());
  return {
    props: {
      results: data,
    },
  };
}
