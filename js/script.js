window.addEventListener("load", () => {

    const barra = document.getElementById("barra-carga");
    const carga = document.getElementById("carga");
    const alarma = document.getElementById("p-alarma");
    const flash = document.getElementById("flash");
    const icono = document.getElementById("alarma-icon");
    const pantallaFinal = document.getElementById("final");

    // 1) Barra hasta el 80%
    setTimeout(() => {
        barra.style.width = "80%";
    }, 400);

    // 2) Activar alarma después de la barra
    setTimeout(() => {

        // Mostrar contenedor de alarma
        alarma.style.opacity = 1;

        // Iniciar animación de parpadeos
        flash.classList.add("flash-activo");

        // → 5.2s coincide con el último parpadeo fuerte
        setTimeout(() => {

            // A) La pantalla de carga desaparece justo cuando el flash está en opacidad 1
            carga.classList.add("fade-out");

            // B) Flash y icono se desvanecen juntos con transición suave
            flash.style.transition = "opacity 0.9s ease";
            icono.style.transition = "opacity 0.9s ease";
            flash.style.opacity = 0;
            icono.style.opacity = 0;

            // C) Mostrar pantalla final suavemente después del fade
            setTimeout(() => {
                // Activar opacidad de la pantalla final
                pantallaFinal.style.opacity = 1;
                pantallaFinal.style.pointerEvents = "auto";

                // Limpiar elementos anteriores
                carga.remove();
                alarma.remove();
            }, 1400); // coincide con la duración del fade

        }, 3000); // momento exacto del último flash

    }, 2800); // tiempo después de iniciar barra de carga
});

