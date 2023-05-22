import { marked } from "marked";
import { effect, useSignal } from "@preact/signals";
import { apply, css } from "twind/css";
import { useContext, useState } from "preact/hooks";
import { EditorContext } from "../context/EditorContext.tsx";

export default function Counter() {
  const editorContext = useContext(EditorContext);

  const mensaje = useSignal<string[]>(["# Hola mundo"]);
  const [isEditing, setIsEditing] = useState<boolean[]>(
    [true],
  );
  const numberOfRows = useSignal<number[]>([1]);
  const prose = css(
    apply`text-lg`,
    {
      h1: apply`text-2xl font-bold`,
      a: apply`text-blue-500 underline`,
      ul: apply`list-disc list-inside`,
    },
  );

  const handleKeyPress = (e: KeyboardEvent, i: number) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      mensaje.value[i] = target.value;
      setIsEditing((prev) =>
        prev.map((value, index) => index === i ? true : value)
      );
      if (i === mensaje.value.length - 1) {
        numberOfRows.value[i] = 1;
        isEditing[i] = false;
      }
      console.log({
        mensaje: mensaje.value[i],
        isEditing: isEditing[i],
        numberOfRows: numberOfRows.value[i],
      });
    }
  };

  const handleBlur = (e: FocusEvent, i: number) => {
    const target = e.target as HTMLTextAreaElement;
    mensaje.value[i] = target.value;

    setIsEditing((prev) =>
      prev.map((value, index) => index === i ? true : value)
    );
    if (i === mensaje.value.length - 1) {
      numberOfRows.value = [
        ...numberOfRows.value,
        1,
      ];
    }
  };

  return (
    <>
      <main>
        {numberOfRows.value.map((_, i) => {
          if (isEditing[i]) {
            return (
              <div
                // deno-lint-ignore no-explicit-any
                class={prose as any}
                onClick={() => {
                  setIsEditing((prev) =>
                    prev.map((value, index) => index === i ? false : value)
                  );
                }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked(`${mensaje.value[i]}`),
                  }}
                />
              </div>
            );
          } else {
            return (
              <div>
                <textarea
                  class="w-full bg-transparent text-white"
                  cols={30}
                  rows={1}
                  onClick={() => {
                    console.log(i);
                  }}
                  value={mensaje.value[i]}
                  onKeyPress={(e) => {
                    handleKeyPress(e, i);
                  }}
                  onBlur={(e) => {
                    handleBlur(e, i);
                  }}
                >
                </textarea>
              </div>
            );
          }
        })}
      </main>
    </>
  );
}
