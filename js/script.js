// Barra de carga

window.addEventListener("load", () => {

    const barra = document.getElementById("barra-carga");
    const carga = document.getElementById("carga");
    const alarma = document.getElementById("p-alarma");
    const flash = document.getElementById("flash");
    const icono = document.getElementById("alarma-icon");
    const pantallaFinal = document.getElementById("final");

    setTimeout(() => {
        barra.style.width = "80%";
    }, 400);

    // Activación de la alarma tras la carga de la barra

    setTimeout(() => {

        alarma.style.opacity = 1;
        flash.classList.add("flash-activo");

        setTimeout(() => {

            // Desaparición de la pantalla de carga

            carga.classList.add("fade-out");

            // Desaparición del icono de alarma y luz roja

            flash.style.transition = "opacity 0.9s ease";
            icono.style.transition = "opacity 0.9s ease";
            flash.style.opacity = 0;
            icono.style.opacity = 0;

            // Mostrar la pantalla final

            setTimeout(() => {

                pantallaFinal.style.display = "flex";

                pantallaFinal.style.opacity = 1;
                pantallaFinal.style.pointerEvents = "auto";

                carga.remove();
                alarma.remove();

            }, 1400);

        }, 3000);

    }, 2800);
});
