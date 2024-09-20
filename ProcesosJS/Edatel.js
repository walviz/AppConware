// Función de búsqueda de los ne edatel
function searchData() {
    const input = document.getElementById('search-NE').value.toLowerCase();
    const resultList = document.getElementById('result-list');
    resultList.innerHTML = '';  // Limpiar los resultados anteriores

    // Filtrar los datos basados en la búsqueda
    const filteredData = data.filter(item => item.name.toLowerCase().includes(input));

    // Mostrar los resultados
    filteredData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.NE}`;
        resultList.appendChild(li);
    });
}



// Datos JSON de los NE edatel
const data = [
    { "id": 1, "name": "Medellín", "NE": "10.165.43.251" },
    { "id": 3, "name": "Apartadó", "NE": "10.165.43.250" },
    { "id": 4, "name": "Yarumal", "NE": "10.165.43.52" },
    { "id": 5, "name": "Santafé de Antioquia", "NE": "10.165.43.56" },
    { "id": 6, "name": "Amaga", "NE": "10.165.43.55" },
    { "id": 7, "name": "Andes", "NE": "10.165.43.68" },
    { "id": 8, "name": "Segovia", "NE": "10.165.47.26" },
    { "id": 9, "name": "Barrancabermeja", "NE": "10.165.76.3" },
    { "id": 10, "name": "Valledupar", "NE": "10.165.55.247" },
    { "id": 11, "name": "Magangué", "NE": "10.165.53.5" },
    { "id": 12, "name": "Puerto Berrio", "NE": "10.165.47.30" },
    { "id": 13, "name": "Caucasia", "NE": "10.165.43.249" },
    { "id": 14, "name": "Turbo", "NE": "10.165.47.11" },
    { "id": 15, "name": "Sincelejo", "NE": "10.165.56.8" },
    { "id": 16, "name": "Chigorodó", "NE": "10.165.47.12" },
    { "id": 17, "name": "Santa Rosa de Osos", "NE": "10.165.47.28" },
    { "id": 18, "name": "Abejorral", "NE": "10.165.47.10" },
    { "id": 19, "name": "Sonsón", "NE": "10.165.47.9" },
    { "id": 20, "name": "San Luis", "NE": "10.165.47.13" },
    { "id": 21, "name": "Granada", "NE": "10.165.47.14" },
    { "id": 22, "name": "Don Matías", "NE": "10.165.47.20" },
    { "id": 23, "name": "Carepa", "NE": "10.165.47.15" },
    { "id": 24, "name": "Tarazá", "NE": "10.165.47.39" },
    { "id": 25, "name": "Jardín", "NE": "10.165.47.32" },
    { "id": 26, "name": "Jericó", "NE": "10.165.47.33" },
    { "id": 27, "name": "Támesis", "NE": "10.165.47.34" },
    { "id": 28, "name": "Valparaíso", "NE": "10.165.47.38" },
    { "id": 29, "name": "La Pintada", "NE": "10.165.47.35" },
    { "id": 30, "name": "Cerete", "NE": "10.165.57.9" },
    { "id": 31, "name": "Lorica", "NE": "10.165.57.10" },
    { "id": 32, "name": "Tolú", "NE": "10.165.57.11" },
    { "id": 33, "name": "La Sierra", "NE": "10.165.47.31" },
    { "id": 34, "name": "Maceo", "NE": "10.165.47.29" },
    { "id": 35, "name": "Yalí", "NE": "10.165.47.23" },
    { "id": 36, "name": "Remedios", "NE": "10.165.47.27" },
    { "id": 37, "name": "Zaragoza", "NE": "10.165.47.25" },
    { "id": 38, "name": "El Bagre", "NE": "10.165.47.24" },
    { "id": 39, "name": "Bosconia", "NE": "10.165.47.41" },
    { "id": 40, "name": "Puerto Nare", "NE": " 10.165.47.36" },
    { "id": 41, "name": "La Dorada", "NE": "10.165.47.40" },
    { "id": 42, "name": "Guatapé", "NE": "10.165.47.43" },
    { "id": 43, "name": "El Penol", "NE": "10.165.47.42" },
    { "id": 44, "name": "Los Almendros", "NE": "10.165.47.16" },
    { "id": 45, "name": "El Reposo", "NE": "10.165.47.17" },
    { "id": 46, "name": "La Marina", "NE": "10.165.47.18" },
    { "id": 47, "name": "La Navarra", "NE": "10.165.47.19" },
    { "id": 48, "name": "Montelibano", "NE": "10.165.57.18" },
    { "id": 49, "name": "Shangu", "NE": "10.165.57.16" },
    { "id": 50, "name": "Chinu", "NE": "10.165.57.14" },
    { "id": 51, "name": "San Roque", "NE": "10.165.47.22" },
    { "id": 52, "name": "Cienaga de Oro", "NE": "10.165.57.15" },
    { "id": 53, "name": "Corozal", "NE": "10.165.57.12" },
    { "id": 54, "name": "AMALFI", "NE": "10.165.47.44" },
    { "id": 55, "name": "Montería", "NE": "10.165.57.5" },
    { "id": 56, "name": "Barranquilla", "NE": "10.165.51.6" }
];

  
  
  