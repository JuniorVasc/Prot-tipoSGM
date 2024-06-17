function downloadReport(reportType) {
    let fileName = '';
    switch(reportType) {
        case 'EntregaMonitores':
            fileName = 'relatorios/EntregaMonitores.pdf';
            break;
        case 'DevolucaoMonitores':
            fileName = 'relatorios/DevolucaoMonitores.pdf';
            break;
        case 'Computadores':
            fileName = 'relatorios/Computadores.pdf';
            break;
        case 'Toners':
            fileName = 'relatorios/Toners.pdf';
            break;
        default:
            alert('Tipo de relatório desconhecido.');
            return;
    }

    // Create an anchor element and click it programmatically to trigger the download
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
