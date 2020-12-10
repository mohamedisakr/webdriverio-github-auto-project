const PageBase = require("./base.page");
const { getTrimmedText } = require("../utils/functions");

class Career extends PageBase {
  constructor() {
    super("./about/careers");
  }

  // container
  // get $container() {
  //   return $("[class='pb-md-6']");
  // }

  get $openPositions() {
    return $$(
      "button[type='button'][class='js-details-target d-block width-full btn-link h3-mktg text-normal muted-link']"
    );
  }

  getOpenPosistions() {
    let table = `\n`;
    this.$openPositions.forEach((position) => {
      let department = getTrimmedText(
        position.$("h3[class='float-left h3-mktg text-normal py-4']")
      );

      let openings = getTrimmedText(
        position.$("span[class='float-right d-inline-block my-4']")
      );

      table += `${department}\t\t${openings}\n`;
    });
    return table;
  }

  get $jobTitle() {}
}

module.exports = new Career();

// TODO: render as table
/*
 getOpenPosistions() {
    // let table = `<table>`;
    let table = `\n`;
    this.$career.forEach((item) => {
      let department = getTrimmedText(
        item.$("h3[class='float-left h3-mktg text-normal py-4']")
      );

      let numOfOpening = getTrimmedText(
        item.$("span[class='float-right d-inline-block my-4']")
      );

      // table += `<tr><td>${department}</td><td>${numOfOpening}</td> </tr>`;
      table += `${department}\t\t${numOfOpening}\n`;
      // console.log(department);
      // console.log(numOfOpening);
    });
    // table += `</table>`;
    return table;
  }
*/
