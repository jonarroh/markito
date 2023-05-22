import { JSX } from "preact";

export default function Layout(props: { children: JSX.Element }) {
  return (
    <div class="grid grid-cols-12 min-h-screen min-w-screen text-white">
      <section class=" bg-[#383838] p-12 col-span-12 sm:col-span-12 md:col-span-9">
        {props.children}
      </section>
      <aside class=" bg-[#1E1E1E] p-12 hidden sm:hidden md:col-span-3 md:block">
        <p>
          login
        </p>
      </aside>
    </div>
  );
}
