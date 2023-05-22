import { createContext } from "preact";

export const EditorContext = createContext({
  mensajes: ["Hola mundo"],
  isEditing: [true],
  numberOfRows: [1],
});
