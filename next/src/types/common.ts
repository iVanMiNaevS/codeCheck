export interface Meta {
	pagination: { page: number; pageCount: number; pageSize: number; total: number };
}

export interface MediaFormat {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string | null;
	size: number;
	width?: number;
	height?: number;
}

export interface Media {
	id: number;
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width?: number;
	height?: number;
	formats?: Record<string, MediaFormat>;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	createdAt: string;
	updatedAt: string;
}
