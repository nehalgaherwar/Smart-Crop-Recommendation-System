function recommendCrop() {
    const soil = document.getElementById("soil").value;
    const season = document.getElementById("season").value;
    const water = document.getElementById("water").value;

    let crop = "";

    if (soil === "loamy" && season === "monsoon" && water === "high") {
        crop = "🌾 Rice is best for this condition";
    } 
    else if (soil === "sandy" && season === "summer" && water === "low") {
        crop = "🌽 Bajra is suitable";
    }
    else if (soil === "clay" && season === "winter" && water === "medium") {
        crop = "🌾 Wheat is recommended";
    }
    else {
        crop = "🌱 Maize or Pulses can be grown";
    }

    document.getElementById("result").innerText = crop;
}
