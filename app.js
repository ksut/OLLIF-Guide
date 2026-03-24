const driveView = (id) => `https://drive.google.com/file/d/${id}/view`;
const drivePreview = (id) => `https://drive.google.com/file/d/${id}/preview`;
const driveDownload = (id) => `https://drive.usercontent.google.com/uc?id=${id}&export=download`;
const driveFolder = (id) => `https://drive.google.com/drive/folders/${id}`;

const visuals = [
  {
    id: "advanced-room",
    title: "Advanced C-arm OR setup",
    path: "assets/images/advanced-c-arm-or-setup.jpg",
    category: "OR map",
    insight:
      "Shows the dual c-arm relationship around the bed, with anesthesia at the head, the surgeon on patient left, and the monitor cluster on the right-foot side.",
    source: driveView("1_3ZX6umUw5_qiQ6gR5QEPFE6teEsU7eE"),
  },
  {
    id: "basic-room",
    title: "Basic OLLIF room map",
    path: "assets/images/simple-c-arm-or-setup.jpg",
    category: "OR map",
    insight:
      "A simplified room layout that keeps the same core choreography while reducing visual complexity for quick staff orientation.",
    source: driveView("1_jpVP6VM219ktiVeZoec0vQhD1SScaPE"),
  },
  {
    id: "open-room",
    title: "Open room map with adjuncts",
    path: "assets/images/open-room-map.jpg",
    category: "OR map",
    insight:
      "Adds the placement of bipolar, bovie, drill, and suction relative to the mayo table, making it especially useful for pre-case room checks.",
    source: driveView("1_GreNAbJYHEDuqwuDxGXHYpkKSJhO5lN"),
  },
  {
    id: "mayo-1",
    title: "Mayo stand reference set 1",
    path: "assets/images/mayo-stand-1.jpg",
    category: "Table setup",
    insight:
      "A flat lay of instruments, wires, syringe, and accessory items that can be used as a visual cross-check against local setup expectations.",
    source: driveView("1b8u8Fn7iTBydwZaM1Pm8URZMD7xDpMT0"),
  },
  {
    id: "mayo-2",
    title: "Mayo stand and screw table set 2",
    path: "assets/images/mayo-stand-2.jpg",
    category: "Table setup",
    insight:
      "A second instrument-board view that adds screw-related components and alternate table inventory for the back-table conversation.",
    source: driveView("1eKtw7B509_REO3JKUX6bjnPhGk97H9CA"),
  },
];

const videos = [
  {
    title: "OLLIF Surgical Animation",
    id: "1eQSXnp2NZtygl90c9GxQb7a_GjQOv6KJ",
    note:
      "Best used as the top-level orientation clip before moving into room choreography and c-arm specifics.",
  },
  {
    title: "Terminology and AP C-ARM Setup - OLLIF",
    id: "1CFQSmXxsQNGm1qAyzCXHIfXbCCcIMxWj",
    note:
      "Useful for shared language and AP positioning before staff starts discussing finer image adjustments.",
  },
  {
    title: "Lateral C-Arm Setup - OLLIF",
    id: "1zRnwK3sznTRnktapOZEPceFo2J-H-xtv",
    note:
      "Pairs naturally with the room maps by showing how the lateral unit is expected to approach the bed.",
  },
];

const referenceDocs = [
  {
    title: "ARM OLLIF STG.pdf",
    type: "Core doc",
    format: "PDF",
    note: "Primary technique guide in the folder and the anchor document for case-prep reading.",
    view: driveView("151aAb3wFNfqHtmcyrmyAqsnAEMs3UHsI"),
    download: driveDownload("151aAb3wFNfqHtmcyrmyAqsnAEMs3UHsI"),
  },
  {
    title: "ARM_OLLIF_IFU.pdf",
    type: "Core doc",
    format: "PDF",
    note: "Official instructions-for-use reference and the main compliance document to keep beside the STG.",
    view: driveView("13KVDQsFhoSqU3idljrWUYFgvBIuUugWr"),
    download: driveDownload("13KVDQsFhoSqU3idljrWUYFgvBIuUugWr"),
  },
  {
    title: "ARM OLLIF 510k.pdf",
    type: "Core doc",
    format: "PDF",
    note: "Device-clearance reference for administrative, compliance, and product-background questions.",
    view: driveView("1inf8Zl4AQOJ8DjCIj_xnFKLqNXrRqe-s"),
    download: driveDownload("1inf8Zl4AQOJ8DjCIj_xnFKLqNXrRqe-s"),
  },
  {
    title: "ARM OLLIF Coding Summary",
    type: "Documentation",
    format: "PDF",
    note: "Pairs with the op note example for coding and charting support during implementation.",
    view: driveView("1alQD5G7tgT0CG27e2ndbofXEB-_oeFY9"),
    download: driveDownload("1alQD5G7tgT0CG27e2ndbofXEB-_oeFY9"),
  },
  {
    title: "OLLIF Op Note Example.pdf",
    type: "Documentation",
    format: "PDF",
    note: "Example narrative to keep near the coding summary when standardizing documentation habits.",
    view: driveView("1uPOT8NyZylrV4u3aKuSwVPydJSQ1KM_1"),
    download: driveDownload("1uPOT8NyZylrV4u3aKuSwVPydJSQ1KM_1"),
  },
  {
    title: "General Preference Card - OLLIF FINAL.xlsx",
    type: "Setup support",
    format: "XLSX",
    note: "Best used with the mayo stand photos to turn the visual setup into a repeatable supply checklist.",
    view: "https://docs.google.com/spreadsheets/d/1A-aYScIVilDAx27R1L7IEuQnUuyUMpEf/edit",
    download: driveDownload("1A-aYScIVilDAx27R1L7IEuQnUuyUMpEf"),
  },
];

const careDocs = [
  {
    title: "OLLIF Consent.docx",
    type: "Patient-facing",
    format: "DOCX",
    note: "Consent reference from the care-protocol folder.",
    view: driveView("1CZgbsuTCmuNIifG0lR7RaJJb3TJgefTl"),
    download: driveDownload("1CZgbsuTCmuNIifG0lR7RaJJb3TJgefTl"),
  },
  {
    title: "Multi Dimensional Conservative Protocol with Charts 2 pages.pdf",
    type: "Care protocol",
    format: "PDF",
    note: "Conservative-care reference that broadens the packet beyond the OR itself.",
    view: driveView("1oDYYz3USGAOoOhTDd3IeAdTWwgHMZXXg"),
    download: driveDownload("1oDYYz3USGAOoOhTDd3IeAdTWwgHMZXXg"),
  },
  {
    title: "Perioperative Pain Management Protocol 2025.docx.pdf",
    type: "Care protocol",
    format: "PDF",
    note: "Perioperative analgesia guidance for pre-op and handoff conversations.",
    view: driveView("1MIr_Xg4-nRidsMf8ppM9mYTI9lYpEfSh"),
    download: driveDownload("1MIr_Xg4-nRidsMf8ppM9mYTI9lYpEfSh"),
  },
  {
    title: "Post-Op Nerve Root Irritation Protocol.pdf",
    type: "Post-op",
    format: "PDF",
    note: "Postoperative troubleshooting reference surfaced directly from the care-protocol folder.",
    view: driveView("10gVfW6FRk4HfAzQxndvxhCSoGXcNtSi2"),
    download: driveDownload("10gVfW6FRk4HfAzQxndvxhCSoGXcNtSi2"),
  },
  {
    title: "Personalized pain management tapering protocols..jpeg",
    type: "Post-op",
    format: "Image",
    note: "Flowchart-style tapering aid shown in the care section of this site.",
    view: driveView("1ALa2TOum1W9t1sHSCMnoMAsphNzeTuhq"),
    download: driveDownload("1ALa2TOum1W9t1sHSCMnoMAsphNzeTuhq"),
  },
];

const evidenceDocs = [
  "Clinical and Radiological Outcomes of Oblique Lateral Lumbar Interbody Fusion.pdf|1BC5aB6x5WjUQVCRQupUAvnNM34Si0ybX",
  "MIS-DLIF.pdf|1QkVzvg1XD0YWpMSTxC-2oiBEzGRPl9Q4",
  "MIS-DTIF.pdf|1dmsTF_6V1nXURFpOYuevCMm3tDihDpDQ",
  "OLLIF BMI Impact Study.pdf|1JSfuCqdeU9O3VcEpD4sZkH540aNOe_VZ",
  "OLLIF Landmark Study.pdf|13UEq1_IGKnd6uWhN1thWrpXpnuDK7x7E",
  "OLLIF Radiation Exposure.pdf|1otNuTJgZBCgLz1sxl4V6mPp9dVfcJFcN",
  "OLLIF Scoliosis Study 2017.pdf|1kpw15YQhqnAgb_u66czNC6I_ZBiMAmJt",
  "OLLIF Study 2016.pdf|1UbV4SH9CifHluko7B-4dCFaRsee5AOAZ",
  "Stenosis Study Nov 2020.pdf|119KfN2Xsrdz3l7VkTU4--KCfBkjcSL1C",
  "Transfacet OLLIF Paper.pdf|1alszFJZ-6KZRPrIEBzKdREUdk2SyyzBQ",
].map((entry) => {
  const [title, id] = entry.split("|");
  return {
    title,
    type: "White paper",
    format: "PDF",
    note: "Shared study or white-paper reference from the evidence folder.",
    view: driveView(id),
    download: driveDownload(id),
  };
});

const sourceLibrary = [
  ...referenceDocs.map((item) => ({ ...item, bucket: "docs" })),
  ...careDocs.map((item) => ({ ...item, bucket: "protocols" })),
  ...evidenceDocs.map((item) => ({ ...item, bucket: "evidence" })),
  ...videos.map((item) => ({
    title: item.title,
    type: "Video",
    format: "Drive preview",
    note: item.note,
    view: driveView(item.id),
    download: driveDownload(item.id),
    bucket: "videos",
  })),
  ...visuals.map((item) => ({
    title: item.title,
    type: item.category,
    format: "Image",
    note: item.insight,
    view: item.source,
    download: item.source,
    bucket: "visuals",
  })),
  {
    title: "C Arm Set Up Videos",
    type: "Folder",
    format: "Drive folder",
    note: "Top-level c-arm media folder that leads into the nested setup clips and share videos.",
    view: driveFolder("1suav6rxq4JUrcrmuvz3Uc-lcLZb5si1m"),
    download: driveFolder("1suav6rxq4JUrcrmuvz3Uc-lcLZb5si1m"),
    bucket: "videos",
  },
  {
    title: "C arm set up",
    type: "Folder",
    format: "Drive folder",
    note: "Nested setup folder containing the larger sequence of numbered c-arm clips.",
    view: driveFolder("1-1BIM_J7bUa4rkRVSWQ0ngSeA2_kLr8f"),
    download: driveFolder("1-1BIM_J7bUa4rkRVSWQ0ngSeA2_kLr8f"),
    bucket: "videos",
  },
  {
    title: "OR Setup Photos",
    type: "Folder",
    format: "Drive folder",
    note: "Photo folder with stills and a room video for additional in-room context.",
    view: driveFolder("1-O9q0gP7X3uMdQp_4ZDLBpxbBMg3Sp9Y"),
    download: driveFolder("1-O9q0gP7X3uMdQp_4ZDLBpxbBMg3Sp9Y"),
    bucket: "visuals",
  },
  {
    title: "White Papers",
    type: "Folder",
    format: "Drive folder",
    note: "Direct link to the shared evidence library.",
    view: driveFolder("1gCccuZQhCXOoD6aCHrmButVEDjH3oR4L"),
    download: driveFolder("1gCccuZQhCXOoD6aCHrmButVEDjH3oR4L"),
    bucket: "evidence",
  },
];

const filters = [
  { id: "all", label: "All assets" },
  { id: "docs", label: "Docs" },
  { id: "videos", label: "Videos" },
  { id: "visuals", label: "Visuals" },
  { id: "protocols", label: "Protocols" },
  { id: "evidence", label: "Evidence" },
];

const statGrid = document.querySelector("#stat-grid");
const visualFocus = document.querySelector("#visual-focus");
const visualRail = document.querySelector("#visual-rail");
const briefingGrid = document.querySelector("#briefing-grid");
const referenceGrid = document.querySelector("#reference-grid");
const careGrid = document.querySelector("#care-grid");
const evidenceGrid = document.querySelector("#evidence-grid");
const filterRow = document.querySelector("#filter-row");
const libraryGrid = document.querySelector("#library-grid");

const stats = [
  { value: referenceDocs.length, label: "Core references" },
  { value: videos.length + 2, label: "Video entry points" },
  { value: visuals.length, label: "Downloaded visual anchors" },
  { value: careDocs.length, label: "Care protocol items" },
  { value: evidenceDocs.length, label: "White papers" },
  { value: sourceLibrary.length, label: "Surfaced assets" },
];

statGrid.innerHTML = stats
  .map(
    (stat) => `
      <article class="stat-chip">
        <span class="stat-value">${stat.value}</span>
        <span class="stat-label">${stat.label}</span>
      </article>
    `,
  )
  .join("");

const renderVisual = (visualId) => {
  const activeVisual = visuals.find((item) => item.id === visualId) || visuals[0];

  visualFocus.innerHTML = `
    <div class="visual-image-wrap">
      <img src="${activeVisual.path}" alt="${activeVisual.title}" />
    </div>
    <div class="visual-copy">
      <div class="visual-meta">
        <span class="tag">${activeVisual.category}</span>
        <span class="tag">Shared source</span>
      </div>
      <h3>${activeVisual.title}</h3>
      <p>${activeVisual.insight}</p>
      <div class="resource-actions">
        <a class="link-pill" href="${activeVisual.source}" target="_blank" rel="noreferrer">Open source image</a>
      </div>
    </div>
  `;

  visualRail.innerHTML = visuals
    .map(
      (item) => `
        <button class="rail-button ${item.id === activeVisual.id ? "is-active" : ""}" data-visual-id="${item.id}">
          <img src="${item.path}" alt="${item.title}" />
          <span>
            <span class="rail-title">${item.title}</span>
            <span class="rail-copy">${item.category}</span>
          </span>
        </button>
      `,
    )
    .join("");

  document.querySelectorAll("[data-visual-id]").forEach((button) => {
    button.addEventListener("click", () => renderVisual(button.dataset.visualId));
  });
};

renderVisual(visuals[0].id);

briefingGrid.innerHTML = videos
  .map(
    (video) => `
      <article class="briefing-card reveal">
        <iframe
          class="briefing-frame"
          src="${drivePreview(video.id)}"
          title="${video.title}"
          allow="autoplay"
          loading="lazy"
        ></iframe>
        <div>
          <div class="meta-row">
            <span class="meta-pill">Video</span>
            <span class="meta-pill">Drive preview</span>
          </div>
          <h3>${video.title}</h3>
          <p>${video.note}</p>
        </div>
        <div class="briefing-links">
          <a class="link-pill" href="${driveView(video.id)}" target="_blank" rel="noreferrer">Open in Drive</a>
          <a class="link-pill" href="${driveDownload(video.id)}" target="_blank" rel="noreferrer">Download</a>
        </div>
      </article>
    `,
  )
  .join("");

const resourceCard = (item) => `
  <article class="${item.cardClass || "reference-card"} reveal">
    <div class="meta-row">
      <span class="meta-pill">${item.type}</span>
      <span class="meta-pill">${item.format}</span>
    </div>
    <h3>${item.title}</h3>
    <p>${item.note}</p>
    <div class="resource-actions">
      <a class="link-pill" href="${item.view}" target="_blank" rel="noreferrer">Open source</a>
      <a class="link-pill" href="${item.download}" target="_blank" rel="noreferrer">Download</a>
    </div>
  </article>
`;

referenceGrid.innerHTML = referenceDocs.map((item) => resourceCard(item)).join("");
careGrid.innerHTML = careDocs.map((item) => resourceCard({ ...item, cardClass: "care-card" })).join("");
evidenceGrid.innerHTML = evidenceDocs.map((item) => resourceCard({ ...item, cardClass: "evidence-card" })).join("");

let activeFilter = "all";

const renderFilters = () => {
  filterRow.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-button ${filter.id === activeFilter ? "is-active" : ""}" data-filter="${filter.id}">
          ${filter.label}
        </button>
      `,
    )
    .join("");

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderLibrary();
    });
  });
};

const renderLibrary = () => {
  const items =
    activeFilter === "all" ? sourceLibrary : sourceLibrary.filter((item) => item.bucket === activeFilter);

  libraryGrid.innerHTML = items
    .map((item) => resourceCard({ ...item, cardClass: "library-card" }))
    .join("");
};

renderFilters();
renderLibrary();
