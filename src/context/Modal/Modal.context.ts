import { createContext } from "react"; 
import type {ModalContext as ModalContextType} from "../../types/ui";

const ModalContext = createContext<ModalContextType | null>(null)

export {ModalContext}