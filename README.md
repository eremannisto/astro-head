# Astro Head

A collection of composable Astro components for managing your HTML `<head>`: meta tags, favicons, Open Graph, Twitter cards, and more.

## Table of Contents

1. [Head](#head)
2. [Meta](#meta)
3. [Link](#link)
4. [Script](#script)
5. [Title](#title)
6. [Description](#description)
7. [Keywords](#keywords)
8. [Index](#index)
9. [Follow](#follow)
10. [Canonical](#canonical)
11. [Author](#author)
12. [ThemeColor](#themecolor)
13. [OpenGraph](#opengraph)
14. [Twitter](#twitter)
15. [Favicon](#favicon)

## Components

| Component     | Purpose                          |
|---------------|----------------------------------|
| `Author`      | Meta author                      |
| `Canonical`   | Canonical link                   |
| `Description` | Meta description                 |
| `Favicon`     | Favicon and touch icons          |
| `Follow`      | Robots follow/nofollow           |
| `Head`        | All-in-one head manager          |
| `Index`       | Robots index/noindex             |
| `Keywords`    | Meta keywords                    |
| `Link`        | Generic link elements            |
| `Meta`        | Generic meta elements            |
| `OpenGraph`   | Open Graph meta tags             |
| `Script`      | Script elements                  |
| `ThemeColor`  | Theme color meta tag             |
| `Title`       | Page title with template support |
| `Twitter`     | Twitter card meta tags           |

---

## Head

The `Head` component is the main component that handles all head elements in one place.

| Prop          | Type         | Description                          | Default     |
|---------------|--------------|--------------------------------------|-------------|
| `title`       | string       | Page title                           | undefined   |
| `template`    | string       | Title template with %s placeholder   | undefined   |
| `description` | string       | Meta description                     | undefined   |
| `image`       | string       | Social sharing image URL             | undefined   |
| `keywords`    | string[]     | Meta keywords array                  | undefined   |
| `index`       | boolean      | Allow search engine indexing         | undefined   |
| `follow`      | boolean      | Allow following links                | undefined   |
| `canonical`   | string       | Canonical URL                        | undefined   |
| `author`      | string       | Page author                          | undefined   |
| `themeColor`  | string       | Browser theme color                  | undefined   |
| `favicons`    | FaviconLink[]| Array of favicon configurations      | undefined   |

**Example:**

```astro
<Head 
  title="About Us" 
  description="Learn about our company" />
```

---

## Meta

| Prop        | Type   | Description                        | Default   |
|-------------|--------|------------------------------------|-----------|
| `charset`   | string | Character encoding                 | "utf-8"  |
| `content`   | string | Value of the meta tag              | undefined |
| `httpEquiv` | string | HTTP header equivalent             | undefined |
| `media`     | string | Media query for the meta tag       | undefined |
| `name`      | string | Name of the meta tag               | undefined |
| `property`  | string | Property (for Open Graph, etc.)    | undefined |
| `[key]`     | any    | Any additional custom attributes   | undefined |

**Example:**

```astro
<Meta name="viewport" content="width=device-width, initial-scale=1" />
<Meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<Meta property="og:type" content="website" />
```

---

## Link

| Prop             | Type     | Description                        | Default     |
|------------------|----------|------------------------------------|-------------|
| `rel`            | string   | Link relationship                  | undefined   |
| `href`           | string   | Link URL or path                   | undefined   |
| `as`             | string   | Resource type for preload, etc.    | undefined   |
| `blocking`       | string   | Blocking tokens                    | undefined   |
| `crossorigin`    | string   | CORS setting                       | undefined   |
| `disabled`       | boolean  | Disable stylesheet                 | undefined   |
| `fetchpriority`  | string   | Fetch priority                     | undefined   |
| `hreflang`       | string   | Language of resource               | undefined   |
| `imagesizes`     | string   | Preload image sizes                | undefined   |
| `imagesrcset`    | string   | Preload image srcset               | undefined   |
| `integrity`      | string   | Subresource integrity              | undefined   |
| `media`          | string   | Media query                        | undefined   |
| `referrerpolicy` | string   | Referrer policy                    | undefined   |
| `sizes`          | string   | Icon sizes                         | undefined   |
| `title`          | string   | Alternate stylesheet title         | undefined   |
| `type`           | string   | MIME type                          | undefined   |
| `[key]`          | any      | Any additional custom attributes   | undefined   |

**Example:**

```astro
<Link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
<Link rel="stylesheet" href="https://cdn.example.com/fonts/fake-font.css" />
<Link rel="preconnect" href="https://fonts.example.com" crossorigin="anonymous" />
```

---

## Script

| Prop             | Type     | Description                        | Default     |
|------------------|----------|------------------------------------|-------------|
| `src`            | string   | Script source URL                  | undefined   |
| `type`           | string   | Script MIME type                   | undefined   |
| `async`          | boolean  | Load script asynchronously         | undefined   |
| `defer`          | boolean  | Defer script execution             | undefined   |
| `crossorigin`    | string   | CORS setting                       | undefined   |
| `integrity`      | string   | Subresource integrity              | undefined   |
| `attributionsrc` | string   | Attribution reporting source       | undefined   |
| `blocking`       | string   | Blocking tokens                    | undefined   |
| `fetchpriority`  | string   | Fetch priority                     | undefined   |
| `nomodule`       | boolean  | Only for browsers without modules  | undefined   |
| `nonce`          | string   | Cryptographic nonce                | undefined   |
| `referrerpolicy` | string   | Referrer policy                    | undefined   |

**Example:**

```astro
<Script src="https://cdn.example.com/analytics.js" async />
<Script type="module">console.log('Hello from inline module!')</Script>
```

---

## Title

| Prop       | Type   | Description                | Default     |
|------------|--------|----------------------------|-------------|
| `value`    | string | Page title                 | undefined   |
| `template` | string | Title template with %s     | "%s"       |

**Example:**

```astro
<Title value="About Us" template="%s | Acme Studio" />
```

---

## Description

| Prop     | Type   | Description         | Default     |
|----------|--------|---------------------|-------------|
| `value`  | string | Meta description    | undefined   |

**Example:**

```astro
<Description value="A short page description." />
```

---

## Keywords

| Prop     | Type      | Description         | Default     |
|----------|-----------|---------------------|-------------|
| `value`  | string[]  | Meta keywords array | undefined   |

**Example:**

```astro
<Keywords value={["astro", "web", "components"]} />
```

---

## Index

| Prop     | Type    | Description                | Default     |
|----------|---------|----------------------------|-------------|
| `value`  | boolean | Allow search engine indexing| undefined   |

**Example:**

```astro
<Index value={true} />
```

---

## Follow

| Prop     | Type    | Description                | Default     |
|----------|---------|----------------------------|-------------|
| `value`  | boolean | Allow following links      | undefined   |

**Example:**

```astro
<Follow value={true} />
```

---

## Canonical

| Prop     | Type   | Description         | Default     |
|----------|--------|---------------------|-------------|
| `value`  | string | Canonical URL       | undefined   |

**Example:**

```astro
<Canonical value="https://example.com/page" />
```

---

## Author

| Prop     | Type   | Description         | Default     |
|----------|--------|---------------------|-------------|
| `value`  | string | Author name/content | undefined   |

**Example:**

```astro
<Author value="Jane Doe" />
```

---

## ThemeColor

| Prop     | Type   | Description                | Default     |
|----------|--------|----------------------------|-------------|
| `value`  | string | Theme color                | undefined   |

**Example:**

```astro
<ThemeColor value="#ffffff" />
```

---

## OpenGraph

| Prop         | Type   | Description                  | Default     |
|--------------|--------|------------------------------|-------------|
| `title`      | string | Open Graph title             | undefined   |
| `description`| string | Open Graph description       | undefined   |
| `image`      | string | Open Graph image URL         | undefined   |
| `url`        | string | Open Graph URL               | undefined   |
| `type`       | string | Open Graph type              | "website"  |

**Example:**

```astro
<OpenGraph 
  title="About Us" 
  description="Learn about our company" 
  image="/og.jpg" 
  url="https://example.com/about" 
/>
```

---

## Twitter

| Prop         | Type   | Description                  | Default                |
|--------------|--------|------------------------------|------------------------|
| `title`      | string | Twitter card title           | undefined              |
| `description`| string | Twitter card description     | undefined              |
| `image`      | string | Twitter card image URL       | undefined              |
| `card`       | string | Card type                   | "summary_large_image" |

**Example:**

```astro
<Twitter 
  title="About Us" 
  description="Learn about our company" 
  image="/twitter-og.jpg" 
  card="summary" 
/>
```

---

## Favicon

| Prop   | Type           | Description                | Default     |
|--------|----------------|----------------------------|-------------|
| `icons`| FaviconLink[]  | Array of favicon configs   | undefined   |

**Example:**

```astro
<Favicon icons={[
  { icon: "ico",   href: "/favicon.ico" },
  { icon: "png",   href: "/favicon-32.png", size: 32 },
  { icon: "apple", href: "/apple-touch-icon.png", size: 180 }
]} />
```

---

## Example setup

```astro
---
import Head from "@mannisto/components/Head.astro";
---

<Head
  title="About Us"
  template="%s | Acme Studio"
  description="Learn about our company and mission"
  image="/images/about-og.jpg"
  keywords={["company", "about", "mission"]}
  author="Acme Studio"
  themeColor="#1a1a1a"
  favicons={[
    { rel: "icon", href: "/favicon.ico" },
    { rel: "icon", href: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    { rel: "icon", href: "/favicon-192.png", type: "image/png", sizes: "192x192" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" }
  ]}
  links={[
    { rel: "stylesheet", href: "/styles/main.css" },
    { rel: "preload", href: "/fonts/inter.woff2", as: "font", crossorigin: "anonymous" }
  ]}
  scripts={[
    { src: "/scripts/analytics.js", async: true },
    { content: "console.log('Page loaded')", type: "module" }
  ]}
  meta={[
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "generator", content: "Astro" }
  ]}
>
<!-- Adding items through slot -->
<Script src="https://analytics.example?id=123456">
</Head>
```

