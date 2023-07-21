'use client';

import { create } from 'zustand';

interface State {
	text: string;
	isEditing: boolean;
	setText: (text: string) => void;
	setIsEditing: (isEditing: boolean) => void;
}

export const useTextMD = create<State>(set => ({
	text: '',
	isEditing: false,
	setText: (text: string) => set({ text }),
	setIsEditing: (isEditing: boolean) => set({ isEditing })
}));
