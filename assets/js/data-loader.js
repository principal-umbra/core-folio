document.addEventListener("DOMContentLoaded", () => {
    const includeTargets = document.querySelectorAll("[data-include]");

    includeTargets.forEach(el => {
        const file = el.getAttribute("data-include");
        if (!file) return;

        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error loading component: ${file}`);
                }
                return response.text();
            })
            .then(data => {
                el.innerHTML = data;
            })
            .catch(err => {
                console.error(err);
                el.innerHTML = `<p style="color:red;">Could not load component: ${file}</p>`;
            });
    });
});
