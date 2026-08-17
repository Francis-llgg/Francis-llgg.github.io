import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const sourceFiles = [
  new URL("../app/page.tsx", import.meta.url),
  new URL("../app/project-data.ts", import.meta.url),
  new URL("../app/research/mathbench/MathBenchDetailClient.tsx", import.meta.url),
];

function extractObject(source, openingBrace) {
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let index = openingBrace; index < source.length; index += 1) {
    const char = source[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(openingBrace, index + 1);
    }
  }
  throw new Error("Unclosed locale object");
}

function localeBlocks(source, locale) {
  const blocks = [];
  const marker = new RegExp(`\\b${locale}:\\s*\\{`, "g");
  for (const match of source.matchAll(marker)) {
    const openingBrace = source.indexOf("{", match.index);
    blocks.push(extractObject(source, openingBrace));
  }
  return blocks;
}

function stringLiterals(block) {
  return [...block.matchAll(/"((?:\\.|[^"\\])*)"/g)].map((match) => match[1]);
}

function cjkCount(value) {
  return (value.match(/[\u3400-\u9fff]/g) ?? []).length;
}

function englishWordCount(value) {
  return (value.match(/\b[A-Za-z][A-Za-z'-]*\b/g) ?? []).length;
}

test("localized content contains no long opposite-language passages", async () => {
  const sources = await Promise.all(sourceFiles.map((file) => readFile(file, "utf8")));
  let englishBlockCount = 0;
  let chineseBlockCount = 0;

  for (const source of sources) {
    for (const block of localeBlocks(source, "en")) {
      englishBlockCount += 1;
      for (const value of stringLiterals(block)) {
        assert.ok(
          cjkCount(value) < 8,
          `English content contains a Chinese passage: ${value}`,
        );
      }
    }

    for (const block of localeBlocks(source, "zh")) {
      chineseBlockCount += 1;
      for (const value of stringLiterals(block)) {
        const looksLikeEnglishParagraph =
          englishWordCount(value) >= 12 &&
          cjkCount(value) < 5 &&
          /[.!?]/.test(value);
        assert.ok(
          !looksLikeEnglishParagraph,
          `Chinese content contains an English passage: ${value}`,
        );
      }
    }
  }

  assert.ok(englishBlockCount >= 5, "Expected English content for the home page, projects and publication");
  assert.ok(chineseBlockCount >= 5, "Expected Chinese content for the home page, projects and publication");
});
