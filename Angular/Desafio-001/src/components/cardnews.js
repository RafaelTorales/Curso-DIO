class Cardnews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        const autor = document.createElement("span");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");
        cardLeft.setAttribute("class", "card_left");
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        linkTitle.textContent = this.getAttribute("title")
        newsContent.textContent = this.getAttribute("content")

        const cardRight = document.createElement("div");
        const newsImage = document.createElement("img");
        cardRight.setAttribute("class", "card_right");
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {}
}

customElements.define("card-news", Cardnews);
