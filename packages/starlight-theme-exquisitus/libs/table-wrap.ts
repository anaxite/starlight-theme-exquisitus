/**
 * Client-side table wrapper — restores table semantics for assistive tech.
 *
 * Why this exists: prose.css makes wide markdown tables scrollable with
 * `display: block` on the `<table>` itself (Starlight core does the same).
 * That works visually, but changing a table's display strips its implicit
 * `role="table"` in some browsers, so screen readers lose row/column
 * navigation. The proper fix is a scroll-container *wrapper* around the table
 * (Adrian Roselli's responsive-table pattern), keeping `display: table`.
 *
 * Why client-side rather than at build time: as of Astro 7 the default
 * Markdown pipeline is Sätteri, configured through the single, non-mergeable
 * `markdown.processor` slot — a published plugin writing to it risks
 * clobbering the site's own processor config. The legacy `rehypePlugins`
 * escape hatch is deprecated and requires `@astrojs/markdown-remark`, which
 * a theme cannot force into a consumer's dependencies. So the wrap happens
 * here, as progressive enhancement: no-JS readers keep today's CSS-only
 * scroll behavior (prose.css retains `display: block` as the fallback),
 * JS readers get real table semantics plus a keyboard-reachable region.
 *
 * Injected by index.ts via `injectScript("page", …)`, which runs on initial
 * load; the `astro:page-load` listener covers view-transition navigations.
 */
export const tableWrapScript = `
(() => {
	// Scroll affordances (role, label, tab stop) only belong on tables that
	// actually overflow — a tab stop on every small table is keyboard noise.
	// Toggled live so viewport resizes stay correct.
	const observer = new ResizeObserver((entries) => {
		for (const { target } of entries) {
			if (target.scrollWidth > target.clientWidth) {
				target.setAttribute("role", "region");
				target.setAttribute("aria-label", target.dataset.label);
				target.setAttribute("tabindex", "0");
			} else {
				target.removeAttribute("role");
				target.removeAttribute("aria-label");
				target.removeAttribute("tabindex");
			}
		}
	});

	const wrapTables = () => {
		const tables = document.querySelectorAll(
			".sl-markdown-content table:not(:where(.not-content *))",
		);
		for (const table of tables) {
			// Idempotent: astro:page-load can fire on already-processed DOM.
			if (table.parentElement?.classList.contains("exquisitus-table-wrap"))
				continue;
			const wrapper = document.createElement("div");
			wrapper.className = "exquisitus-table-wrap";
			wrapper.dataset.label =
				table.querySelector(":scope > caption")?.textContent?.trim() ||
				"Scrollable table";
			table.replaceWith(wrapper);
			wrapper.append(table);
			observer.observe(wrapper);
		}
	};

	wrapTables();
	document.addEventListener("astro:page-load", wrapTables);
})();
`;
