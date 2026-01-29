 document.getElementById("user-city").addEventListener("submit", async (e) => {
            e.preventDefault();

            const city = document.getElementById("city").value.trim();
            const error = document.getElementById("error");

            error.textContent = "";

            if (!city) return;

            const cityName = document.getElementById("city-name");
            const district = document.getElementById("district");
            const localtime = document.getElementById("local-time");
            const img = document.getElementById("img");
            const calcius = document.getElementById("calcius");
            const weather = document.getElementById("weather");
            const feelsLike = document.getElementById("feelsLike");
            const humidity = document.getElementById("humidity");
            const windSpeed = document.getElementById("windSpeed");
            const visibility = document.getElementById("visibility");

            try {
                const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=414bfed570924542aff45116262701&q=${city}`);
                if (!res.ok) throw new Error("City not found or API error");
                
                const data = await res.json();

                cityName.textContent = data.location.name;
                district.textContent = `${data.location.region}, ${data.location.country}`;
                localtime.textContent = `Local time: ${data.location.localtime}`;
                img.src = data.current.condition.icon;
                calcius.textContent = data.current.temp_c + "°C";
                weather.textContent = data.current.condition.text;
                visibility.textContent = data.current.vis_km + " km";
                humidity.textContent = data.current.humidity + "%";
                windSpeed.textContent = data.current.wind_kph + " km/h";
                feelsLike.textContent = data.current.feelslike_c + "°C";

            } catch (err) {
                console.log(err);
                error.textContent = "City not found or API error.";
            }
        });