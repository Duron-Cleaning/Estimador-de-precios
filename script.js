const precios = {
    "1700": { General: 249.23, Deep: 346.66, MoveInOut: 444.08, PostConstruction: 468.44, Weekly: 134.40, BiWeekly: 141.58, Monthly: 158.32 },
    "1800": { General: 263.30, Deep: 360.73, MoveInOut: 456.18, PostConstruction: 482.51, Weekly: 147.12, BiWeekly: 149.32, Monthly: 175.77 },
    "1900": { General: 277.38, Deep: 373.80, MoveInOut: 469.26, PostConstruction: 495.58, Weekly: 160.04, BiWeekly: 164.77, Monthly: 184.43 },
    "2000": { General: 291.45, Deep: 388.88, MoveInOut: 481.33, PostConstruction: 510.66, Weekly: 156.35, BiWeekly: 164.80, Monthly: 184.50 },
    "2100": { General: 305.53, Deep: 403.95, MoveInOut: 494.41, PostConstruction: 524.73, Weekly: 163.67, BiWeekly: 172.54, Monthly: 193.22 },
    "2200": { General: 333.67, Deep: 417.09, MoveInOut: 507.98, PostConstruction: 552.87, Weekly: 179.04, BiWeekly: 190.65, Monthly: 210.67 },
    "2300": { General: 347.74, Deep: 431.16, MoveInOut: 519.56, PostConstruction: 566.95, Weekly: 195.76, BiWeekly: 195.76, Monthly: 219.40 },
    "2400": { General: 361.82, Deep: 445.23, MoveInOut: 531.63, PostConstruction: 581.02, Weekly: 192.94, BiWeekly: 207.98, Monthly: 236.85 },
    "2500": { General: 375.89, Deep: 459.30, MoveInOut: 544.71, PostConstruction: 595.09, Weekly: 200.26, BiWeekly: 215.04, Monthly: 245.57 },
    "2600": { General: 389.96, Deep: 473.37, MoveInOut: 558.79, PostConstruction: 609.16, Weekly: 207.58, BiWeekly: 218.98, Monthly: 254.30 },
    "2700": { General: 404.03, Deep: 487.45, MoveInOut: 598.88, PostConstruction: 623.24, Weekly: 215.00, BiWeekly: 226.72, Monthly: 263.02 },
    "2800": { General: 418.10, Deep: 501.52, MoveInOut: 613.01, PostConstruction: 631.38, Weekly: 221.43, BiWeekly: 234.46, Monthly: 271.75 },
    "2900": { General: 432.17, Deep: 515.59, MoveInOut: 627.02, PostConstruction: 645.44, Weekly: 229.53, BiWeekly: 242.20, Monthly: 271.75 },
    "3000": { General: 446.25, Deep: 543.67, MoveInOut: 641.10, PostConstruction: 665.45, Weekly: 236.85, BiWeekly: 249.94, Monthly: 280.47 },
    "3100": { General: 446.25, Deep: 543.67, MoveInOut: 641.10, PostConstruction: 665.45, Weekly: 236.85, BiWeekly: 249.94, Monthly: 280.47 }
};

function updateSliderValue(elementId, value) {
    document.getElementById(elementId).innerText = value;
}

document.getElementById('estimadorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const sqft = document.getElementById('sqft').value;
    const tipoServicio = document.querySelector('input[name="tipoServicio"]:checked').value;
    const frecuenciaServicio = document.getElementById('frecuenciaServicio').value;

    if (sqft in precios && tipoServicio in precios[sqft] && frecuenciaServicio in precios[sqft]) {
        const precioBase = precios[sqft][tipoServicio];
        const precioFrecuencia = precios[sqft][frecuenciaServicio];

        document.getElementById('precio').innerText = `$${(precioBase + precioFrecuencia).toFixed(2)}`;
    } else {
        document.getElementById('precio').innerText = "$0.00";
    }
});
