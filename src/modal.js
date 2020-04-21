document.addEventListener("DOMContentLoaded", function (e) {
  //   CSS
  const css = document.createElement("link");
  css.setAttribute("href", "https://lucidamktstg.wpengine.com/wp-content/uploads/graphics/css/modal.css");
  css.setAttribute("rel", "stylesheet");
  document.head.appendChild(css);
  // OVERLAY
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");
  document.body.appendChild(modalOverlay);
  //   MODAL
  const modal = document.createElement("aside");
  modal.classList.add("modal");
  modal.setAttribute("style", "transform: translate(calc(100% + 50px), 0);");
  modal.innerHTML = `
        <div class="modal__inner">
        <button class="modal__button modal__button--close">
        <span>Close</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.01 65.01"><line x1="0.35" y1="0.35" x2="64.66" y2="64.66" style="stroke-miterlimit:10"/><line x1="64.66" y1="0.35" x2="0.35" y2="64.66" style="stroke-miterlimit:10"/></svg> 
        

        </button>
            <span class="modal__label">About Organization</span>
            <h1 id="name" class="modal__company-name">Company name</h1>
            <p class="modal__company-description">Nisi nostrud ullamco aliquip mollit eiusmod elit pariatur nisi.
                Officia
                sint
                tempor elit ea quis in ad. Consequat ut aute ipsum fugiat proident. In in adipisicing est ad sunt
                eiusmod
                officia pariatur culpa ut in exercitation cupidatat.</p>
            <ul class="modal__facts facts">
                <li class="fact">
                    <span class="fact__title">Forest 500 score</span>
                    <span class="fact__content fact__content--forest-500">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </li>
                <li class="fact">
                    <span class="fact__title">Another fact</span>
                    <span class="fact__content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></li>
            </ul>
            <button class="modal__button modal__button--more">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 65.92 65.39">
                    <path
                        d="M39,25.84l-.22.21a.38.38,0,0,0,0,.54l5.57,5.56H22.65a.38.38,0,0,0-.37.37v.32a.36.36,0,0,0,.37.37H44.38L38.81,38.8a.38.38,0,0,0,0,.54l.22.21a.36.36,0,0,0,.54,0L46.16,33a.35.35,0,0,0,0-.53l-6.59-6.59A.36.36,0,0,0,39,25.84Z" />
                    <path
                        d="M33,.7A31.92,31.92,0,0,0,3.45,20.34l-.14.36H5.48a30,30,0,1,1,0,24H3.31l.18.45A32,32,0,1,0,33,.7Z" />
                </svg>
            </button>
        </div>
        <svg class="lucida-flourish" width="300" height="167" viewBox="0 0 300 167" fill="none" role="img"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
                <path d="M120.013 110.073H60.0696V166.786H120.013V110.073Z" fill="#0B1E14" />
                <path d="M120.013 55.005H60.0696V110.073H120.013V55.005Z" fill="#185B22" />
                <path
                    d="M300 166.881H120.013V55.0366H240.278V110.073H244.836C252.135 110.083 259.357 111.56 266.072 114.419C272.787 117.277 278.858 121.458 283.922 126.711C293.424 136.499 299.124 149.35 300 162.959C299.937 164.256 300 165.553 300 166.881Z"
                    fill="#1D7059" />
                <path d="M179.956 0H120.013V55.0366H179.956V0Z" fill="#185B22" />
                <path
                    d="M299.874 162.959V166.881H240.152V109.947H244.71C252.008 109.956 259.231 111.434 265.946 114.292C272.661 117.151 278.732 121.331 283.796 126.584C293.325 136.404 299.027 149.306 299.874 162.959Z"
                    fill="#0B1E14" />
                <path
                    d="M240 55H180V3.4752e-05H184.832C198.35 -0.0151422 211.403 4.94122 221.51 13.9273C231.617 22.9133 238.073 35.3028 239.653 48.7414C239.88 50.8199 239.996 52.9091 240 55Z"
                    fill="#5FB994" />
                <path
                    d="M300 166.881H239.867V109.947H244.646C251.945 109.956 259.167 111.434 265.883 114.292C272.598 117.151 278.668 121.331 283.733 126.584C293.234 136.372 298.934 149.223 299.81 162.832C299.937 164.256 300 165.553 300 166.881Z"
                    fill="#08140D" />
                <path d="M240.152 110.168H180.083V166.881H240.152V110.168Z" fill="#194F3E" />
                <path d="M120.013 55.005H60.0696V55.0366H120.013V55.005Z" fill="#34A636" />
                <path
                    d="M180.082 55.0366H119.949C119.962 62.2846 121.404 69.459 124.194 76.1493C126.984 82.8396 131.066 88.9145 136.207 94.0263C141.349 99.1382 147.448 103.187 154.157 105.94C160.865 108.694 168.051 110.098 175.303 110.073H180.082V55.0366Z"
                    fill="#143A26" />
                <path
                    d="M180.082 166.881H119.949V109.947H124.728C132.028 109.952 139.251 111.429 145.967 114.287C152.683 117.146 158.753 121.328 163.815 126.584C174.305 137.371 180.145 151.839 180.082 166.881Z"
                    fill="#08140D" />
            </g>
            <defs>
                <clipPath id="clip0">
                
                    <rect width="300" height="166.881" fill="white" />
                </clipPath>
            </defs>
        </svg>

    </aside>`;

  document.body.appendChild(modal);
  modal.querySelector(".modal__button--close").addEventListener("click", function (e) {
    closeModal(modal, modalOverlay);
  });

  modalOverlay.addEventListener("click", function (e) {
    closeModal(modal, modalOverlay);
  });

  const profileLinks = Array.from(document.querySelectorAll(".profile-link"));

  window.addEventListener(
    "message",
    function (e) {
      console.log(e);
      //   const name = e.data.replace("modal: ", "");
      name = "Company name";
      openModal(modal, modalOverlay, name);
    },
    false
  );

  for (let link of profileLinks) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(modal, modalOverlay);
    });
  }
});

function openModal(modal, modalOverlay, name = "XXX") {
  modal.querySelector("#name").innerText = name;
  console.log(name);
  modal.classList.add("modal--visible");
  modalOverlay.classList.add("modal-overlay--visible");
}

function closeModal(modal, modalOverlay) {
  modal.classList.remove("modal--visible");
  modalOverlay.classList.remove("modal-overlay--visible");
}
