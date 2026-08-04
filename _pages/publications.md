---
layout: page
permalink: /publications/
title: Publications
description: Selected publications.
nav: true
nav_order: 3
---

<link rel="stylesheet" href="/assets/css/reference-style.css?v=23">
<script src="/assets/js/publication-filters.js?v=3" defer></script>

<div class="publication-filter" role="group" aria-label="Filter publications by research theme">
  <span class="publication-filter__label">Filter</span>
  <button class="publication-filter__button is-active" type="button" data-theme-filter="all" aria-pressed="true">All</button>
  <button class="publication-filter__button" type="button" data-theme-filter="autonomous" aria-pressed="false"><span></span>Autonomous</button>
  <button class="publication-filter__button" type="button" data-theme-filter="federated" aria-pressed="false"><span></span>Federated</button>
  <button class="publication-filter__button" type="button" data-theme-filter="digital-twin" aria-pressed="false"><span></span>Digital Twin</button>
</div>

<div class="research-themes is-all">
  <section class="research-theme" data-research-theme="autonomous">
    <h2>Robust 3D Perception for Autonomous Driving</h2>
    <p>Unsupervised cooperative perception and domain-aware multimodal detection for reliable autonomous systems.</p>
    <div class="publications">
      {% bibliography --query @*[project=robust3d] %}
    </div>
  </section>

  <section class="research-theme" data-research-theme="autonomous">
    <h2>Low-Light Driving Perception</h2>
    <p>Real-world day–night data alignment and robust perception in dark driving environments.</p>
    <div class="publications">
      {% bibliography --query @*[project=lowlight] %}
    </div>
  </section>

  <section class="research-theme" data-research-theme="federated">
    <h2>Efficient Federated Learning</h2>
    <p>Communication-efficient learning through parameter freezing, dynamic sparsity, and task alternation.</p>
    <div class="publications">
      {% bibliography --query @*[project=fedlearning] %}
    </div>
  </section>

  <section class="research-theme" data-research-theme="digital-twin">
    <h2>Digital Twin &amp; Health Intelligence</h2>
    <p>Personalized medical devices, cardiac digital twins, and learning-based healthcare applications.</p>
    <div class="publications">
      {% bibliography --query @*[project=digitalhealth] %}
    </div>
  </section>

  <div class="unclassified-publications" data-unclassified-publications>
    <div class="publications">
      {% bibliography --query @*[project=adversarial] %}
    </div>
    <div class="publications">
      {% bibliography --query @*[project=cpsenvironment] %}
    </div>
    <div class="publications">
      {% bibliography --query @*[project=health] %}
    </div>
  </div>
</div>
