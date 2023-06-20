const elements = ["p", "h1"];
const random = Math.floor(Math.random() * elements.length);
const element = elements[random];
const first_element = document.getElementsByTagName(element)[0];
if (element == "p") {
    position = Math.random() < 0.5 ? "beforebegin" : "afterend";
} else {
    position = "afterend"
}
if (typeof first_element !== "undefined") {
    first_element.insertAdjacentHTML(position, `
        <div style="border: 1px solid #c7c7c7; border-radius: 5px;max-width: 450px;width: 90%;margin-right: auto;margin-left: auto;box-shadow: 5px 10px 18px #888888;margin-bottom:30px">
            <a rel="nofollow" href="/ads/?url=embroidery/ref/2196441/" style="text-decoration: none;color: #000000;" target="_blank">
                <img src="/ads/banner1.jpg" style="width: 100%;border-radius: 5px 5px 0 0;">
                <div style="padding: 10px;line-height: 1.2;text-align:center;color: #9C27B0;font-weight: bold;">
                    Browse unique, high quality embroidery designs. New designs added daily. Personal & commercial use allowed.
                </div>
                <div style="text-align: center;padding: 5px;">
                    <img src="/ads/download.jpg" alt="download" style="max-width: 200px;width: 100%;border-radius: 5px;">
                </div>
            </a>
        </div>
        <div style="border: 1px solid #c7c7c7; border-radius: 5px;max-width: 450px;width: 90%;margin-right: auto;margin-left: auto;box-shadow: 5px 10px 18px #888888;margin-bottom:30px">
            <a rel="nofollow" href="/ads/?url=subscriptions/graphics/needle-arts/cross-stitch-patterns/ref/2196441/" style="text-decoration: none;color: #000000;" target="_blank">
                <img src="/ads/banner2.jpg" style="width: 100%;border-radius: 5px 5px 0 0;">
                <div style="padding: 10px;line-height: 1.2;text-align:center;color: #F44336;font-weight: bold;">
                    Download 4000+ different graphic Cross Stitch Patterns in a variety of styles, formats and themes.
                </div>
                <div style="text-align: center;padding: 5px;">
                    <img src="/ads/download.jpg" alt="download" style="max-width: 200px;width: 100%;border-radius: 5px;">
                </div>
            </a>
        </div>
    `);
}