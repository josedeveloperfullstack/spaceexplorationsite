function scrollDown() {
    // Calcular la posición a la que se quiere hacer scroll (en este caso, la mitad de la altura de la página)
    let targetPosition = document.documentElement.scrollHeight / 5;
    // Obtener la posición actual de la ventana
    let currentPosition = document.documentElement.scrollTop;
    // Calcular la distancia que se debe recorrer en cada fotograma de la animación
    let distance = targetPosition - currentPosition;
    let step = distance / 50;
    // Iniciar la animación de scroll
    requestAnimationFrame(scrollAnimation);
    
    function scrollAnimation() {
        // Calcular la nueva posición de scroll
        currentPosition += step;
        // Hacer scroll a la nueva posición
        document.documentElement.scrollTop = currentPosition;
        // Comprobar si se alcanzó la posición objetivo
        if (Math.abs(currentPosition - targetPosition) > Math.abs(step)) {
            // Si no se alcanzó la posición objetivo, seguir animando
            requestAnimationFrame(scrollAnimation);
        }
    }
}