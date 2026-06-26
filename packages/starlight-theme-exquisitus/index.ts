import type { StarlightPlugin } from '@astrojs/starlight/types';

import { overrideComponents } from './libs/starlight';

/**
 * Exquisitus — a Starlight theme tuned for the pinnacle of readability and
 * beauty. Self-hosts its three OFL typefaces, replaces Starlight's palette with
 * a WCAG-AA OKLCH system (light + dark), and refines the core chrome.
 *
 * @example
 * // astro.config.mjs
 * starlight({
 *   title: 'Docs',
 *   plugins: [starlightThemeExquisitus()],
 * })
 */
export default function starlightThemeExquisitus(): StarlightPlugin {
	return {
		name: 'starlight-theme-exquisitus',
		hooks: {
			'config:setup'({ config, logger, updateConfig }) {
				const userExpressiveCodeConfig =
					!config.expressiveCode || config.expressiveCode === true ? {} : config.expressiveCode;

				updateConfig({
					components: overrideComponents(config, ['Hero'], logger),
					customCss: [
						...(config.customCss ?? []),
						// `layers` first: it declares the cascade order the rest rely on.
						'starlight-theme-exquisitus/styles/layers',
						'starlight-theme-exquisitus/styles/fonts',
						'starlight-theme-exquisitus/styles/tokens',
						'starlight-theme-exquisitus/styles/base',
						'starlight-theme-exquisitus/styles/prose',
					],
					expressiveCode:
						config.expressiveCode === false
							? false
							: {
									themes: ['vitesse-dark', 'vitesse-light'],
									...userExpressiveCodeConfig,
									styleOverrides: {
										// Code-area colours + mono font only; frame/title-bar chrome
										// stays at Expressive Code's defaults.
										codeBackground: 'var(--sl-exquisitus-code-bg)',
										codeFontFamily: 'var(--sl-font-mono)',
										...userExpressiveCodeConfig.styleOverrides,
										frames: {
											editorBackground: 'var(--sl-exquisitus-code-bg)',
											terminalBackground: 'var(--sl-exquisitus-code-bg)',
											...userExpressiveCodeConfig.styleOverrides?.frames,
										},
									},
								},
				});
			},
		},
	};
}
