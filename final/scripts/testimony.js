document.addEventListener("DOMContentLoaded", () => {
    const testimonyContainer = document.getElementById("testimony");

    // Fetch the JSON data
    fetch("data/testimony.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to load testimony data");
            }
            return response.json();
        })
        .then((data) => {
            const testimonies = data.testimony;

            // Create a grid container
            const grid = document.createElement("div");
            grid.classList.add("testimony-grid");

            testimonies.forEach((item) => {
                const card = document.createElement("div");
                card.classList.add("testimony-card");

                const iframe = document.createElement("iframe");
                iframe.src = item.url.replace("watch?v=", "embed/");
                iframe.title = item.title;
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;
                iframe.width = "100%";
                iframe.height = "200";

                const caption = document.createElement("p");
                caption.textContent = item.title;

                card.appendChild(iframe);
                card.appendChild(caption);
                grid.appendChild(card);
            });

            testimonyContainer.appendChild(grid);
        })
        .catch((error) => {
            testimonyContainer.textContent = "Unable to load testimonies at this time.";
            console.error(error);
        });
});
