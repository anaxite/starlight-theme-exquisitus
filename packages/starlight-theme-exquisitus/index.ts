import type { StarlightPlugin } from "@astrojs/starlight/types";

import { overrideComponents } from "./libs/starlight";

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
    name: "starlight-theme-exquisitus",
    hooks: {
      "config:setup"({ config, logger, updateConfig }) {
        const userExpressiveCodeConfig =
          !config.expressiveCode || config.expressiveCode === true
            ? {}
            : config.expressiveCode;

        updateConfig({
          components: overrideComponents(config, ["Hero"], logger),
          customCss: [
            ...(config.customCss ?? []),
            // `layers` first: it declares the cascade order the rest rely on.
            "starlight-theme-exquisitus/styles/layers",
            "starlight-theme-exquisitus/styles/fonts",
            "starlight-theme-exquisitus/styles/tokens",
            "starlight-theme-exquisitus/styles/base",
            "starlight-theme-exquisitus/styles/prose",
          ],
          expressiveCode:
            config.expressiveCode === false
              ? false
              : {
                  themes: ["vitesse-dark", "vitesse-light"],
                  ...userExpressiveCodeConfig,
                  styleOverrides: {
                    // Code-area colors, mono font, and a hairline panel border.
                    // The IDE frame/title-bar chrome is reworked structurally in
                    // base.css (caption-above + letterpress); these tokens carry
                    // the colors EC composes into its own rules.
                    codeBackground: "var(--sl-exquisitus-code-bg)",
                    codeFontFamily: "var(--sl-font-mono)",
                    borderColor: "var(--sl-color-hairline)",
                    borderWidth: "1px",
                    // 0.5rem (md) rather than the cards' 0.75rem (xl): code reads
                    // as a tighter typeset block, distinct from UI cards.
                    borderRadius: "0.5rem",
                    ...userExpressiveCodeConfig.styleOverrides,
                    frames: {
                      editorBackground: "var(--sl-exquisitus-code-bg)",
                      terminalBackground: "var(--sl-exquisitus-code-bg)",
                      // No resting shadow (Flat-At-Rest); depth is the letterpress
                      // edge in base.css, the hairline border, and the tonal fill.
                      frameBoxShadowCssValue: "none",
                      // "Copied" tooltip as a quiet ink chip (see copy-button
                      // styling in base.css).
                      tooltipSuccessBackground: "var(--sl-color-gray-1)",
                      tooltipSuccessForeground: "var(--sl-color-bg)",
                      ...userExpressiveCodeConfig.styleOverrides?.frames,
                    },
                    textMarkers: {
                      // Diffs as proof-correction marks: a soft band carries the
                      // familiar line-highlight convention, while the +/- gutter
                      // glyph is the non-color cue (WCAG 1.4.1) that distinguishes
                      // insert from delete for red-green colorblind readers. The
                      // glyph is therefore driven from the high-contrast (-high)
                      // ramp shade — mode-aware: dark on the light panel, bright on
                      // the dark one — independent of the soft band tint.
                      insBackground:
                        "color-mix(in oklab, var(--sl-color-green) 11%, transparent)",
                      delBackground:
                        "color-mix(in oklab, var(--sl-color-red) 11%, transparent)",
                      insBorderColor:
                        "color-mix(in oklab, var(--sl-color-green) 38%, transparent)",
                      delBorderColor:
                        "color-mix(in oklab, var(--sl-color-red) 38%, transparent)",
                      insDiffIndicatorColor: "var(--sl-color-green-high)",
                      delDiffIndicatorColor: "var(--sl-color-red-high)",
                      ...userExpressiveCodeConfig.styleOverrides?.textMarkers,
                    },
                  },
                },
        });
      },
    },
  };
}
