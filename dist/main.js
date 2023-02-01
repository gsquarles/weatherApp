(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"3c90295a8b055c166c4e.png",n=e.p+"596f9fa63ffd3c4be624.png",i=e.p+"c08af1ef9a6eedaaa448.png",r=e.p+"235a6fdfcf23ab2afa4e.png",a=e.p+"f2547c80b2db197840fe.png",c=document.getElementById("search"),o=document.querySelector("form"),d=document.querySelector(".location"),m=document.querySelector(".temp"),s=document.querySelector(".low"),u=document.querySelector(".high"),h=document.querySelector(".feelLike"),p=document.querySelector(".humidity"),l=document.querySelector(".wind"),w=document.querySelector(".description"),y=document.querySelector(".weatherPic"),g=document.querySelector(".toggleButton");async function f(e){try{if("F"===g.innerHTML){const c=await async function(e){try{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=f824c9a258641470aebe27d4e0e686d3&units=imperial`,{mode:"cors"}),n=await t.json();return{name:n.name,temp:n.main.temp,feelsLike:n.main.feels_like,humidity:n.main.humidity,low:n.main.temp_min,high:n.main.temp_max,weather:n.weather[0].main,wind:n.wind.speed}}catch(e){alert("City not found Try again")}}(e);d.innerText=c.name,m.innerText=Math.round(c.temp)+"°F",s.innerText="Low: "+Math.round(c.low)+"°F",u.innerText="High: "+Math.round(c.high)+"°F",h.innerText="Feels like: "+Math.round(c.feelsLike)+"°F",p.innerText="Humidity: "+Math.round(c.humidity)+"%",l.innerText="Wind Speed: "+c.wind.toFixed(1)+"mph",w.innerText=c.weather,"Clouds"===c.weather?y.src=i:"Clear"===c.weather?y.src=n:"Mist"===c.weather?y.src=r:"Rain"===c.weather?y.src=a:"Snow"===c.weather?y.src=t:y.src=""}else{const t=await async function(e){try{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=f824c9a258641470aebe27d4e0e686d3&units=metric`,{mode:"cors"}),n=await t.json();return{name:n.name,temp:n.main.temp,feelsLike:n.main.feels_like,humidity:n.main.humidity,low:n.main.temp_min,high:n.main.temp_max,weather:n.weather[0].main,wind:n.wind.speed}}catch(e){alert("City not found Try again")}}(e);d.innerText=t.name,m.innerText=Math.round(t.temp)+"°C",s.innerText="Low: "+Math.round(t.low)+"°C",u.innerText="High: "+Math.round(t.high)+"°C",h.innerText="Feels like: "+Math.round(t.feelsLike)+"°C",p.innerText="Humidity: "+Math.round(t.humidity)+"%",l.innerText="Wind Speed: "+t.wind.toFixed(1)+"mph",w.innerText=t.weather,"Clouds"===t.weather?y.src="../dist/imgs/cloudyDay.png":"Clear"===t.weather?y.src="../dist/imgs/sunWeather.png":"Mist"===t.weather?y.src="../dist/imgs/mistPic.png":"Rain"===t.weather?y.src="../dist/imgs/rainyDay.png":"Snow"===t.weather?y.src="../dist/imgs/snowyDay.png":y.src=""}}catch(e){}}o.addEventListener("submit",(e=>{e.preventDefault(),f(c.value),c.value=""})),g.addEventListener("click",(()=>{"F"===g.innerHTML?(g.innerHTML="C",f(d.innerHTML)):(g.innerHTML="F",f(d.innerHTML))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akIsSUFBTSwyQkFDVSxTQUFyQnVCLEVBQVNXLFFBQ2ZqQixFQUFXakIsSUFBTSw0QkFDVSxTQUFyQnVCLEVBQVNXLFFBQ2ZqQixFQUFXakIsSUFBTSw0QkFFakJpQixFQUFXakIsSUFBTSxFQUVyQixDQUlSLENBRkosTUFBTW9DLEdBRUYsQ0FFSixDQUVBLEVBQUtRLGlCQUFpQixVQUFVQyxJQUM1QkEsRUFBTUMsaUJBRU4xQixFQURhYixFQUFVd0MsT0FFdkJ4QyxFQUFVd0MsTUFBUSxFQUFFLElBR3hCN0IsRUFBYTBCLGlCQUFpQixTQUFTLEtBQ0wsTUFBM0IxQixFQUFhSSxXQUNaSixFQUFhSSxVQUFZLElBRXpCRixFQURhLEVBQVNFLGFBSXRCSixFQUFhSSxVQUFZLElBRXpCRixFQURhLEVBQVNFLFdBRTFCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kdWxlcy9kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJleHBvcnQgY29uc3QgZ2V0TG9jYXRpb25GYXJlbmhlaXQgPSBhc3luYyBmdW5jdGlvbiAobG9jYXRpb24pe1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD1mODI0YzlhMjU4NjQxNDcwYWViZTI3ZDRlMGU2ODZkMyZ1bml0cz1pbXBlcmlhbGBcbiAgICAsIHttb2RlOlwiY29yc1wifSk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IHtcbiAgICAgICAgbmFtZToganNvbi5uYW1lLFxuICAgICAgICB0ZW1wOiBqc29uLm1haW4udGVtcCxcbiAgICAgICAgZmVlbHNMaWtlOiBqc29uLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgaHVtaWRpdHk6IGpzb24ubWFpbi5odW1pZGl0eSxcbiAgICAgICAgbG93OiBqc29uLm1haW4udGVtcF9taW4sXG4gICAgICAgIGhpZ2g6IGpzb24ubWFpbi50ZW1wX21heCxcbiAgICAgICAgd2VhdGhlcjoganNvbi53ZWF0aGVyWzBdLm1haW4sXG4gICAgICAgIHdpbmQ6IGpzb24ud2luZC5zcGVlZFxuICAgIH07XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICAgIH1jYXRjaChlcnIpe1xuICAgICAgICBhbGVydCgnQ2l0eSBub3QgZm91bmQgVHJ5IGFnYWluJyk7XG4gICAgfVxuICAgIFxufVxuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uQ2Vsc2l1cyA9IGFzeW5jIGZ1bmN0aW9uIChsb2NhdGlvbil7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPWY4MjRjOWEyNTg2NDE0NzBhZWJlMjdkNGUwZTY4NmQzJnVuaXRzPW1ldHJpY2BcbiAgICAsIHttb2RlOlwiY29yc1wifSk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IHtcbiAgICAgICAgbmFtZToganNvbi5uYW1lLFxuICAgICAgICB0ZW1wOiBqc29uLm1haW4udGVtcCxcbiAgICAgICAgZmVlbHNMaWtlOiBqc29uLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgaHVtaWRpdHk6IGpzb24ubWFpbi5odW1pZGl0eSxcbiAgICAgICAgbG93OiBqc29uLm1haW4udGVtcF9taW4sXG4gICAgICAgIGhpZ2g6IGpzb24ubWFpbi50ZW1wX21heCxcbiAgICAgICAgd2VhdGhlcjoganNvbi53ZWF0aGVyWzBdLm1haW4sXG4gICAgICAgIHdpbmQ6IGpzb24ud2luZC5zcGVlZFxuICAgIH07XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICAgIH1jYXRjaChlcnIpe1xuICAgICAgICBhbGVydCgnQ2l0eSBub3QgZm91bmQgVHJ5IGFnYWluJyk7XG4gICAgfVxuICAgIFxufVxuXG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbkZhcmVuaGVpdCwgZ2V0TG9jYXRpb25DZWxzaXVzfSBmcm9tIFwiLi9tb2R1bGVzL2RhdGFcIjtcbmltcG9ydCBzbm93eURheSBmcm9tICcuLi9kaXN0L2ltZ3Mvc25vd3lEYXkucG5nJztcbmltcG9ydCBzdW5ueURheSBmcm9tICcuLi9kaXN0L2ltZ3Mvc3VuV2VhdGhlci5wbmcnO1xuaW1wb3J0IGNsb3VkeURheSBmcm9tICcuLi9kaXN0L2ltZ3MvY2xvdWR5RGF5LnBuZyc7XG5pbXBvcnQgbWlzdHlEYXkgZnJvbSAnLi4vZGlzdC9pbWdzL21pc3RQaWMucG5nJztcbmltcG9ydCByYWlueURheSBmcm9tICcuLi9kaXN0L2ltZ3MvcmFpbnlEYXkucG5nJztcblxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uJyk7XG5jb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyk7XG5jb25zdCBsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93Jyk7XG5jb25zdCBoaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2gnKTtcbmNvbnN0IGZlZWxMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxMaWtlJyk7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuY29uc3Qgd2VhdGhlclBpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyUGljJyk7XG5jb25zdCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlQnV0dG9uJyk7XG5cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheURhdGEoY2l0eSl7XG4gICAgdHJ5e1xuICAgICAgICBpZih0b2dnbGVCdXR0b24uaW5uZXJIVE1MID09PSAnRicpe1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRMb2NhdGlvbkZhcmVuaGVpdChjaXR5KTtcbiAgICAgICAgICAgIGxvY2F0aW9uLmlubmVyVGV4dCA9IHJlc3BvbnNlLm5hbWU7XG4gICAgICAgICAgICB0ZW1wZXJhdHVyZS5pbm5lclRleHQgPSBNYXRoLnJvdW5kKHJlc3BvbnNlLnRlbXApICsgXCJcXHUwMEIwRlwiO1xuICAgICAgICAgICAgbG93LmlubmVyVGV4dCA9ICdMb3c6ICcgKyBNYXRoLnJvdW5kKHJlc3BvbnNlLmxvdykgKyBcIlxcdTAwQjBGXCI7XG4gICAgICAgICAgICBoaWdoLmlubmVyVGV4dCA9ICdIaWdoOiAnICsgTWF0aC5yb3VuZChyZXNwb25zZS5oaWdoKSArIFwiXFx1MDBCMEZcIjtcbiAgICAgICAgICAgIGZlZWxMaWtlLmlubmVyVGV4dCA9ICdGZWVscyBsaWtlOiAnICsgTWF0aC5yb3VuZChyZXNwb25zZS5mZWVsc0xpa2UpICsgXCJcXHUwMEIwRlwiO1xuICAgICAgICAgICAgaHVtaWRpdHkuaW5uZXJUZXh0ID0gJ0h1bWlkaXR5OiAnICsgTWF0aC5yb3VuZChyZXNwb25zZS5odW1pZGl0eSkrICclJztcbiAgICAgICAgICAgIHdpbmQuaW5uZXJUZXh0ID0gJ1dpbmQgU3BlZWQ6ICcgKyByZXNwb25zZS53aW5kLnRvRml4ZWQoMSkgKydtcGgnO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gcmVzcG9uc2Uud2VhdGhlcjtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLndlYXRoZXIgPT09ICdDbG91ZHMnKXtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyUGljLnNyYyA9IGNsb3VkeURheTtcbiAgICAgICAgICAgIH1lbHNlIGlmIChyZXNwb25zZS53ZWF0aGVyID09PSAnQ2xlYXInKXtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyUGljLnNyYyA9IHN1bm55RGF5O1xuICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2Uud2VhdGhlciA9PT0gJ01pc3QnKXtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyUGljLnNyYyA9IG1pc3R5RGF5O1xuICAgICAgICAgICAgfWVsc2UgaWYgKHJlc3BvbnNlLndlYXRoZXIgPT09ICdSYWluJyl7XG4gICAgICAgICAgICAgICAgd2VhdGhlclBpYy5zcmMgPSByYWlueURheTtcbiAgICAgICAgICAgIH1lbHNlIGlmIChyZXNwb25zZS53ZWF0aGVyID09PSAnU25vdycpe1xuICAgICAgICAgICAgICAgIHdlYXRoZXJQaWMuc3JjID0gc25vd3lEYXk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyUGljLnNyYyA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRMb2NhdGlvbkNlbHNpdXMoY2l0eSk7XG4gICAgICAgICAgICBsb2NhdGlvbi5pbm5lclRleHQgPSByZXNwb25zZS5uYW1lO1xuICAgICAgICAgICAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gTWF0aC5yb3VuZChyZXNwb25zZS50ZW1wKSArIFwiXFx1MDBCMENcIjtcbiAgICAgICAgICAgIGxvdy5pbm5lclRleHQgPSAnTG93OiAnICsgTWF0aC5yb3VuZChyZXNwb25zZS5sb3cpICsgXCJcXHUwMEIwQ1wiO1xuICAgICAgICAgICAgaGlnaC5pbm5lclRleHQgPSAnSGlnaDogJyArIE1hdGgucm91bmQocmVzcG9uc2UuaGlnaCkgKyBcIlxcdTAwQjBDXCI7XG4gICAgICAgICAgICBmZWVsTGlrZS5pbm5lclRleHQgPSAnRmVlbHMgbGlrZTogJyArIE1hdGgucm91bmQocmVzcG9uc2UuZmVlbHNMaWtlKSArIFwiXFx1MDBCMENcIjtcbiAgICAgICAgICAgIGh1bWlkaXR5LmlubmVyVGV4dCA9ICdIdW1pZGl0eTogJyArIE1hdGgucm91bmQocmVzcG9uc2UuaHVtaWRpdHkpKyAnJSc7XG4gICAgICAgICAgICB3aW5kLmlubmVyVGV4dCA9ICdXaW5kIFNwZWVkOiAnICsgcmVzcG9uc2Uud2luZC50b0ZpeGVkKDEpICsnbXBoJztcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHJlc3BvbnNlLndlYXRoZXI7XG4gICAgICAgICAgICBpZihyZXNwb25zZS53ZWF0aGVyID09PSAnQ2xvdWRzJyl7XG4gICAgICAgICAgICAgICAgd2VhdGhlclBpYy5zcmMgPSAnLi4vZGlzdC9pbWdzL2Nsb3VkeURheS5wbmcnO1xuICAgICAgICAgICAgfWVsc2UgaWYgKHJlc3BvbnNlLndlYXRoZXIgPT09ICdDbGVhcicpe1xuICAgICAgICAgICAgICAgIHdlYXRoZXJQaWMuc3JjID0gJy4uL2Rpc3QvaW1ncy9zdW5XZWF0aGVyLnBuZyc7XG4gICAgICAgICAgICB9ZWxzZSBpZihyZXNwb25zZS53ZWF0aGVyID09PSAnTWlzdCcpe1xuICAgICAgICAgICAgICAgIHdlYXRoZXJQaWMuc3JjID0gJy4uL2Rpc3QvaW1ncy9taXN0UGljLnBuZyc7XG4gICAgICAgICAgICB9ZWxzZSBpZiAocmVzcG9uc2Uud2VhdGhlciA9PT0gJ1JhaW4nKXtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyUGljLnNyYyA9ICcuLi9kaXN0L2ltZ3MvcmFpbnlEYXkucG5nJztcbiAgICAgICAgICAgIH1lbHNlIGlmIChyZXNwb25zZS53ZWF0aGVyID09PSAnU25vdycpe1xuICAgICAgICAgICAgICAgIHdlYXRoZXJQaWMuc3JjID0gJy4uL2Rpc3QvaW1ncy9zbm93eURheS5wbmcnO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgd2VhdGhlclBpYy5zcmMgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuY2F0Y2goZXJyKXtcblxuICAgIH1cbiAgICBcbn1cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChldmVudCk9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbmZvID0gc2VhcmNoQmFyLnZhbHVlO1xuICAgIGRpc3BsYXlEYXRhKGluZm8pO1xuICAgIHNlYXJjaEJhci52YWx1ZSA9ICcnO1xufSlcblxudG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBpZih0b2dnbGVCdXR0b24uaW5uZXJIVE1MID09PSAnRicpe1xuICAgICAgICB0b2dnbGVCdXR0b24uaW5uZXJIVE1MID0gJ0MnO1xuICAgICAgICBjb25zdCBjaXR5ID0gbG9jYXRpb24uaW5uZXJIVE1MO1xuICAgICAgICBkaXNwbGF5RGF0YShjaXR5KTtcbiAgICAgICAgXG4gICAgfWVsc2V7XG4gICAgICAgIHRvZ2dsZUJ1dHRvbi5pbm5lckhUTUwgPSAnRic7XG4gICAgICAgIGNvbnN0IGNpdHkgPSBsb2NhdGlvbi5pbm5lckhUTUw7XG4gICAgICAgIGRpc3BsYXlEYXRhKGNpdHkpO1xuICAgIH1cbn0pXG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImciLCJnbG9iYWxUaGlzIiwidGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImRvY3VtZW50IiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJzZWFyY2hCYXIiLCJnZXRFbGVtZW50QnlJZCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wZXJhdHVyZSIsImxvdyIsImhpZ2giLCJmZWVsTGlrZSIsImh1bWlkaXR5Iiwid2luZCIsImRlc2NyaXB0aW9uIiwid2VhdGhlclBpYyIsInRvZ2dsZUJ1dHRvbiIsImFzeW5jIiwiZGlzcGxheURhdGEiLCJjaXR5IiwiaW5uZXJIVE1MIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwibmFtZSIsInRlbXAiLCJtYWluIiwiZmVlbHNMaWtlIiwiZmVlbHNfbGlrZSIsInRlbXBfbWluIiwidGVtcF9tYXgiLCJ3ZWF0aGVyIiwic3BlZWQiLCJlcnIiLCJhbGVydCIsImdldExvY2F0aW9uRmFyZW5oZWl0IiwiaW5uZXJUZXh0IiwiTWF0aCIsInJvdW5kIiwidG9GaXhlZCIsImdldExvY2F0aW9uQ2Vsc2l1cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9