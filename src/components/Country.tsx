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
                    <img class="larger-flag" src={src} alt={flags[index].countryName} width="128" height="128" />
                </hgroup>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error velit voluptates impedit deserunt reprehenderit repudiandae dolor minima corrupti alias vero officia veritatis eveniet, molestias dolore adipisci in libero maxime!</p>
            </article>
        </section>
    );
    return { content, title: flags[index].countryName, htmlDocumentName: flags[index].countryName };
};
