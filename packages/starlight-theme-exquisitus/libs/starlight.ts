import type { HookParameters } from "@astrojs/starlight/types";

type StarlightUserConfig = HookParameters<"config:setup">["config"];
type ComponentOverride = keyof NonNullable<StarlightUserConfig["components"]>;
// Derived from Starlight's own hook as the package declares no Astro dependency
type Logger = HookParameters<"config:setup">["logger"];

/**
 * Merge the theme's component overrides into the user's Starlight config without
 * clobbering anything they've already set. If a slot is taken, warn and leave
 * the user's component in place — their configuration always wins over ours.
 */
export function overrideComponents(
	starlightConfig: StarlightUserConfig,
	overrides: ComponentOverride[],
	logger: Logger,
): StarlightUserConfig["components"] {
	const components = { ...starlightConfig.components };

	for (const override of overrides) {
		if (starlightConfig.components?.[override]) {
			logger.warn(
				`A \`<${override}>\` component override is already set in your Starlight config.`,
			);
			logger.warn(
				`To use starlight-theme-exquisitus's \`${override}\`, remove that override or render ` +
					`\`starlight-theme-exquisitus/overrides/${override}.astro\` from your own component.`,
			);
			continue;
		}

		components[override] =
			`starlight-theme-exquisitus/overrides/${override}.astro`;
	}

	return components;
}
