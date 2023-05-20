import { marked } from "marked";
import { useSignal } from "@preact/signals";
import { apply, css } from "twind/css";
import { useState } from "preact/hooks";

export default function Counter() {
  const mensaje = useSignal<string[]>(["Hola", "Mundo"]);
  const [isEditing, setIsEditing] = useState<boolean[]>([true, false]);
  const numberOfRows = useSignal<number[]>([1, 1]);
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
      if (e.key === "Enter") {
        e.preventDefault();
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
      }
    }
  };

  const handleBlur = (e: FocusEvent, i: number) => {
    const target = e.target as HTMLTextAreaElement;
    mensaje.value[i] = target.value;
    setIsEditing((prev) =>
      prev.map((value, index) => index === i ? true : value)
    );
    if (i === mensaje.value.length - 1) {
      if (mensaje.value[i] !== "") {
        numberOfRows.value = [
          ...numberOfRows.value,
          1,
        ];
      }
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
                  cols={30}
                  rows={1}
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

// {isEditing.value
//   ? (
//     <div
//       onClick={() => {
//         isEditing.value = false;
//       }}
//     >
//       <div
//         // deno-lint-ignore no-explicit-any
//         class={prose as any}
//         dangerouslySetInnerHTML={{
//           __html: marked(`${mensaje}`),
//         }}
//       />
//     </div>
//   )
//   : (
//     <div>
//       <textarea
//         cols={30}
//         rows={10}
//         onKeyPress={(e) => {
//           if (e.key === "Enter") {
//             const target = e.target as HTMLTextAreaElement;
//             mensaje.value = target.value;
//             isEditing.value = true;
//             console.log({
//               isEditing: isEditing.value,
//             });
//           }
//         }}
//       >
//       </textarea>
//     </div>
//   )}
