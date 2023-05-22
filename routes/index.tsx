import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
import { EditorContext } from "../context/EditorContext.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      {/* <Counter /> */}
      <main>
        <Layout>
          <EditorContext.Provider
            value={{
              mensajes: [],
              isEditing: [],
              numberOfRows: [],
            }}
          >
            <Counter />
          </EditorContext.Provider>
        </Layout>
      </main>
    </>
  );
}
