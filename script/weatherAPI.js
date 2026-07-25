// 도시 정보 (이름, 위도, 경도)
export const cities = {
  seoul: { name: "대한민국 서울 KR", lat: 37.57, lon: 126.98 },
  tokyo: { name: "일본 도쿄 JP", lat: 35.68, lon: 139.69 },
  paris: { name: "프랑스 파리 FR", lat: 48.85, lon: 2.35 },
};

// Open-Meteo API로 실시간 날씨(기온, 습도)를 가져오는 함수
export async function getWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("날씨 정보를 가져오지 못했습니다.");
  }

  const data = await response.json();
  return {
    temperature: data.current.temperature_2m,
    humidity: data.current.relative_humidity_2m,
  };
}
