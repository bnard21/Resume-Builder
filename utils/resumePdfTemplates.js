const escapeHtml = (value) => {
  if (!value) return "";

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};

export const generateClassicHtml = (resumeData) => {
  const {
    name,
    email,
    phone,
    linkedin,
    location,
    summary,
    experience,
    skills,
    certifications,
    education,
  } = resumeData;

  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 40px;
            color: #111;
          }

          h1 {
            text-align: center;
            font-size: 24px;
            margin-bottom: 6px;
          }

          .contact {
            text-align: center;
            font-size: 12px;
            margin-bottom: 24px;
          }

          .section-title {
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            border-bottom: 1px solid #111;
            padding-bottom: 4px;
            margin-top: 18px;
            margin-bottom: 8px;
          }

          p, li {
            font-size: 12px;
            line-height: 1.4;
          }

          .item {
            margin-bottom: 12px;
          }

          .role {
            font-weight: bold;
            font-size: 13px;
          }

          .company {
            font-weight: bold;
          }

          .date {
            font-style: italic;
            font-size: 11px;
          }
        </style>
      </head>

      <body>
        <h1>${escapeHtml(name) || "Your Name"}</h1>

        <p class="contact">
          ${escapeHtml(phone) || "Phone"} |
          ${escapeHtml(email) || "Email"} |
          ${escapeHtml(linkedin) || "LinkedIn"} |
          ${escapeHtml(location) || "Location"}
        </p>

        <div class="section-title">Technical Skills</div>
        <ul>
          ${skills.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>

        <div class="section-title">Qualification Summary</div>
        <p>${escapeHtml(summary)}</p>

        <div class="section-title">Professional Experience</div>
        ${experience
          .map(
            (item) => `
              <div class="item">
                <div class="role">${escapeHtml(item.role)}</div>
                <div><span class="company">${escapeHtml(
                  item.company
                )}</span> | <span class="date">${escapeHtml(
              item.dates
            )}</span></div>
                <p>${escapeHtml(item.description)}</p>
              </div>
            `
          )
          .join("")}

        <div class="section-title">Certifications</div>
        <ul>
          ${certifications
            .map((item) => `<li>${escapeHtml(item)}</li>`)
            .join("")}
        </ul>

        <div class="section-title">Education</div>
        ${education
          .map(
            (item) => `
              <div class="item">
                <div class="role">${escapeHtml(item.name)}</div>
                <p>${escapeHtml(item.degree)}</p>
                <p class="date">${escapeHtml(item.graduationDate)}</p>
              </div>
            `
          )
          .join("")}
      </body>
    </html>
  `;
};

export const generateModernHtml = (resumeData) => {
  const {
    name,
    email,
    phone,
    linkedin,
    location,
    summary,
    experience,
    skills,
    certifications,
    education,
  } = resumeData;

  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 40px;
            color: #111;
          }

          .header {
            border-bottom: 3px solid #111;
            padding-bottom: 16px;
            margin-bottom: 22px;
          }

          h1 {
            font-size: 30px;
            margin-bottom: 8px;
          }

          .contact {
            font-size: 12px;
            color: #444;
          }

          .section {
            margin-top: 20px;
          }

          .section-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 8px;
          }

          p, li {
            font-size: 12px;
            line-height: 1.45;
          }

          .tags {
            margin-top: 6px;
          }

          .tag {
            display: inline-block;
            border: 1px solid #bbb;
            border-radius: 14px;
            padding: 5px 10px;
            margin-right: 6px;
            margin-bottom: 6px;
            font-size: 11px;
          }

          .card {
            border-bottom: 1px solid #ddd;
            padding-bottom: 12px;
            margin-bottom: 14px;
          }

          .role {
            font-weight: bold;
            font-size: 14px;
          }

          .company {
            color: #444;
            font-size: 12px;
          }

          .date {
            color: #666;
            font-style: italic;
            font-size: 11px;
          }
        </style>
      </head>

      <body>
        <div class="header">
          <h1>${escapeHtml(name) || "Your Name"}</h1>
          <div class="contact">
            ${escapeHtml(phone) || "Phone"} •
            ${escapeHtml(email) || "Email"} •
            ${escapeHtml(linkedin) || "LinkedIn"} •
            ${escapeHtml(location) || "Location"}
          </div>
        </div>

        <div class="section">
          <div class="section-title">Profile</div>
          <p>${escapeHtml(summary)}</p>
        </div>

        <div class="section">
          <div class="section-title">Skills</div>
          <div class="tags">
            ${skills
              .map((item) => `<span class="tag">${escapeHtml(item)}</span>`)
              .join("")}
          </div>
        </div>

        <div class="section">
          <div class="section-title">Experience</div>
          ${experience
            .map(
              (item) => `
                <div class="card">
                  <div class="role">${escapeHtml(item.role)}</div>
                  <div class="company">${escapeHtml(item.company)}</div>
                  <div class="date">${escapeHtml(item.dates)}</div>
                  <p>${escapeHtml(item.description)}</p>
                </div>
              `
            )
            .join("")}
        </div>

        <div class="section">
          <div class="section-title">Certifications</div>
          <ul>
            ${certifications
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join("")}
          </ul>
        </div>

        <div class="section">
          <div class="section-title">Education</div>
          ${education
            .map(
              (item) => `
                <div class="card">
                  <div class="role">${escapeHtml(item.name)}</div>
                  <p>${escapeHtml(item.degree)}</p>
                  <div class="date">${escapeHtml(item.graduationDate)}</div>
                </div>
              `
            )
            .join("")}
        </div>
      </body>
    </html>
  `;
};

export const generateResumeHtml = (selectedTemplate, resumeData) => {
  if (selectedTemplate === "modern") {
    return generateModernHtml(resumeData);
  }

  return generateClassicHtml(resumeData);
};