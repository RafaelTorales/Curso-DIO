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
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link");
        newsContent.textContent = this.getAttribute("content");

        const cardRight = document.createElement("div");
        const newsImage = document.createElement("img");
        cardRight.setAttribute("class", "card_right");
        cardRight.appendChild(newsImage);
        newsImage.src = this.getAttribute("photo") || "assets/default.png";
        newsImage.alt = "Foto da noticia";

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 60vw;
                display: flex;
                flex-direction: row;
                box-shadow: 9px 9px 27px;
                justify-content: space-between;
            }

            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }

            .card_left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }

            .card_left > p {
                color: #434343;
            }

            .card_left>span {
                font-weight: bold;
            }

            .card_right>img {
                height: 100%;
            }
        `;

        return style;
    }
}

customElements.define("card-news", Cardnews);
