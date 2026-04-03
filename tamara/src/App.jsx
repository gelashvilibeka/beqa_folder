import './App.css'
import logo from './assets/emis.svg'
import news from './assets/news.png'
import Card from './components/Card.jsx'

function App() {
  const services = [
    {
      imageSrc: "https://emis-api.emis.ge/storage/media/1414/5-%E1%83%9E%E1%83%90%E1%83%A2%E1%83%90%E1%83%A0%E1%83%90.jpg",
      title: 'უმაღლესი საგანმანათლებლო დაწესებულებები',
      desc: 'უმაღლესი საგანმანათლებლო დაწესებულებები'
    },
    {
      imageSrc: "https://emis-api.emis.ge/storage/media/1361/%E1%83%9E%E1%83%90%E1%83%A2%E1%83%90%E1%83%A0%E1%83%90-%E1%83%A4%E1%83%9D%E1%83%A2%E1%83%9D.jpg",
      title: 'პროფესიულ საგანმანათლებლო პროგრამებზე რეგისტრაცია',
      desc: 'პროფესიულ საგანმანათლებლო პროგრამებზე რეგისტრაცია იწყება 2025 წლის 1 სექტემბერს და დასრულდება 25 სექტემბერს 24:00 საათზე.'
    },
    {
      imageSrc: "https://emis-api.emis.ge/storage/media/1355/patara-foto-mobiloba.jpg",
      title: 'მოსწავლის მობილობა',
      desc: 'მოსწავლის მობილობა გულისხმობს მის გადასვლას ერთი სკოლიდან სხვა სკოლაში.'
    },
    {
      imageSrc: "https://emis-api.emis.ge/storage/media/1390/atestatebis-gacema.png",
      title: 'ატესტატის / ატესტატის დუბლიკატის გაცემა',
      desc: 'ზოგადი განათლების დამადასტურებელი სახელმწიფო დოკუმენტები და მათი დუბლიკატები გაიცემა იუსტიციის სახლის ფილიალებში და სააგენტოს ტერიტორიულ სამსახურებში (სსიპ განათლების მართვის საინფორმაციო სისტემის მიერ ფორმირებული მონაცემთა ელექტრონული ბაზის საფუძველზე).'
    }
  ];

  return (
    <>
    <div className="main">
    <div className="menu">
      <div className="logo"><img src={logo} width={216}/></div>
      <div className="ul">
        <ul>
          <li>ჩვენ შესახებ <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
<path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#b0b3b8"/>
</svg></li>
          <li>სერვისები <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
<path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#b0b3b8"/>
</svg></li>
          <li>სიახლეები</li>
          <li>საჯარო ინფორმაცია</li>
          <li>კონტაქტი</li>
          <button href="#" className='search'><svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" viewBox="0 0 24 24" fill="none" stroke="#878787">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#b0b3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>

</svg></button>
          <button href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g id="Environment / Sun"> <path id="Vector" d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="#b0b3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> </g>
</svg></button>
        </ul>
      </div>
    </div>
    </div> 
    <hr className="line" />

    <div className="news_title">

       <img src={news} className='newsphoto'/>

    <div className="news_desc">
    <p>განისაზღვრა 2025-2026 სასწავლო წლის გაზაფხულის სემესტრის მობილობის ვადები:
    </p>
    <a href="#">სრულად წაკითხვა</a>
    <button className='right'><svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" fill="none">
<path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"/>
</svg></button>
<button className='left'><svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
<path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"/>
</svg></button>
    </div>
    </div>

    <div className="services">
    <div className="title">
      <div className="serv">სერვისები</div>
      <div className="all">არქივი</div>
    </div>
<div className="service">
  <div className="cards-container">
    {services.map((service, index) => (
      <Card 
        key={index} 
        imageSrc={service.imageSrc}
        title={service.title}
        desc={service.desc}
      />
    ))}

    <div className="title">
      <div className="questions">ხშირად დასმული კითხვები</div>
      <div className="events">ღონისძიებები</div>
      </div>
  </div>
</div>

    </div>



    </>
  )
}

export default App

