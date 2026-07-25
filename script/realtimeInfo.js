import { cities, getWeather } from "./weatherAPI.js";

const citySelect = document.getElementById("city-select");
const weatherBox = document.getElementById("weather-box");

// select 태그에 도시 옵션 채우기
function renderCityOptions() {
  Object.entries(cities).forEach(([key, city]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = city.name;
    citySelect.appendChild(option);
  });
}

// 선택된 도시의 날씨를 화면에 표시
async function showWeather(cityKey) {
  const city = cities[cityKey];
  if (!city) return;

  // 1) 좌표부터 즉시 DOM에 표시
  weatherBox.innerHTML = `
    <p>📍 ${city.name}</p>
    <p>위도(Latitude): ${city.lat}</p>
    <p>경도(Longitude): ${city.lon}</p>
    <p>실시간 날씨 로딩 중... ⏳</p>
  `;

  try {
    // 2) 비동기로 실제 날씨 데이터 요청
    const weather = await getWeather(city.lat, city.lon);

    // 3) 로딩 메시지를 실제 데이터로 교체
    weatherBox.innerHTML = `
      <p>📍 ${city.name}</p>
      <p>위도(Latitude): ${city.lat}</p>
      <p>경도(Longitude): ${city.lon}</p>
      <p>🌡️ 현재 기온: ${weather.temperature}°C</p>
      <p>💧 현재 습도: ${weather.humidity}%</p>
    `;
  } catch (error) {
    weatherBox.innerHTML += `<p>⚠️ 날씨 정보를 불러오지 못했습니다.</p>`;
  }
}

// 도시가 바뀔 때마다 실행 (change 이벤트)
citySelect.addEventListener("change", (e) => showWeather(e.target.value));

// 페이지 로드 시 초기 실행
renderCityOptions();
showWeather(citySelect.value);
