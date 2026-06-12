import { createContext } from "react";
import type { ITenureContext } from "../interfaces/contexts/ITenureContext";

export const TenureContext = createContext<ITenureContext | null>(null);
