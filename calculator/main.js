function calculate() {
    const radiusOrDiameter = parseFloat(document.getElementById('radius').value);

    const radius = radiusOrDiameter / 2;
    const area = Math.PI * Math.pow(radius, 2);
    const perimeter = 2 * Math.PI * radius;

    document.getElementById('areaResult').textContent = area.toFixed(2);
    document.getElementById('perimeterResult').textContent = perimeter.toFixed(2);
}