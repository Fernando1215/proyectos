class Pantalon{
      constructor(color){
        this.color=color;
      }
    }
    class HistorialPantalones {
      constructor() {
        this.usos = {};
      }
      agregarPantalon(pantalon) {
        const color = pantalon.color;
        if (this.usos[color]) {
          this.usos[color]++;
        } else {
          this.usos[color] = 1;
        }
        this.actualizarTabla();
      }
      actualizarTabla() {
        const tabla = document.getElementById("tablaHistorial");
        tabla.innerHTML = "";
        for (const color in this.usos) {
          const fila = document.createElement("tr");
          const celdaColor = document.createElement("td");
          celdaColor.textContent = color;
          const celdaConteo = document.createElement("td");
          celdaConteo.textContent = this.usos[color];
          fila.appendChild(celdaColor);
          fila.appendChild(celdaConteo);
          tabla.appendChild(fila);
        }
      }
    }
    const historial = new HistorialPantalones();
    function ponerPantalon() {
      const input = document.getElementById("colorInput");
      const color = input.value.trim().toLowerCase();
      if (color === "") return; 
      const pantalon = new Pantalon(color);
      historial.agregarPantalon(pantalon);
      input.value = "";
    }