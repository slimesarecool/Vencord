/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

// import "./removeTitlebar.css";

import definePlugin from "@utils/types";

export default definePlugin({
    name: "RemoveTitlebar",
    description: "Removes discord's new shitty titlebar.",
    authors: [{ name: "slimesarecool", id: 881599425217187871n }],
    start() {
        const runDeferred = () => {
            document
                .querySelector(".base_c48ade")
                ?.setAttribute("data-fullscreen", "true");
        };

        if (document.readyState === "loading") {
            document.addEventListener("readystatechange", () => {
                if (document.readyState === "interactive")
                    queueMicrotask(runDeferred);
            });
        } else {
            queueMicrotask(runDeferred);
        }
    },
    stop() {
        document
            .querySelector(".base_c48ade")
            ?.setAttribute("data-fullscreen", "false");
    },
});
