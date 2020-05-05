export function getMapPin(classes = []) {
    const pin = document.createElement("div");
    pin.classList.add("pin");
    if (classes.length) {
        classes.forEach((c) => pin.classList.add(c));
    }
    const pinBody = document.createElement("div");
    pinBody.classList.add("pin__body");
    pin.appendChild(pinBody);

    return pin;
}
