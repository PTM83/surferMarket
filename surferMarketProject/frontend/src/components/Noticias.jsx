

const Noticias = () => {
  return (
    <>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <h2>Noticias</h2>
    
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ margin: '20px' }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lHjXKSGBpfQ"
              title=""
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div style={{ margin: '20px' }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/P0zPiS2_qJg"
              title="Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noticias;
