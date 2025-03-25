$(document).ready(() => {
    // Fetch Data from JSON File or API
    $.ajax({
        url: "public/data/visitor_stats.json", // Static JSON file
        method: "GET",
        dataType: "json",
        success: function(data) {
            drawChart(data);
        },
        error: function() {
            console.error("Error fetching visitor statistics.");
        }
    });

    function drawChart(data) {
        const ctx = document.getElementById("visitorChart").getContext("2d");

        new Chart(ctx, {
            type: "line",
            data: {
                labels: data.dates,
                datasets: [{
                    label: "Daily Visitors",
                    data: data.visitors,
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
});
