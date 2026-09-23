# Anatomy and study update — 23 September 2026

- 171 source meshes (10 arterial meshes added) and 31 explicitly schematic cord segments.
- Per-part audit at public/anatomy-validation.json: every reference ID maps to its stated FMA concept in official BodyParts3D isa_element_parts.txt; all names match the source Human Atlas manifest.
- Superior and lateral dissections remove cortex plus subjacent cerebral white matter; lateral also removes cerebellum.
- Exact mesh-plane intersections in sagittal, horizontal and coronal orientations, scoped to whole brain, medulla, pons, brainstem or cerebellum. Closed contours triangulated with nested holes. Source surfaces do not include all microscopic anatomy.
- Natural tissue palette and physical materials; cyan selection with external callout. Canvas fallback uses the same source geometry.
- Eight sourced answers: Exam 1 A1–A4 and B1–B3; uploaded Final section D. No practical prompts or other final sections were supplied.
- Course credit reproduced as requested. Source slides retain their original author spelling.

## Verification

TypeScript check passed. Geometry validation passed 45 combinations: five regions × three planes × positions 10%, 50%, 90%; all produced nonempty, finite, coplanar triangles. Browser preview checked regional sections, Willis view, answer dialog, natural surface rendering and external selected labels. Preview browser lacks WebGL; canvas fallback was exercised. The GPU material path is type-checked but was not visually tested in that browser.

## Public references

BodyParts3D official terminology and element mappings, UTHealth Neuroanatomy Online and Neuroscience Online, OpenStax Anatomy & Physiology, Purves Neuroscience, and linked primary DCPS/pituitary vascular studies. Citations are attached to each answer and the public atlas panel. This is source-identity verification and study content, not independent expert certification of every anatomical surface.
