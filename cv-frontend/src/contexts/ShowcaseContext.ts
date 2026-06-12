import { createContext } from "react";
import type { IShowcaseContext } from "../interfaces/contexts/IShowcaseContext";

export const ShowcaseContext = createContext<IShowcaseContext | null>(null);
