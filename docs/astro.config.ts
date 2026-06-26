import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightThemeExquisitus from 'starlight-theme-exquisitus';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Exquisitus',
			description:
				'A Starlight documentation theme at the pinnacle of readability and beauty.',
			plugins: [starlightThemeExquisitus()],
			social: [
				{
					href: 'https://github.com/anaxite/starlight-theme-exquisitus',
					icon: 'github',
					label: 'GitHub',
				},
			],
			sidebar: [
				{ label: 'Start Here', items: ['getting-started'] },
				{ label: 'Showcase', items: [{ autogenerate: { directory: 'showcase' } }] },
			],
			lastUpdated: true,
			pagination: true,
		}),
	],
});
