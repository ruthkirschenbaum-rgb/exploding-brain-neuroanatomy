# Neuroanatomy · Exploded

An interactive study explorer based on Dr. Bodnar's 17 Basic Neuroscience lectures. React, Three.js, and Vite.

Based on Lectures of Richard Bodner, PhD, Systems Neuroscience, Queens College, CUNY 2025.

Includes high-contrast study colors, natural tissue mode, Self-Test label hiding, sourced exam reference answers, dissection controls, and sagittal, horizontal, and coronal sections. The 10-question Pinpoint Quiz has been removed.

## Upload to GitHub

1. Extract `Neuroanatomy-GitHub-Source.zip`.
2. Create a GitHub repository and add the extracted contents, with `package.json` at the repository root. GitHub Desktop can upload the complete folder, including the slide assets and `.github` folder.
3. Commit and push the files. Upload the extracted files, not the ZIP itself.

### Optional: publish with GitHub Pages

1. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Open **Actions → Deploy website to GitHub Pages → Run workflow**.
3. When deployment finishes, open the website URL shown by the workflow.

The included workflow runs manually; it does not publish automatically on upload. Run it again after future edits. The relative asset paths support both a project subfolder and a custom domain.

Official setup references: https://vite.dev/guide/static-deploy.html#github-pages and https://docs.github.com/en/pages.

## Run

Requires Node.js 22.13 or newer.

- `npm ci`
- `npm run dev`
- `npm run check`
- `npm run build`

The static build is in `dist/`. Upload that folder’s contents to any static web host. Use an HTTP server to preview the site; opening `index.html` directly as a local file prevents model loading. No backend, API key, or login is required. Google Fonts and reference links use external websites; system fonts provide a fallback.

## Anatomy and course scope

171 curated BodyParts3D source components cover gross brain anatomy, cerebral vessels, ventricles, and associated tissues. Names identify source-model components; some subdivisions are shown in regional course context rather than explicitly named on the linked slide. 31 separately selectable schematic spinal cord segments extend from the medulla: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, and 1 coccygeal. The spinal cord is not the bony vertebral column. Cord widths and segment boundaries are illustrative, not segmented MRI data or vertebral levels.

The 429 original slides remain available in the lecture browser. Small nuclei, pathways, roots, microscopic layers, and subdivisions without separate source geometry are shown in those slides, not invented as anatomically precise 3D objects. Ventricles are fluid-space meshes. Exploded layouts are spatial inventories, not anatomical distances.

The main renderer is WebGL. A Canvas software renderer uses the same geometry where WebGL is unavailable; this fallback can be slower on large selections. A complete TypeScript check, binary geometry/index/reference validation, all slide image validation, and browser interaction checks were performed. The testing browser only supports the software fallback, so the GPU renderer was not visually tested there. WebMCP registration is feature-detected; the testing browser does not expose modelContext.

## Sources and rights

Reference application: https://github.com/ashemag/human-atlas (MIT; LICENSE retained).
Geometry: BodyParts3D 4.0, © The Database Center for Life Science, CC BY 4.0. See public/ATTRIBUTION.md. Changes here include selecting and repacking a CNS subset, new group colors, and a new explorer interface.
Lecture text and images were supplied for this study project. Those slides are not licensed under the application's MIT license. Redistribution of course materials requires permission from their rights holders.
