var content = document.getElementById("content"), 
            button = document.getElementById('btnPDF');
            window.jsPDF = window.jspdf.jsPDF;
        
        function generatePdf() {
            let jsPdf = new jsPDF('p', 'pt', 'a4');
            const opt = {
                callback: function (jsPdf) {
                    jsPdf.save("curriculo-wellington.pdf");
                },
                margin: [45, 45, 45, 45],
                autoPaging: 'text',
                html2canvas: {
                    allowTaint: true,
                    dpi: 300,
                    letterRendering: true,
                    logging: false,
                    scale: .45
                }
            };

            jsPdf.html(content, opt);
        }

        button.addEventListener('click', generatePdf);