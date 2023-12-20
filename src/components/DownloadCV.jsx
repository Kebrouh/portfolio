import React from 'react';

const DownloadCV = () => {
  const pdfPathEn = '/Olivier_Daigneault_cv_EN.pdf';  // Update this with the actual path to your PDF file
  const pdfPathFr = '/Olivier_Daigneault_cv_FR.pdf';  // Update this with the actual path to your PDF file

    return (
        <div className="cv">
            <p>CV - Olivier Daigneault :</p>
            <a href={pdfPathEn} download="Olivier_Daigneault_cv_EN.pdf" target="_blank" rel="noopener noreferrer">
                En
            </a>
            <p>/</p>
            <a href={pdfPathFr} download="Olivier_Daigneault_cv_FR.pdf" target="_blank" rel="noopener noreferrer">
                Fr
            </a>
        </div>
    );
};

export default DownloadCV;