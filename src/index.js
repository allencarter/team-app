import _ from "lodash";
import { util } from "./util/util.js";

/**
 * @author Allen Carter <allencartercanvas@gmail.com>
 * @version 1.0.1
 * @description JavaScript for the ac-team-cards plugin
 *
 * @ModuleControllers util
 */


const globalController = ( function () {


  window.openLabel = (target, targetContent, targetButton) => {
    const label = util.getEl(`#${target}`);
    label.classList.toggle("teams-height");
    const content = util.getEl(`#${targetContent}`);
    content.classList.toggle('show');
    content.classList.toggle('fade-in-team');
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

