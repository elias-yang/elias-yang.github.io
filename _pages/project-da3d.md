---
layout: page
title: "DA3D: Domain-Aware Dynamic Adaptation for All-Weather Multimodal 3D Detection"
permalink: /projects/da3d/
description: Project page for DA3D, published at ACM MM 2025.
nav: false
---

<link rel="stylesheet" href="/assets/css/reference-style.css?v=37">

<div class="paper-project-page">
  <p class="paper-project-venue">ACM Multimedia 2025</p>
  <p class="paper-project-authors"><strong>Haochen Yang</strong>, Lei Li, Jiacheng Guo, Baolu Li, Minghai Qin, Hongkai Yu, and Tianyun Zhang</p>

  <div class="paper-project-actions" aria-label="Paper resources">
    <a href="https://dl.acm.org/doi/epdf/10.1145/3746027.3755708" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-file-pdf" aria-hidden="true"></i> Paper</a>
    <a href="/" aria-label="Code link coming soon"><i class="fa-solid fa-code" aria-hidden="true"></i> Code</a>
    <a href="/publications/"><i class="fa-solid fa-list" aria-hidden="true"></i> Publications</a>
  </div>

  <figure class="paper-project-hero paper-project-hero--portrait">
    <img src="/assets/img/publications/da3d-pipeline.webp" alt="DA3D domain-aware multimodal 3D detection pipeline" width="1744" height="1227">
    <figcaption>DA3D adapts a shared LiDAR-radar detector to diverse weather domains with lightweight, dynamically allocated LoRA capacity.</figcaption>
  </figure>

  <section>
    <h2>Overview</h2>
    <p>DA3D addresses feature-level domain shift in all-weather multimodal 3D detection. It preserves a shared LiDAR-radar backbone while activating compact, weather-specific adaptation paths for rain, fog, snow, and other operating conditions.</p>
  </section>

  <section>
    <h2>Method</h2>
    <div class="paper-project-highlights">
      <article><strong>Domain-Aware Adaptation</strong><span>A lightweight weather classifier selects the active domain branch at runtime.</span></article>
      <article><strong>Multimodal LoRA</strong><span>Domain-specific low-rank modules adapt both sparse 3D and BEV feature encoders.</span></article>
      <article><strong>Dynamic Capacity</strong><span>Gradient-informed rank allocation prunes or grows adaptation capacity according to each domain's needs.</span></article>
    </div>
  </section>

  <section>
    <h2>Design Goal</h2>
    <p>The method is designed as a plug-and-play module for multimodal 3D detectors, improving weather robustness without duplicating an entire model for every domain.</p>
  </section>

  <section class="paper-project-citation">
    <h2>BibTeX</h2>
    <pre><code>@inproceedings{yang2025da3d,
  title     = {DA3D: Domain-Aware Dynamic Adaptation for All-Weather Multimodal 3D Detection},
  author    = {Yang, Haochen and Li, Lei and Guo, Jiacheng and Li, Baolu and Qin, Minghai and Yu, Hongkai and Zhang, Tianyun},
  booktitle = {ACM International Conference on Multimedia},
  year      = {2025}
}</code></pre>
  </section>
</div>
