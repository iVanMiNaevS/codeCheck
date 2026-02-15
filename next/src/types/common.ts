export interface Filter {
	title: string;
	name: string;
	multiply: boolean;
	options: {
		text: string;
		value: string;
	}[];
}
