import { create } from 'zustand';

interface Props {
	text: string;
	isEditing: boolean;
	setText: (text: string) => void;
	setIsEditing: (isEditing: boolean) => void;
}

export const useTextMD = create<Props>((set, get) => ({
	text: '',
	isEditing: false,
	setText: (text: string) => set({ text }),
	setIsEditing: (isEditing: boolean) => set({ isEditing })
}));
