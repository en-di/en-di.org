#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import { buildBlog } from "./lib/blog.ts";

await buildBlog();
await dev(import.meta.url, "./main.ts");
