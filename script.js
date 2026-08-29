document.addEventListener("DOMContentLoaded", function () {

    var screens = document.querySelectorAll(".screen");
    var menuItems = document.querySelectorAll(".menu-item");
    var menuCards = document.querySelectorAll(".menu-card");

    var sidebar = document.getElementById("sidebar");
    var sidebarOverlay = document.getElementById("sidebarOverlay");
    var menuToggle = document.getElementById("menuToggle");
    var closeMenu = document.getElementById("closeMenu");
    var explorarBtn = document.getElementById("explorarBtn");

    function showScreen(id) {

        var i;

        for (i = 0; i < screens.length; i++) {
            screens[i].classList.remove("active");
        }

        var screen = document.getElementById(id);

        if (!screen) {
            console.error("No existe la sección: " + id);
            return;
        }

        screen.classList.add("active");

        for (i = 0; i < menuItems.length; i++) {

            menuItems[i].classList.remove("active");

            if (menuItems[i].getAttribute("data-target") === id) {
                menuItems[i].classList.add("active");
            }
        }

        closeSidebar();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function openSidebar() {

        if (sidebar) {
            sidebar.classList.add("open");
        }

        if (sidebarOverlay) {
            sidebarOverlay.classList.add("open");
        }
    }


    function closeSidebar() {

        if (sidebar) {
            sidebar.classList.remove("open");
        }

        if (sidebarOverlay) {
            sidebarOverlay.classList.remove("open");
        }
    }

    if (menuToggle) {

        menuToggle.addEventListener("click", function () {
            openSidebar();
        });

    }

    if (closeMenu) {

        closeMenu.addEventListener("click", function () {
            closeSidebar();
        });

    }

    if (sidebarOverlay) {

        sidebarOverlay.addEventListener("click", function () {
            closeSidebar();
        });

    }

    for (var i = 0; i < menuItems.length; i++) {

        menuItems[i].addEventListener("click", function () {

            var target = this.getAttribute("data-target");

            if (target) {
                showScreen(target);
            }

        });

    }

    for (var j = 0; j < menuCards.length; j++) {

        menuCards[j].addEventListener("click", function () {

            var target = this.getAttribute("data-target");

            if (target) {
                showScreen(target);
            }

        });

    }

    if (explorarBtn) {

        explorarBtn.addEventListener("click", function () {

            showScreen("menu");

        });

    }

    var continentes = [

        {
            nombre: "América",
            desc: "Norte, Centro y Sudamérica. Rico en biodiversidad.",
            icono: "fa-globe-americas"
        },

        {
            nombre: "Europa",
            desc: "Historia, arte y cultura. 44 países.",
            icono: "fa-globe-europe"
        },

        {
            nombre: "Asia",
            desc: "El continente más grande y poblado.",
            icono: "fa-globe-asia"
        },

        {
            nombre: "África",
            desc: "Cuna de la humanidad. Gran diversidad.",
            icono: "fa-globe-africa"
        },

        {
            nombre: "Oceanía",
            desc: "Islas y arrecifes. Australia y Nueva Zelanda.",
            icono: "fa-globe"
        },

        {
            nombre: "Antártida",
            desc: "El continente blanco, sin población permanente.",
            icono: "fa-snowflake"
        }

    ];


    var continentList = document.getElementById("continentList");
    var continentDetail = document.getElementById("continentDetail");


    if (continentList) {

        for (var c = 0; c < continentes.length; c++) {

            var continentElement = document.createElement("div");
            var continent = continentes[c];

            continentElement.className = "continent-item";

            continentElement.innerHTML =
                '<i class="fas ' + continent.icono + '"></i>' +
                '<strong>' + continent.nombre + '</strong>' +
                '<small>Ver →</small>';


            continentElement.addEventListener("click", function () {

                var nombre = this.querySelector("strong").textContent;

                var selected = null;

                for (var x = 0; x < continentes.length; x++) {

                    if (continentes[x].nombre === nombre) {

                        selected = continentes[x];
                        break;

                    }

                }


                if (continentDetail && selected) {

                    continentDetail.innerHTML =
                        '<div class="detail-card">' +

                        '<h3>' +
                        '<i class="fas fa-info-circle"></i>' +
                        selected.nombre +
                        '</h3>' +

                        '<p>' +
                        selected.desc +
                        '</p>' +

                        '<span class="badge">' +
                        selected.nombre +
                        '</span>' +

                        '</div>';

                }

            });


            continentList.appendChild(continentElement);

        }

    }

    var faunaData = [

        {
            nombre: "León",
            continente: "África",
            desc: "Rey de la sabana. En peligro de extinción.",
            imagen: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80"
        },

        {
            nombre: "Panda",
            continente: "Asia",
            desc: "Oso panda gigante, símbolo de China.",
            imagen: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=900&q=80"
        },

        {
            nombre: "Águila Calva",
            continente: "América",
            desc: "Ave nacional de EE.UU. Símbolo de libertad.",
            imagen: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=900&q=80"
        },

        {
            nombre: "Canguro",
            continente: "Oceanía",
            desc: "Marsupial emblemático de Australia.",
            imagen: "https://images.unsplash.com/photo-1527333656061-ca7adf608ae1?auto=format&fit=crop&w=900&q=80"
        },

        {
            nombre: "Pingüino",
            continente: "Antártida",
            desc: "Ave marina que habita el hielo.",
            imagen: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?auto=format&fit=crop&w=900&q=80"
        }

    ];


    var faunaList = document.getElementById("faunaList");
    var faunaDetail = document.getElementById("faunaDetail");


    if (faunaList) {

        for (var f = 0; f < faunaData.length; f++) {

            var faunaElement = document.createElement("div");
            var fauna = faunaData[f];

            faunaElement.className = "fauna-item";

            faunaElement.innerHTML =
                '<i class="fas fa-paw"></i>' +
                '<strong>' + fauna.nombre + '</strong>' +
                '<small>' + fauna.continente + '</small>';


            faunaElement.addEventListener("click", function () {

                var nombre = this.querySelector("strong").textContent;

                var selected = null;

                for (var y = 0; y < faunaData.length; y++) {

                    if (faunaData[y].nombre === nombre) {

                        selected = faunaData[y];
                        break;

                    }

                }


                if (faunaDetail && selected) {

                    faunaDetail.innerHTML =
                        '<div class="detail-card">' +

                        '<h3>' +
                        '<i class="fas fa-paw"></i>' +
                        selected.nombre +
                        '</h3>' +

                        '<p>' +
                        '<strong>Continente:</strong> ' +
                        selected.continente +
                        '</p>' +

                        '<p>' +
                        selected.desc +
                        '</p>' +

                        '<img src="' +
                        selected.imagen +
                        '" alt="' +
                        selected.nombre +
                        '" class="detail-image">' +

                        '</div>';

                }

            });


            faunaList.appendChild(faunaElement);

        }

    }

    var maravillas = [

        {
            titulo: "Gran Cañón",
            desc: "EE.UU. — Formación rocosa imponente.",
            imagen: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80"
        },

        {
            titulo: "Aurora Boreal",
            desc: "Islandia — Espectáculo de luces en el cielo.",
            imagen: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1200&q=80"
        },

        {
            titulo: "Selva Amazónica",
            desc: "Brasil — Una de las regiones con mayor biodiversidad.",
            imagen: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80"
        },

        {
            titulo: "Monte Everest",
            desc: "Nepal — La montaña más alta del mundo.",
            imagen: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
        }

    ];


    var carouselIndex = 0;

    var carouselImage = document.getElementById("carouselImage");
    var carouselTitle = document.getElementById("carouselTitle");
    var carouselDesc = document.getElementById("carouselDesc");

    var carouselPrev = document.getElementById("carouselPrev");
    var carouselNext = document.getElementById("carouselNext");


    function renderCarousel() {

        if (!carouselImage || !carouselTitle || !carouselDesc) {
            return;
        }

        var item = maravillas[carouselIndex];

        carouselImage.innerHTML =
            '<img src="' +
            item.imagen +
            '" alt="' +
            item.titulo +
            '" class="carousel-photo">';

        carouselTitle.textContent = item.titulo;

        carouselDesc.textContent = item.desc;

    }

    if (carouselPrev) {

        carouselPrev.addEventListener("click", function () {

            carouselIndex--;

            if (carouselIndex < 0) {
                carouselIndex = maravillas.length - 1;
            }

            renderCarousel();

        });

    }

    if (carouselNext) {

        carouselNext.addEventListener("click", function () {

            carouselIndex++;

            if (carouselIndex >= maravillas.length) {
                carouselIndex = 0;
            }

            renderCarousel();

        });

    }

    var searchInput = document.getElementById("searchInput");
    var searchBtn = document.getElementById("searchBtn");
    var searchResults = document.getElementById("searchResults");


    function performSearch() {

        if (!searchInput || !searchResults) {
            return;
        }

        var query = searchInput.value.toLowerCase().trim();

        if (query === "") {

            searchResults.innerHTML =
                '<div class="result-item">' +
                'Escribe algo para comenzar la búsqueda.' +
                '</div>';

            return;

        }


        var resultados = [];

        for (var a = 0; a < continentes.length; a++) {

            resultados.push({

                nombre: continentes[a].nombre,

                tipo: "Continente",

                descripcion: continentes[a].desc

            });

        }

        for (var b = 0; b < faunaData.length; b++) {

            resultados.push({

                nombre: faunaData[b].nombre,

                tipo: "Fauna",

                descripcion:
                    faunaData[b].continente +
                    " — " +
                    faunaData[b].desc

            });

        }
        for (var d = 0; d < maravillas.length; d++) {

            resultados.push({

                nombre: maravillas[d].titulo,

                tipo: "Maravilla",

                descripcion: maravillas[d].desc

            });

        }

        var encontrados = resultados.filter(function (item) {

            return (

                item.nombre.toLowerCase().indexOf(query) !== -1 ||

                item.descripcion.toLowerCase().indexOf(query) !== -1

            );

        });

        if (encontrados.length === 0) {

            searchResults.innerHTML =
                '<div class="result-item">' +
                'No se encontraron resultados para "' +
                searchInput.value +
                '".' +
                '</div>';

            return;

        }

        var html = "";

        for (var e = 0; e < encontrados.length; e++) {

            html +=

                '<div class="result-item">' +

                '<strong>' +
                encontrados[e].nombre +
                '</strong>' +

                '<span class="badge">' +
                encontrados[e].tipo +
                '</span>' +

                '<br>' +

                '<small>' +
                encontrados[e].descripcion +
                '</small>' +

                '</div>';

        }


        searchResults.innerHTML = html;

    }

    if (searchBtn) {

        searchBtn.addEventListener("click", function () {

            performSearch();

        });

    }

    if (searchInput) {

        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                performSearch();

            }

        });

    }


    showScreen("inicio");

    renderCarousel();

});
