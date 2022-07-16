function cone(radius, height) {
    //V = (1/3)πr2h
    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    //s = √(r2 + h2)
    const slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    //L = πrs = πr√(r2 + h2)
    const lateralSurface = Math.PI * radius * slantHeight;
    //B = πr2
    const baseSurface = Math.PI * Math.pow(radius, 2);
    //A = L + B = πrs + πr2 = πr(s + r) = πr(r + √(r2 + h2))
    const totalSurfaceArea = lateralSurface + baseSurface;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
cone(3, 5);
cone(3.3, 7.8);