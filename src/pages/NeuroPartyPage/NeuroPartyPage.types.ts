import { FileContent } from 'use-file-picker/dist/interfaces';

export interface NeuroPartyProps {}

export type NeuroPartyFormFields = {
  image: FileContent | null;
  theme: string;
};
