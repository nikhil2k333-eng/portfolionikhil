/**
 * ============================================================
 *  PROJECT IMAGES — CENTRALIZED IMAGE PATHS
 * ============================================================
 *
 *  HOW TO UPDATE YOUR IMAGES:
 *  ─────────────────────────────────────────────────────────
 *  This is the ONLY file you need to edit to change images.
 *  Simply replace any path/URL string with your real JPEG path.
 *
 *  Path formats that work:
 *    • Relative path  → "images/project1/slide1.jpg"
 *    • Absolute URL   → "https://example.com/image.jpg"
 *
 *  Structure per project:
 *    coverImg  → Hero image shown at the top of the case study
 *    images[0] → Case study image 1 (displayed full-width)
 *    images[1] → Case study image 2
 *    images[2] → Case study image 3
 *    images[3] → Case study image 4
 *    images[4] → Case study image 5
 * ============================================================
 */

const PROJECT_IMAGES = {

    // ─────────────────────────────────────────────────────────
    // PROJECT 1 — Cenora Jewellery Branding
    //   Card: data-project="Cenora"
    // ─────────────────────────────────────────────────────────
    coffee: {
        coverImg: "project1/project1.JPEG",

        images: [
            "project1/project2.JPEG",
            "project1/project3.JPEG",
            "project1/project4.JPEG",
            "project1/project5.JPEG",
            "https://picsum.photos/seed/cf_g5/600/900"
        ]
    },

    // ─────────────────────────────────────────────────────────
    // PROJECT 2 — Energy Drink Packaging
    //   Card: data-project="energydrink"
    // ─────────────────────────────────────────────────────────
    energydrink: {
        coverImg: "project2/project1.JPEG",

        images: [
            "project2/project2.jpg",
            /* image 3 — replace with: "images/energydrink/3.jpg" */
            "https://picsum.photos/seed/ed_g3/600/900",
            /* image 4 — replace with: "images/energydrink/4.jpg" */
            "https://picsum.photos/seed/ed_g4/600/900",
            /* image 5 — replace with: "images/energydrink/5.jpg" */
            "https://picsum.photos/seed/ed_g5/600/900"
        ]
    },

    // ─────────────────────────────────────────────────────────
    // PROJECT 3 — Fashion Social Media Campaign
    //   Card: data-project="fashion"
    // ─────────────────────────────────────────────────────────
    fashion: {
        coverImg: "https://picsum.photos/seed/fashionsocial/1100/600",

        images: [
            /* image 1 — replace with: "images/fashion/1.jpg" */
            "https://picsum.photos/seed/fs_g1/600/900",
            /* image 2 — replace with: "images/fashion/2.jpg" */
            "https://picsum.photos/seed/fs_g2/600/900",
            /* image 3 — replace with: "images/fashion/3.jpg" */
            "https://picsum.photos/seed/fs_g3/600/900",
            /* image 4 — replace with: "images/fashion/4.jpg" */
            "https://picsum.photos/seed/fs_g4/600/900",
            /* image 5 — replace with: "images/fashion/5.jpg" */
            "https://picsum.photos/seed/fs_g5/600/900"
        ]
    },

    // ─────────────────────────────────────────────────────────
    // PROJECT 4 — Restaurant Poster Design
    //   Card: data-project="restaurant"
    // ─────────────────────────────────────────────────────────
    restaurant: {
        coverImg: "https://picsum.photos/seed/restaurantposter/1100/600",

        images: [
            /* image 1 — replace with: "images/restaurant/1.jpg" */
            "https://picsum.photos/seed/rp_g1/600/900",
            /* image 2 — replace with: "images/restaurant/2.jpg" */
            "https://picsum.photos/seed/rp_g2/600/900",
            /* image 3 — replace with: "images/restaurant/3.jpg" */
            "https://picsum.photos/seed/rp_g3/600/900",
            /* image 4 — replace with: "images/restaurant/4.jpg" */
            "https://picsum.photos/seed/rp_g4/600/900",
            /* image 5 — replace with: "images/restaurant/5.jpg" */
            "https://picsum.photos/seed/rp_g5/600/900"
        ]
    }

};
