(function () {
    "use strict";

    // ============================================
    // 1. Disable Right-Click / Context Menu
    // ============================================
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });


    // ============================================
    // 2. Block Common DevTools / Browser Shortcuts
    // ============================================
    document.addEventListener("keydown", function (e) {

        const key = e.key.toLowerCase();

        // F12
        if (e.key === "F12") {
            e.preventDefault();
            return false;
        }

        // Ctrl + Shift + I  → Developer Tools
        if (e.ctrlKey && e.shiftKey && key === "i") {
            e.preventDefault();
            return false;
        }

        // Ctrl + Shift + J  → Developer Console
        if (e.ctrlKey && e.shiftKey && key === "j") {
            e.preventDefault();
            return false;
        }

        // Ctrl + Shift + C  → Inspect Element
        if (e.ctrlKey && e.shiftKey && key === "c") {
            e.preventDefault();
            return false;
        }

        // Ctrl + U  → View Source
        if (e.ctrlKey && key === "u") {
            e.preventDefault();
            return false;
        }

        // Ctrl + S  → Save Page
        if (e.ctrlKey && key === "s") {
            e.preventDefault();
            return false;
        }

        // Ctrl + P  → Print
        if (e.ctrlKey && key === "p") {
            e.preventDefault();
            return false;
        }

        // Ctrl + C  → Copy
        if (e.ctrlKey && key === "c") {
            e.preventDefault();
            return false;
        }

        // Ctrl + X  → Cut
        if (e.ctrlKey && key === "x") {
            e.preventDefault();
            return false;
        }
    });


    // ============================================
    // 3. Disable Text Selection
    // ============================================
    document.addEventListener("selectstart", function (e) {

        // Allow selection inside form controls
        const tag = e.target.tagName;
        e.preventDefault();
    });


    // ============================================
    // 4. Prevent Image Dragging
    // ============================================
    document.addEventListener("dragstart", function (e) {

        if (e.target.tagName === "IMG") {
            e.preventDefault();
        }
    });


    // ============================================
    // 5. Disable Copy
    // ============================================
    document.addEventListener("copy", function (e) {

        // Allow copying from inputs/textareas
        const tag = e.target.tagName;

        if (
            tag !== "INPUT" &&
            tag !== "TEXTAREA"
        ) {
            e.preventDefault();
        }
    });


    // ============================================
    // 6. Disable Cut
    // ============================================
    document.addEventListener("cut", function (e) {

        const tag = e.target.tagName;

        if (
            tag !== "INPUT" &&
            tag !== "TEXTAREA"
        ) {
            e.preventDefault();
        }
    });


    // ============================================
    // 7. Optional: Disable PrintScreen Key
    // ============================================
    document.addEventListener("keyup", function (e) {

        if (e.key === "PrintScreen") {

            // Clear clipboard if the browser permits it
            if (navigator.clipboard) {
                navigator.clipboard.writeText("").catch(function () {});
            }
        }
    });

})();