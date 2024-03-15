imageInput.addEventListener('change', (event) => {
    const files = Array.from(event.target.files);
    files.forEach(file => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = file.name;
        nameCell.className = 'border px-4 py-2';
        row.appendChild(nameCell);

        const originalSizeCell = document.createElement('td');
        const originalSize = (file.size / 1024).toFixed(2);
        originalSizeCell.textContent = originalSize;
        originalSizeCell.className = 'border px-4 py-2';
        row.appendChild(originalSizeCell);

        const jpgSavingCell = document.createElement('td');
        const jpgSize = getJpgSize(file);
        const jpgSaving = ((originalSize - jpgSize) / originalSize * 100).toFixed(2);
        jpgSavingCell.textContent = jpgSaving + '%';
        jpgSavingCell.className = 'border px-4 py-2';
        row.appendChild(jpgSavingCell);

        const webSavingCell = document.createElement('td');
        const webSize = getWebSize(file);
        const webSaving = ((originalSize - webSize) / originalSize * 100).toFixed(2);
        webSavingCell.textContent = webSaving + '%';
        webSavingCell.className = 'border px-4 py-2';
        row.appendChild(webSavingCell);

        tableBody.appendChild(row);
    });
});