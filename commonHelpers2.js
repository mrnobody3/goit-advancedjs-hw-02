import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-a71e76b7.js";const e={btn:document.querySelector("button[data-start]"),daysEl:document.querySelector("span[data-days]"),hoursEl:document.querySelector("span[data-hours]"),minutesEl:document.querySelector("span[data-minutes]"),secondsEl:document.querySelector("span[data-seconds]"),datePickerEl:document.querySelector("#datetime-picker")};let n=null,r=null;a(e.btn);e.btn.addEventListener("click",h);m("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){n=t[0].getTime(),n<Date.now()?(a(e.btn),f.show({title:"Warning",message:"Please choose a date in the future",color:"yellow"})):i(e.btn)}});function h(){a(e.btn),a(e.datePickerEl),r=setInterval(()=>{let t=y(n-Date.now());if(n<Date.now())return clearInterval(r),i(e.datePickerEl),s();s(t),console.log(n,Date.now())},1e3)}function y(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),c=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:l,seconds:c}}function o(t){return String(t).padStart(2,0)}function s(t={days:0,hours:0,minutes:0,seconds:0}){e.daysEl.textContent=o(t.days),e.hoursEl.textContent=o(t.hours),e.minutesEl.textContent=o(t.minutes),e.secondsEl.textContent=o(t.seconds)}function a(t){t.setAttribute("disabled","disabled")}function i(t){t.removeAttribute("disabled")}
//# sourceMappingURL=commonHelpers2.js.map
