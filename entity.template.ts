import { slugify } from "https://deno.land/x/slugify/mod.ts";
const [entity, title] = Deno.args;

const knownEntities = ["post"];

if (!knownEntities.includes(entity)) {
  throw `Unknown entity "${entity}"`;
}

if (entity === "post") {
  const content = `---
title: "${title}"
date: ${new Date().toISOString()}
cover: "./cover.jpg"
author: ValeriaVG
tags: []
summary: |
  Lorem markdownum omnia rorantia nec hunc gerunt, Dymantida parente thalamis et
  omne respondere tellure. Animam respiramen facto et postquam certos hi eadem,
  ubique nos carinas aequoreae dixit hic includite meritis fecisses si mediis.
  Lacon Thybridis crura: fame tibi Acheronte. Nisi manus, Triptolemus vulnere
  nullam ilice victricia, reicerer?
---

## Vehebat austri praereptae tamen veniebat exsecrere et

![Image example](./cover.jpg)

Lorem markdownum omnia rorantia nec hunc gerunt, Dymantida parente thalamis et
omne respondere tellure. Animam respiramen facto et postquam certos hi eadem,
ubique nos carinas aequoreae dixit hic includite meritis fecisses si mediis.
Lacon Thybridis crura: fame tibi Acheronte. Nisi manus, Triptolemus vulnere
nullam ilice victricia, reicerer?

- Mortalia et verba vulnere relictum in procul
- Meruit vomunt et pars in et
- Saturnia et igitur lateque
- Non parvae Lyrcea habet gemmantia digitis illis
- Neu abrepti quae
`;
  const slug = slugify(title, { lower: true });
  await Deno.mkdir(`./content/${slug}`);
  await Deno.writeFile(
    `./content/${slug}/index.md`,
    new TextEncoder().encode(content),
    { createNew: true }
  );
  await Deno.copyFile("./cover.jpg", `./content/${slug}/cover.jpg`);
}
