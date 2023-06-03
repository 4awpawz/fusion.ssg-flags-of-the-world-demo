# Flags Of The World

View [Flags Of The World](https://www.youtube.com/watch?v=PuoOGCEs1gk) video.

This project demonstrates the efficiency and ease of implementation of fusion.ssg's __collection feature__ to generate 248 individual HTML documents using a template, a page, a Typescript component and a JSON data source.

fusion.ssg's ability to generate pages using it's _collections_ feature is extremely useful. Websites that host any kind of portfolio, catalog or list will greatly benefit building them using this feature.

## Instructions For Running This Demo

1. Install fusion.ssg.
```shell
npm i -g @4awpawz/fusion.ssg
```

2. Fork this repo.

3. Use `git clone` to clone your fork to you computer.

4. In the root of the project, run the following to install dependencies and to build and serve the project in your browser.:
```shell
npm i
npm run development
```

## Examples

### Default page - default.html

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/libs/pico/pico.min.css">
        <link rel="stylesheet" href="/css/project.css">
        <title>{title}</title>
    </head>
    <body>
        <main class="container">
            {{template}}
        </main>
    </body>
</html>
```

### JSON data source - flags.json

```json
[
{"id":4,"countryName":"Afghanistan","alpha2":"af","alpha3":"afg","img":"af.png"},
{"id":248,"countryName":"Åland Islands","alpha2":"ax","alpha3":"ala","img":"ax.png"},
{"id":8,"countryName":"Albania","alpha2":"al","alpha3":"alb","img":"al.png"},
{"id":12,"countryName":"Algeria","alpha2":"dz","alpha3":"dza","img":"dz.png"},
{"id":16,"countryName":"American Samoa","alpha2":"as","alpha3":"asm","img":"as.png"},
{"id":20,"countryName":"Andorra","alpha2":"ad","alpha3":"and","img":"ad.png"},
{"id":24,"countryName":"Angola","alpha2":"ao","alpha3":"ago","img":"ao.png"},
{"id":660,"countryName":"Anguilla","alpha2":"ai","alpha3":"aia","img":"ai.png"},
{"id":10,"countryName":"Antarctica","alpha2":"aq","alpha3":"ata","img":"aq.png"},
{"id":28,"countryName":"Antigua and Barbuda","alpha2":"ag","alpha3":"atg","img":"ag.png"},
{"id":32,"countryName":"Argentina","alpha2":"ar","alpha3":"arg","img":"ar.png"},
...
]
```

### Home page

#### Template - index.md

```html
---
tokens: {
title: Flags Of The World
}
---
# Flags Of The World

<Countries dataSources="flags.json" />
```
#### Countries Component

```Typescript
interface Flag {
    "id": number, "countryName": string, "alpha2": string, "alpha3": string, "img": string
}

interface Props {
    flags: Flag[]
}

export const Countries = function({ flags }: Props) {
    return (
        <ul>
            {flags.map(flag => {
                const src = `media/flags/${flag.img}`;
                return <li style="list-style: none;">
                    <span>
                        <a href={flag.countryName}>{flag.countryName}</a> <img src={src} alt={flag.countryName} style="width: 32px; height: 32px;" />
                    </span>
                </li>;
            })}
        </ul>
    );
};
```

### Individual Flag Pages

#### Template - flag.md

```md
---
isCollection: true
---

<Country isCollection dataSources="flags.json" />
```

#### Country Component

```Typescript
interface Flag {
    "id": number, "countryName": string, "alpha2": string, "alpha3": string, "img": string
}

interface Props {
    flags: Flag[],
    index: number
}

export const Country = function({ index, flags }: Props): { content: unknown, title: string, htmlDocumentName: string } | undefined {
    if (index === flags.length) return;
    const countryName = flags[index].countryName;
    const src = `../media/flags/${flags[index].img}`;
    const content = (
        <section class="container">
            <article>
                <hgroup>
                    <h1>{countryName}</h1>
                    <img src={src} alt={flags[index].countryName} style="width: 128px; height: 128px;" />
                </hgroup>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error velit voluptates impedit deserunt reprehenderit repudiandae dolor minima corrupti alias vero officia veritatis eveniet, molestias dolore adipisci in libero maxime!</p>
            </article>
        </section>
    );
    return { content, title: flags[index].countryName, htmlDocumentName: flags[index].countryName };
};
```
