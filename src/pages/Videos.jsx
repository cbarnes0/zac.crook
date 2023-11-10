const Videos = () => {
    return (
        <div className="flex justify-center items-center h-screen">
  <div className="relative" style={{ width: '%', maxWidth: '800px', paddingBottom: '56.25%' }}>
    <iframe
      className="relative top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/LyqoCL6Cimg?si=8nPHugKuEsdhxQlR"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</div>

    )
}

export default Videos;