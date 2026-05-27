const tocMarkdown = [...document.querySelectorAll(".Course-Lesson-Group")]
  .map(group => {
    const sectionTitle = group.querySelector("h3")?.innerText.trim();
    const lessonList = group.nextElementSibling;

    const lessons = [...lessonList.querySelectorAll(".Course-Lesson-List-Item")]
      .map(item => {
        const title = item.querySelector(".title a")?.innerText.trim();
        const description = item.querySelector(".description")?.innerText.trim();

        return `## ${title}\n${description}`;
      })
      .join("\n\n");

    return `# ${sectionTitle}\n\n${lessons}`;
  })
  .join("\n\n");

console.log(tocMarkdown);
copy(tocMarkdown);