import { Media } from "@/types/common";

export type Filter = {
	title: string;
	isMultiply: boolean;
	filters: {
		title: string;
		slug: string;
	}[];
};

export interface Tag {
	id: number;
	documentId: string;
	title: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	slug: string;
}

export interface Mode {
	id: number;
	documentId: string;
	title: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	slug: string;
}

export interface Language {
	id: number;
	documentId: string;
	title: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	slug: string;
	icon: Media;
}

export interface ChallengeType {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	title: string;
	description: string;
	tags: Tag[];
	mode: Mode;
	languages: Language[];
}
