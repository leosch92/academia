import { Repetitions } from "./repetitions";

export interface Exercise {
    id: string;
    name: string;
    seriesQuantity: number;
    repetitions: Repetitions;
    weight?: number;
}