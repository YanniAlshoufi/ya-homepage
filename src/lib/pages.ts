export const pages: {
	name: string;
	link: string;
}[] = [
	{ name: 'Home', link: '/home' },
	{ name: 'About', link: '/about' },
	{ name: 'Projects', link: '/projects' },
	{ name: 'Contact', link: '/contact' },
] as const;
export const defaultPage = pages[0];
export type Page = (typeof pages)[number];
