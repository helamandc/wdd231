import byuiCourse from './course.mjs';
import { setSectionSelection1 } from './sections.mjs';
import { setTitle1, renderSections1 } from './output.mjs';

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum);
    renderSections1(byuiCourse.sections);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections1(byuiCourse.sections);
});

setTitle1(byuiCourse);
setSectionSelection1(byuiCourse.sections);
renderSections1(byuiCourse.sections);