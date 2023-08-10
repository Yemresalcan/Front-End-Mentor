
/*Data fetcher */
fetch("data.json")
    .then((response) => {
        return response.json();
    })
    .then((data1) => {
        let labels = [];
        let values = [];

        for (var i = 0; i < Object.keys(data1).length; i++) {
            labels.push(data1[i].day);
            values.push(data1[i].amount);
        }
        var d = new Date();
        var dayName = d.toString().split(" ")[0];
        console.log(dayName);

        let colors = [];
        let colors_hover = [];

        for (var i = 0; i <= 7; i++) {
            colors.push("hsl(10, 79%, 65%)");
            colors_hover.push("hsla(10, 79%, 65%, 60%)");
        }

        const str = labels[d.getDay() - 1];
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);

        if (dayName == str2) {
            colors[d.getDay() - 1] = "hsl(186, 34%, 60%)";
            colors_hover[d.getDay() - 1] = "hsla(186, 34%, 60%, 60%)";
        }

        const data = {
            labels: labels,
            datasets: [
                {
                    label: "",
                    backgroundColor: colors,
                    borderRadius: 5,
                    borderSkipped: false,
                    data: values,
                    hoverBackgroundColor: colors_hover,
                },
            ],
        };

        console.log(data.datasets[0].data);
        const config = {
            type: "bar",
            data: data,
            options: {
                onHover: (event, chartElement) => {
                    event.native.target.style.cursor = chartElement[0]
                        ? "pointer"
                        : "default";
                },

                plugins: {
                    legend: {
                        display: false,
                    },
                },
                responsive: true,
                scales: {
                    x: {
                        ticks: { color: "hsl(28, 10%, 53%)", font: { size: 12 } },
                        grid: {
                            color: "white",
                            borderColor: "white",
                        },
                    },
                    y: {
                        ticks: {
                            display: false,
                        },
                        grid: {
                            color: "white",
                            borderColor: "white",
                            display: false,
                        },
                    },
                },
            },
        };
        const myChart = new Chart(document.getElementById("myChart"), config);
    });