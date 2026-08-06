---
layout: page
title: "DarkDriving: A Real-World Day and Night Aligned Dataset for Autonomous Driving"
permalink: /projects/darkdriving/
description: Project page for DarkDriving, accepted at ICRA 2026.
nav: false
---

<link rel="stylesheet" href="/assets/css/reference-style.css?v=37">

<div class="paper-project-page">
  <p class="paper-project-venue">ICRA 2026</p>
  <p class="paper-project-authors">Wuqi Wang, <strong>Haochen Yang</strong>, Baolu Li, Jiaqi Sun, Xiangmo Zhao, Zhigang Xu, Qing Guo, Haigen Min, Tianyun Zhang, and Hongkai Yu</p>

  <div class="paper-project-actions" aria-label="Paper resources">
    <a href="https://arxiv.org/pdf/2603.18067" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-file-pdf" aria-hidden="true"></i> Paper</a>
    <a href="/" aria-label="Code link coming soon"><i class="fa-solid fa-code" aria-hidden="true"></i> Code</a>
    <a href="/publications/"><i class="fa-solid fa-list" aria-hidden="true"></i> Publications</a>
  </div>

  <figure class="paper-project-hero">
    <img src="/assets/img/publications/darkdriving-pipeline.webp" alt="DarkDriving automatic day-and-night trajectory tracking and pose matching pipeline" width="1489" height="865">
    <figcaption>The TTPM collection pipeline aligns real-world daytime and nighttime driving observations in dynamic traffic scenes.</figcaption>
  </figure>

  <section>
    <h2>Overview</h2>
    <p>DarkDriving is a real-world benchmark for low-light autonomous-driving research. It contains 9,538 day-night image pairs aligned in location and scene content, with spatial error measured in centimeters.</p>
  </section>

  <section>
    <h2>Data Collection</h2>
    <div class="paper-project-highlights">
      <article><strong>Closed-Field Collection</strong><span>Data is collected on a large 69-acre driving test field under repeatable day and night conditions.</span></article>
      <article><strong>Trajectory Tracking</strong><span>An automated vehicle follows matched daytime and nighttime trajectories using high-precision localization.</span></article>
      <article><strong>Pose Matching</strong><span>Trajectory-based pose matching and refinement produce accurately paired views for evaluation and training.</span></article>
    </div>
  </section>

  <section>
    <h2>Benchmark Tasks</h2>
    <p>The dataset supports low-light enhancement, generalized enhancement, and enhancement-oriented evaluation for both 2D and 3D driving perception.</p>
  </section>

  <section class="paper-project-citation">
    <h2>BibTeX</h2>
    <pre><code>@inproceedings{wang2026darkdriving,
  title     = {DarkDriving: A Real-World Day and Night Aligned Dataset for Autonomous Driving in the Dark Environment},
  author    = {Wang, Wuqi and Yang, Haochen and Li, Baolu and Sun, Jiaqi and Zhao, Xiangmo and Xu, Zhigang and Guo, Qing and Min, Haigen and Zhang, Tianyun and Yu, Hongkai},
  booktitle = {IEEE International Conference on Robotics and Automation},
  year      = {2026}
}</code></pre>
  </section>
</div>
