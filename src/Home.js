import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2020/img/Prime/XCM_Manual_ORIGIN_1259690_1329040_TR_tr_pv_launch_hero_banners_tr_tr_3347402_1500x600_1X_tr_TR._CB405452713_.jpg'
          alt=''
        />
        <div className='home__row'>
          <Product
            id='1231245'
            title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg'
            rating={5}
          />
          <Product
            id='46846165'
            title='SAMSUNG GP-FPA515WSBLW WITS Galaxy A51 Koruyucu Kılıf, Mavi'
            price={83.14}
            image='https://images-na.ssl-images-amazon.com/images/I/6180-OUpYTL._AC_SL1200_.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='5269469684'
            title='Haylou T15 Bluetooth Kulaklık'
            price={159.84}
            image='https://images-na.ssl-images-amazon.com/images/I/41nlyNvMohL._AC_SL1024_.jpg'
            rating={4}
          />
          <Product
            id='81488248'
            title='Philips 58PUS8505/62 The One Performans Serisi 4K UHD LED Android 58 (146 cm) TV [Enerji Sınıfı A+]'
            price={6373.37}
            image='https://images-na.ssl-images-amazon.com/images/I/71VNjVuKx%2BL._AC_SL1500_.jpg'
            rating={5}
          />
          <Product
            id='4168848'
            title='SAMSUNG GP-FPA515WSBLW WITS Galaxy A51 Koruyucu Kılıf, Mavi'
            price={83.14}
            image='https://images-na.ssl-images-amazon.com/images/I/61sRwfSXEGL._AC_SL1080_.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='4618742'
            title='XD Design Bobby Hırsızlık Önleyici Sırt Çantası'
            price={343}
            image='https://images-na.ssl-images-amazon.com/images/I/81M87xeANLL._AC_SL1500_.jpg'
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
