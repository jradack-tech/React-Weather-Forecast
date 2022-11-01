const statusFromCode = code => {
  let weather = "";
  switch (code) {
    case 1:
    case 2:
    case 3:
      weather = "Mainly clear, partly cloudy, and overcast";
      break;
    case 45:
    case 48:
      weather = "Fog and depositing rime fog";
      break;
    case 51:
    case 53:
    case 55:
      weather = "Drizzle: Light, moderate, and dense intensity";
      break;
    case 56:
    case 57:
      weather = "Freezing Drizzle: Light and dense intensity";
      break;
    case 61:
    case 63:
    case 65:
      weather = "Rain: Slight, moderate and heavy intensity";
      break;
    case 66:
    case 67:
      weather = "Freezing Rain: Light and heavy intensity";
    case 71:
    case 73:
    case 75:
      weather = "Snow fall: Slight, moderate, and heavy intensity";
      break;
    case 77:
      weather = "Snow grains";
    case 80:
    case 81:
    case 82:
      weather = "Rain showers: Slight, moderate, and violent";
      break;
    case 85:
    case 86:
      weather = "Snow showers slight and heavy";
      break;
    case 95:
      weather = "Thunderstorm: Slight or moderate";
      break;
    case 96:
    case 99:
      weather = "Thunderstorm with slight and heavy hail";
      break;
    default:
      weather = "Clear sky";
  }
  console.log("w", weather)
  return weather;
}

export default statusFromCode;