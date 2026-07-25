import fs from "node:fs";
import path from "node:path";

const CONTENT_DIR = "content";

export default function (eleventyConfig) {
  // Static assets (CSS, solver JS) are copied through untouched.
  eleventyConfig.addPassthroughCopy("assets");

  // Maps are standalone SVG files living next to the content that uses them.
  // `inlineSvg` embeds one into the page at build time so each page stays a
  // single self-contained HTML file.
  eleventyConfig.addFilter("inlineSvg", (relPath, raid) => {
    const p = path.join(CONTENT_DIR, "raids", raid, "maps", relPath);
    if (!fs.existsSync(p)) {
      throw new Error(`inlineSvg: no such map "${relPath}" for raid "${raid}" (${p})`);
    }
    return fs.readFileSync(p, "utf8").trimEnd();
  });

  // All encounters across all raids, ordered. Templates filter by raid slug.
  eleventyConfig.addCollection("encounters", (api) =>
    api
      .getFilteredByGlob(`${CONTENT_DIR}/raids/*/encounters/*.md`)
      .sort((a, b) => a.data.number - b.data.number)
  );

  eleventyConfig.addFilter("byRaid", (encounters, raid) =>
    (encounters ?? []).filter((e) => e.data.raid === raid)
  );

  // Previous/next encounter for the footer page navigation.
  eleventyConfig.addFilter("encounterByNumber", (encounters, raid, number) =>
    (encounters ?? []).find((e) => e.data.raid === raid && e.data.number === number) ?? null
  );

  return {
    dir: {
      input: CONTENT_DIR,
      includes: "../_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
