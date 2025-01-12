export const parseResponseToHTML = (response) => {
  let htmlResponse = response.replace(/\*\*/g, "").replace(/\*/g, "");

  const sections = htmlResponse.split("\n\n");
  let htmlOutput = '<div class="p-4 mt-3 bg-blue-50">';

  sections.forEach((section) => {
    const [title, ...content] = section.split("\n");
    const sectionTitle = title.replace(/[\*\:]/g, "").trim();
    const sectionContent = content.join("<br />").trim();

    if (sectionTitle) {
      htmlOutput += `<h3 class="font-semibold text-md text-black">${sectionTitle}</h3>`;
    }

    if (sectionContent) {
      if (sectionContent.startsWith("•")) {
        htmlOutput += "<ul>";
        const listItems = sectionContent
          .split("\n")
          .map(
            (item) => `<li class="ml-4">${item.replace("•", "").trim()}</li>`
          );
        htmlOutput += listItems.join("");
        htmlOutput += "</ul>";
      } else {
        htmlOutput += `<p class="ml-4">${sectionContent}</p>`;
      }
    }
  });

  htmlOutput += "</div>";
  return htmlOutput;
};
