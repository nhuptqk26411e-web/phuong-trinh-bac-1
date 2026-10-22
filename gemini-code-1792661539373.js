function solveEquation() {
    const valA = document.getElementById('coefA').value;
    const valB = document.getElementById('coefB').value;
    const resultBox = document.getElementById('resultBox');
    const resultText = document.getElementById('resultText');

    // Kiểm tra xem người dùng đã nhập đủ chưa
    if (valA === "" || valB === "") {
        showResult("Vui lòng nhập đầy đủ hệ số a và b!", "error");
        return;
    }

    const a = parseFloat(valA);
    const b = parseFloat(valB);

    // Thuật toán giải phương trình ax + b = 0
    if (a === 0) {
        if (b === 0) {
            showResult("Phương trình có Vô số nghiệm.", "success");
        } else {
            showResult("Phương trình Vô nghiệm.", "error");
        }
    } else {
        const x = -b / a;
        // Làm tròn đến 4 chữ số thập phân nếu cần
        const formattedX = Number.isInteger(x) ? x : x.toFixed(4);
        showResult(`Phương trình có nghiệm: x = ${formattedX}`, "success");
    }
}

function showResult(message, type) {
    const resultBox = document.getElementById('resultBox');
    const resultText = document.getElementById('resultText');

    resultText.innerText = message;
    resultBox.className = `result-box ${type}`;
}

function resetForm() {
    document.getElementById('coefA').value = '';
    document.getElementById('coefB').value = '';
    const resultBox = document.getElementById('resultBox');
    resultBox.className = 'result-box hidden';
}

// Bắt sự kiện phím Enter để tính toán nhanh
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        solveEquation();
    }
});