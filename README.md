# en-di.org

Our website is powered by [Deno Fresh](https://fresh.deno.dev/docs/introduction)
and therefore runs on [Deno](https://deno.com/runtime).

## Running locally

If you haven't yet,
[install Deno](https://deno.com/manual/getting_started/installation).

To start the project, run:

```
deno task start
```

This will watch the project directory and restart as necessary.

## Create a new post

To create a new blog post, run:

```
deno task new post "Example Post"
```

This command will create `content/example-post/index.md` with default metadata.
