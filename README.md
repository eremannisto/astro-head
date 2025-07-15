# Astro Head

A collection of composable Astro components for managing your HTML `<head>`: meta tags, favicons, Open Graph, Twitter cards, and more.

## Table of Contents

| Component                     | Purpose                          |
|-------------------------------|----------------------------------|
| [`Author`](#author)           | Meta author                      |
| [`Canonical`](#canonical)     | Canonical link                   |
| [`Description`](#description) | Meta description                 |
| [`Favicon`](#favicon)         | Favicon and touch icons          |
| [`Follow`](#follow)           | Robots follow/nofollow           |
| [`Head`](#head)               | All-in-one head manager          |
| [`Index`](#index)             | Robots index/noindex             |
| [`Keywords`](#keywords)       | Meta keywords                    |
| [`Link`](#link)               | Generic link elements            |
| [`Meta`](#meta)               | Generic meta elements            |
| [`OpenGraph`](#opengraph)     | Open Graph meta tags             |
| [`Script`](#script)           | Script elements                  |
| [`ThemeColor`](#themecolor)   | Theme color meta tag             |
| [`Title`](#title)             | Page title with template support |
| [`Twitter`](#twitter)         | Twitter card meta tags           |

## Common Usecase

A common and recommended pattern is to let your `Layout` component manage your site's `<head>` tags using the `Head` component. This way, you can:
- Set default values in your `Layout`.
- Easily override these values from pages by passing props to the `Layout`.
- Keep your page files clean and focused on content, while your `Layout` handles all head-related logic and defaults.

You can also pass custom elements (for example: analytics scripts) as children to the `Head` component in your layout. If your project uses multiple different layouts, consider creating a top-level `Root` layout that manages all the Head logic. This way, your `Root` layout can wrap your other layouts as children, keeping your head management consistent across the entire site.

### Example:

```astro
---

// layouts/Layout.astro
import Head from "@mannisto/components/Head.astro";

interface Props {
  title?: string
  description?: string
  keywords?: string[]
  // Other props you want to make configurable from pages
}
const {
  title = "Default Title",
  description = "Default description foo faa lorem ipsum",
  keywords = ["Default", "Keywords"]
} = Astro.props;

---

<!DOCTYPE html>
<html lang="en">
  <Head
    title={title}
    template="%s | Acme Studio"
    description={description}
    image="/images/social-banner.jpg"
    keywords={keywords}
    author="Acme Studio"
    themeColor="#1a1a1a"
  >
    <script src="https://faa-analytics.example?id=123456"></script>
    <script src="https://foo-analytics.example?id=123456"></script>
  </Head>
  <body>
    <slot/>
  </body>
</html>
```

```astro
---

// pages/index.astro
import Root from "../layouts/Root.astro"

---

<Layout 
  title="Homepage" 
  description="Welcome to my foo faa lorem ipsum"
>
  <!-- My page content ... -->
</Layout>
```

## Components

### Author
| Prop     | Type     | Description         | Default     |
|----------|----------|---------------------|-------------|
| `value`  | `string` | Author name/content | `undefined` |

#### Passed as a prop
```astro
<Head author="Jane Doe" />
```

#### Used as a standalone component
```astro
---

import Head from "@mannisto/components/Author.astro";

---

<Author value="Jane Doe" />
```



<br>



### Canonical
| Prop     | Type     | Description   | Default     |
|----------|----------|---------------|-------------|
| `value`  | `string` | Canonical URL | `undefined` |

#### Passed as a prop
```astro
<Head canonical="https://example.com/page" />
```

#### Used as a standalone component
```astro
---

import Head from "@mannisto/components/Canonical.astro";

---

<Canonical value="https://example.com/page" />
```



<br>



### Description
| Prop     | Type     | Description      | Default     |
|----------|----------|------------------|-------------|
| `value`  | `string` | Meta description | `undefined` |

#### Passed as a prop
```astro
<Head description="A page description." />
```

#### Used as a standalone component
```astro
<Description value="A page description." />
```



<br>



### Favicon
| Prop       | Type             | Description              | Default       |
|------------|------------------|--------------------------|---------------|
| `favicons` | `FaviconLink[]`  | Array of favicon configs | `favicon.ico` |

By default the app expects one `favicon.ico` file in the root of the `public` folder, if the prop is left empty. Preset options are `ico`, `png`, `svg`, or `apple`.

#### Passed as a prop
```astro
<Head
  favicons={[
    { preset: "ico",   href: "/favicon/favicon.ico"                     },
    { preset: "png",   href: "/favicon/favicon-16.png",       size: 16  },
    { preset: "png",   href: "/favicon/favicon-32.png",       size: 32  },
    { preset: "png",   href: "/favicon/favicon-192.png",      size: 192 },
    { preset: "png",   href: "/favicon/favicon-512.png",      size: 512 },
    { preset: "apple", href: "/favicon/apple-touch-icon.png", size: 180 }
  ]}
/>
```

#### Used as a standalone component
```astro
---

import Head from "@mannisto/components/Favicon.astro";

---

<Favicon icons={[
  { preset: "ico", href: "favicon.ico" },
]} />
```



<br>



### Follow
| Prop     | Type      | Description           | Default     |
|----------|-----------|-----------------------|-------------|
| `value`  | `boolean` | Allow following links | `undefined` |

#### Passed as a prop
```astro
<Head follow={true} />
```

#### Used as a standalone component
```astro
---

import Head from "@mannisto/components/Follow.astro";

---

<Follow value={true} />
```



<br>



### Head
The `Head` component is the main component that handles all head elements in one place.

| Prop          | Type            | Description                        | Default         |
|---------------|-----------------|------------------------------------|-----------------|
| `title`       | `string`        | Page title                         | `"Untitled"`    |
| `template`    | `string`        | Title template with %s placeholder | `undefined`     |
| `description` | `string`        | Meta description                   | `undefined`     |
| `image`       | `string`        | Social sharing image URL           | `undefined`     |
| `keywords`    | `string[]`      | Meta keywords array                | `undefined`     |
| `index`       | `boolean`       | Allow search engine indexing       | `true`          |
| `follow`      | `boolean`       | Allow following links              | `true`          |
| `canonical`   | `string`        | Canonical URL                      | `undefined`     |
| `author`      | `string`        | Page author                        | `undefined`     |
| `themeColor`  | `string`        | Browser theme color                | `undefined`     |
| `favicons`    | `FaviconLink[]` | Array of favicon configurations    | `"favicon.ico"` |

```astro
---

import Head from "@mannisto/components/Head.astro";

---

<Head
  title="About Us"
  template="%s | Acme Studio"
  description="Learn about our company and mission"
  image="/images/social-banner.jpg"
  keywords={["company", "about", "mission"]}
  index={true}
  follow={true}
  canonical="https://example.com/about"
  author="Acme Studio"
  themeColor="#1a1a1a"
  favicons={[
    { icon: "ico",   href: "/favicon/favicon.ico"                     },
    { icon: "png",   href: "/favicon/favicon-16.png",       size: 16  },
    { icon: "png",   href: "/favicon/favicon-32.png",       size: 32  },
    { icon: "png",   href: "/favicon/favicon-192.png",      size: 192 },
    { icon: "png",   href: "/favicon/favicon-512.png",      size: 512 },
    { icon: "apple", href: "/favicon/apple-touch-icon.png", size: 180 }
  ]}
/>
```



<br>



### Index
| Prop     | Type      | Description                  | Default     |
|----------|-----------|------------------------------|-------------|
| `value`  | `boolean` | Allow search engine indexing | `undefined` |


### Passed as a prop
```astro
<Head index={true} />
```

### Used as a standalone component
```astro
---

import Head from "@mannisto/components/Index.astro";

---

<Index value={true} />
```



<br>



### Keywords
| Prop     | Type        | Description         | Default     |
|----------|-------------|---------------------|-------------|
| `value`  | `string[]`  | Meta keywords array | `undefined` |

#### Passed as a prop
```astro
<Head keywords={["astro", "web", "components"]} />
```

#### Used as a standalone component
```astro
---

import Head from "@mannisto/components/Keywords.astro";

---

<Keywords value={["astro", "web", "components"]} />
```



<br>



### Link
| Prop             | Type      | Description                      | Default     |
|------------------|-----------|----------------------------------|-------------|
| `rel`            | `string`  | Link relationship                | `undefined` |
| `href`           | `string`  | Link URL or path                 | `undefined` |
| `as`             | `string`  | Resource type for preload, etc.  | `undefined` |
| `blocking`       | `string`  | Blocking tokens                  | `undefined` |
| `crossorigin`    | `string`  | CORS setting                     | `undefined` |
| `disabled`       | `boolean` | Disable stylesheet               | `undefined` |
| `fetchpriority`  | `string`  | Fetch priority                   | `undefined` |
| `hreflang`       | `string`  | Language of resource             | `undefined` |
| `imagesizes`     | `string`  | Preload image sizes              | `undefined` |
| `imagesrcset`    | `string`  | Preload image srcset             | `undefined` |
| `integrity`      | `string`  | Subresource integrity            | `undefined` |
| `media`          | `string`  | Media query                      | `undefined` |
| `referrerpolicy` | `string`  | Referrer policy                  | `undefined` |
| `sizes`          | `string`  | Icon sizes                       | `undefined` |
| `title`          | `string`  | Alternate stylesheet title       | `undefined` |
| `type`           | `string`  | MIME type                        | `undefined` |
| `[key]`          | `any`     | Any additional custom attributes | `undefined` |

#### Passed as a prop
```astro
<Head
  links={[
    { rel: "icon", href: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    { rel: "stylesheet", href: "https://cdn.example.com/fonts/fake-font.css" },
    { rel: "preconnect", href: "https://fonts.example.com", crossorigin: "anonymous" }
  ]}
/>
```

#### Used as a standalone component
```astro
---

import Head from "@mannisto/components/Link.astro";

---

<Link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
<Link rel="stylesheet" href="https://cdn.example.com/fonts/fake-font.css" />
<Link rel="preconnect" href="https://fonts.example.com" crossorigin="anonymous" />
```



<br>



### Meta
| Prop        | Type     | Description                      | Default     |
|-------------|----------|----------------------------------|-------------|
| `charset`   | `string` | Character encoding               | `"utf-8"`   |
| `content`   | `string` | Value of the meta tag            | `undefined` |
| `httpEquiv` | `string` | HTTP header equivalent           | `undefined` |
| `media`     | `string` | Media query for the meta tag     | `undefined` |
| `name`      | `string` | Name of the meta tag             | `undefined` |
| `property`  | `string` | Property (for OpenGraph, etc.)   | `undefined` |
| `[key]`     | `any`    | Any additional custom attributes | `undefined` |

#### Passed as a prop
```astro
<Head 
  meta={[
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { httpEquiv: "X-UA-Compatible", content: "IE=edge" }
  ]}
/>
```

#### Used as a standalone component
```astro
---

import Head from "@mannisto/components/Meta.astro";

---

<Meta name="viewport" content="width=device-width, initial-scale=1" />
<Meta httpEquiv="X-UA-Compatible" content="IE=edge" />
```



<br>



### OpenGraph
| Prop         | Type     | Description                  | Default     |
|--------------|----------|------------------------------|-------------|
| `title`      | `string` | Open Graph title             | `undefined` |
| `description`| `string` | Open Graph description       | `undefined` |
| `image`      | `string` | Open Graph image URL         | `undefined` |
| `url`        | `string` | Open Graph URL               | `undefined` |
| `type`       | `string` | Open Graph type              | `"website"` |

If you use the `Head` component and do not provide OpenGraph props, it will automatically use the page's title, description, canonical URL, and image. You can override any of these by passing an `openGraph` prop to `Head`.

#### Passed as a prop
```astro
<Head openGraph={{ 
  title: "About Us", 
  description: "Learn about our company", 
  image: "/banner.png", 
  url: "https://example.com/about" 
}} />
```

#### Used as a standalone component
```astro
---

import Head from "@mannisto/components/OpenGraph.astro";

---

<OpenGraph 
  title="About Us" 
  description="Learn about our company" 
  image="/banner.png" 
  url="https://example.com/about" 
/>
```



<br>



### Script
| Prop             | Type       | Description                        | Default     |
|------------------|------------|------------------------------------|-------------|
| `src`            | `string`   | Script source URL                  | `undefined` |
| `type`           | `string`   | Script MIME type                   | `undefined` |
| `async`          | `boolean`  | Load script asynchronously         | `undefined` |
| `defer`          | `boolean`  | Defer script execution             | `undefined` |
| `crossorigin`    | `string`   | CORS setting                       | `undefined` |
| `integrity`      | `string`   | Subresource integrity              | `undefined` |
| `attributionsrc` | `string`   | Attribution reporting source       | `undefined` |
| `blocking`       | `string`   | Blocking tokens                    | `undefined` |
| `fetchpriority`  | `string`   | Fetch priority                     | `undefined` |
| `nomodule`       | `boolean`  | Only for browsers without modules  | `undefined` |
| `nonce`          | `string`   | Cryptographic nonce                | `undefined` |
| `referrerpolicy` | `string`   | Referrer policy                    | `undefined` |

#### Passed as a prop
```astro
<Head
  scripts={[
    { src: "https://cdn.example.com/analytics.js", async: true },
    { content: "console.log('Hello from inline module!')", type: "module" }
  ]}
/>
```

#### Used as a standalone component
```astro
---

import Head from "@mannisto/components/Script.astro";

---

<Script src="https://cdn.example.com/analytics.js" async />
<Script type="module">console.log('Hello from inline module!')</Script>
```



<br>



### ThemeColor
| Prop     | Type     | Description                | Default     |
|----------|----------|----------------------------|-------------|
| `value`  | `string` | Theme color                | `undefined` |

#### Passed as a prop
```astro
<Head themeColor="#ffffff" />
```

#### Used as a standalone component
```astro
---

import Head from "@mannisto/components/ThemeColor.astro";

---

<ThemeColor value="#ffffff" />
```


<br>



### Title
| Prop       | Type     | Description              | Default     |
|------------|----------|--------------------------|-------------|
| `value`    | `string` | Page title               | `undefined` |
| `template` | `string` | Title template with `%s` | `"%s"`      |

#### Passed as a prop
```astro
<Head title="About Us" template="%s | Acme Studio" />
```

#### Used as a standalone component
```astro
---

import Head from "@mannisto/components/Title.astro";

---

<Title value="About Us" template="%s | Acme Studio" />
```



<br>



### Twitter
| Prop         | Type     | Description              | Default                 |
|--------------|----------|--------------------------|-------------------------|
| `title`      | `string` | Twitter card title       | `undefined`             |
| `description`| `string` | Twitter card description | `undefined`             |
| `image`      | `string` | Twitter card image URL   | `undefined`             |
| `card`       | `string` | Card type                | `"summary_large_image"` |

If you use the `Head` component and do not provide Twitter props, it will automatically fall back to the page's title, description, and image. You can override any of these by passing a `twitter` prop to `Head`.

#### Passed as a prop
```astro
<Head twitter={{ 
  title: "About Us", 
  description: "Learn about our company", 
  image: "/twitter-og.jpg", 
  card: "summary" 
}} />
```

#### Used as a standalone component
```astro
---

import Head from "@mannisto/components/Twitter.astro";

---

<Twitter 
  title="About Us" 
  description="Learn about our company" 
  image="/twitter-og.jpg" 
  card="summary" 
/>
```

