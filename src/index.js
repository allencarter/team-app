import _ from "lodash";
import { util } from "./util/util.js";

/**
 * @author Allen Carter <allencartercanvas@gmail.com>
 * @version 0.0.0
 * @description Teams App for the template-teams.php template page
 *
 * @ModuleControllers util
 */


const globalController = ( function () {


  window.openLabel = (target, targetContent, targetButton) => {
    const label = util.getEl(`#${target}`);
    label.classList.toggle("teams-height");
    const content = util.getEl(`#${targetContent}`);
    content.classList.toggle('show');
    content.classList.toggle('fade-in');
    const button = util.getEl(`#${targetButton}`);
    close(button);
  }

 const close = (el) => {
    console.log('closed');
    let txt = el.innerText;
    el.innerText = txt === 'Read' ? 'Close' : 'Read';
  }


  return {
    init: () => {
      console.log("Teams App");
    },
    
  }

}())

globalController.init();

