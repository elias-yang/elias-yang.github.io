---
layout: page
title: Unsupervised Multi-Agent and Single-Agent Perception from Cooperative Views
permalink: /projects/ums/
description: Project page for UMS, accepted at CVPR 2026.
nav: false
---

<link rel="stylesheet" href="/assets/css/reference-style.css?v=37">

<div class="paper-project-page">
  <p class="paper-project-venue">CVPR 2026</p>
  <p class="paper-project-authors"><strong>Haochen Yang</strong>, Baolu Li, Lei Li, Delin Ren, Jiacheng Guo, Minghai Qin, Tianyun Zhang, and Hongkai Yu</p>

  <div class="paper-project-actions" aria-label="Paper resources">
    <a href="https://arxiv.org/pdf/2604.05354" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-file-pdf" aria-hidden="true"></i> Paper</a>
    <a href="/" aria-label="Code link coming soon"><i class="fa-solid fa-code" aria-hidden="true"></i> Code</a>
    <a href="/publications/"><i class="fa-solid fa-list" aria-hidden="true"></i> Publications</a>
  </div>

  <figure class="paper-project-hero">
    <img src="/assets/img/publications/ums-pipeline.webp" alt="UMS training pipeline for multi-agent and single-agent 3D perception" width="1703" height="792">
    <figcaption>UMS jointly learns multi-agent and single-agent 3D perception from cooperative views without human annotations.</figcaption>
  </figure>

  <section>
    <h2>Overview</h2>
    <p>UMS is an unsupervised framework that uses cooperative multi-agent observations to improve both multi-agent and single-agent 3D object detection. It turns the denser geometry available from shared views into supervision, avoiding manual 3D annotations.</p>
  </section>

  <section>
    <h2>Method</h2>
    <div class="paper-project-highlights">
      <article><strong>Proposal Purifying Filter</strong><span>Removes unreliable candidate boxes using instance-level point-cloud evidence.</span></article>
      <article><strong>Progressive Proposal Stabilizing</strong><span>Builds reliable pseudo labels through an easy-to-hard training process.</span></article>
      <article><strong>Cross-View Consensus Learning</strong><span>Transfers geometric and semantic consensus from cooperative views to the single-agent branch.</span></article>
    </div>
  </section>

  <section>
    <h2>Evaluation</h2>
    <p>The framework is evaluated on V2V4Real and OPV2V, covering both cooperative and single-agent perception settings.</p>
  </section>

  <section class="paper-project-citation">
    <h2>BibTeX</h2>
    <pre><code>@inproceedings{yang2026ums,
  title     = {Unsupervised Multi-Agent and Single-Agent Perception from Cooperative Views},
  author    = {Yang, Haochen and Li, Baolu and Li, Lei and Ren, Delin and Guo, Jiacheng and Qin, Minghai and Zhang, Tianyun and Yu, Hongkai},
  booktitle = {IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  year      = {2026}
}</code></pre>
  </section>
</div>
