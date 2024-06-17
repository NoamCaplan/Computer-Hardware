document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        row.addEventListener('click', () => {
            const description = row.querySelector('td:nth-child(2)').textContent;
            alert(description);
        });
    });
});