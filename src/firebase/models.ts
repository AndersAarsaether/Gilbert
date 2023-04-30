import type { DocumentData } from "firebase/firestore";

export interface Task extends DocumentData {
  description: string;
  category: string;
}
