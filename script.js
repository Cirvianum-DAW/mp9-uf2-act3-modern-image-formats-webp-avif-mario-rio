const tableBody = document.getElementById('imageTable');
const imageInput = document.getElementById('imageInput');

imageInput.addEventListener('change', (event) => {
    const files = Array.from(event.target.files);
    files.forEach(file => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = file.name;
        nameCell.className = 'border px-4 py-2';
        row.appendChild(nameCell);

        const originalSizeCell = document.createElement('td');
        originalSizeCell.textContent = (file.size / 1024).toFixed(2); // Convert bytes to kB
        originalSizeCell.className = 'border px-4 py-2';
        row.appendChild(originalSizeCell);

        // You need to process the images to get the sizes in different formats
        // For now, we'll just put placeholders
        const jpgSavingCell = document.createElement('td');
        jpgSavingCell.textContent = 'N/A';
        jpgSavingCell.className = 'border px-4 py-2';
        row.appendChild(jpgSavingCell);

        const webSavingCell = document.createElement('td');
        webSavingCell.textContent = 'N/A';
        webSavingCell.className = 'border px-4 py-2';
        row.appendChild(webSavingCell);

        tableBody.appendChild(row);
    });
});