import React, { useState, useEffect } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categories';

function Home() {
  const [initData, setInitData] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitData(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      {initData.length === 0 && (<div>Carregando...</div>)}

      {initData.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={initData[0].videos[0].titulo}
                url={initData[0].videos[0].url}
                videoDescription={initData[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={initData[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
