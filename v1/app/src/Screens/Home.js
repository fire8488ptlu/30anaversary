import React, { useRef, useEffect, useState } from "react";
import Title from "../Img/Title.svg";
import Top from "../Img/Top.svg";
import Sign from "../Img/Sign.svg";
import Pin from "../Img/Pin.svg";
import Psalm from "../Img/Psalm.svg";
import Line from "../Img/Line.svg";
import Obj1 from "../Img/Obj1.svg";
import IMG1 from "../Img/01.jpg";
import IMG2 from "../Img/02.jpg";
import IMG3 from "../Img/03.jpg";
import Obj2 from "../Img/Obj2.svg";
import Month2 from "../Img/Month2.svg";
import Month4 from "../Img/Month4.svg";
import Month5 from "../Img/Month5.svg";
import Month6 from "../Img/Month6.svg";
import More from "../Img/More.svg";
import SFB from "../Img/SFB.svg";
import SIG from "../Img/SIG.svg";
import SLine from "../Img/SLine.svg";
import FlashLine from "../Img/Flashline.svg";
import Shop1 from "../Img/shop1.jpg";
import Shop2 from "../Img/shop2.jpg";
import Shop3 from "../Img/shop3.jpg";
import Shop4 from "../Img/shop4.jpg";
import Shop5 from "../Img/shop5.jpg";
import Shop6 from "../Img/shop6.jpg";
import ShopLink from "../Img/ShopLink1.svg";
import Info1 from "../Img/Info1.jpg";
import Info2 from "../Img/Info2.jpg";
import Info3 from "../Img/Info3.jpg";
import Info6 from "../Img/Info6.jpg";
import ToggleDown from "../Img/ToggleDown.svg"
import ToggleUp from "../Img/ToggleUp.svg"
import TimeDead from "../Img/TimeDead.png"
import Album from "../Img/Album.png"
import AlbumIG from "../Img/AlbumIG.png"
import Line1 from '../Img/Line1.svg'
const Home = () => {
  const scrollToTop = () => {
    const scrollDuration = 1000; // Set scroll duration in milliseconds (adjust to control speed)
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Calculate step size
    let scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Adjust interval timing to fine-tune smoothness
  };
  const baseHeight = 135; // rem
  const expandPerBox = 30; // rem

  const [info4Height, setInfo4Height] = useState(`${baseHeight}rem`);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  useEffect(() => {
    // Count how many boxes are open
    const openCount = [open1, open2, open3].filter(Boolean).length;

    // Update height dynamically
    const newHeight = baseHeight + openCount * expandPerBox;
    setInfo4Height(`${newHeight}rem`);
  }, [open1, open2, open3]);

  const IGClick = () => {
    window.open("https://www.instagram.com/bannerch.media/", "_blank"); // Opens Instagram in a new tab
  };

  const FBClick = () => {
    window.open("https://zh-tw.facebook.com/TCBCH", "_blank"); // Opens Instagram in a new tab
  };

  const LineClick = () => {
    window.open("https://line.me/R/ti/p/@zys2409y", "_blank"); // Opens Instagram in a new tab
  };

  const ShopClick = () => {
    window.open(" https://www.bannerculture.com", "_blank"); // Opens Instagram in a new tab
  };

  const BMIG = () => {
    window.open("https://www.instagram.com/bannerch.music/", "_blank"); // Opens Instagram in a new tab
  };


 
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-info1">
          <img
            src={Info1}
            alt="Background"
            className="home-info1-background-img"
            loading="lazy"
          />
          <img className="home-info1-img" src={Title} />
          <img className="home-info1-img2" src={Psalm} />
          {/* <div className="home-info1-box">

            <div className="home-info1-box-text1">
              我們不將這些事向他們的子孫隱瞞
              <br />
              要將耶和華的美德和祂的能力
              <br />
              並祂奇妙的作為，述說給後代聽
              <br />
            </div>
          </div> */}
        </div>

        <div className="home-info2">
          <img
            src={Info2}
            alt="Background"
            className="home-info2-background-img"
            loading="lazy"
          />
          <div className="home-info2-box">
            <h4
              className="home-info2-box-h4"
              style={{ fontFamily: "Hiragino-SansW3" }}
            >
              全球各地的旌旗家人們,2025即將迎來旌旗教會建立的第30週年。<br></br>
              回顧這一路的旅程,我們見證了神奇妙的作為,
              也看到了祂在我們當中逐步成就的異象。
              <br></br>
              <br></br>
              旌旗教會不僅是一個聚會的場所,更是每一位屬靈家人溫暖的家。<br></br>
              30年來,神帶領我們走過高山低谷,讓我們深刻體會祂的恩典與信實。
              <br></br>
              <br></br>
              在這值得紀念的日子,不論你在哪裡,
              我們都邀請你一同回到這屬靈的家,一同歡慶這個特別的時刻。全球旌旗家人的每一次聚集,都是屬靈的合一。讓我們攜手奔向下一段恩典的旅程,
              共同見證主的榮耀與祝福！期待和你們一起歡慶！
            </h4>

            <div className="home-info2-box-textbox">
              <h4
                className="home-info2-box-textbox-h4"
                style={{ fontFamily: "Hiragino-SansW3" }}
              >
                旌旗教會主任牧師
              </h4>
              <img
                className="home-info2-box-textbox-img"
                src={Sign}
                style={{ transform: "translate(1rem,0rem)" }}
              />
            </div>
          </div>

          <div className="home-info2-photobox" style={{ marginTop: "7rem" }}>
            <div className="home-info2-photobox-photogroup">
              <iframe
                className="home-info2-photobox-photogroup-item"
                width="auto"
                height="180px"
                src="https://www.youtube.com/embed/Wu-xCVmTLCY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="home-info3">
          <img
            src={Info3}
            alt="Background"
            className="home-info3-background-img"
            loading="lazy"
          />
          <div className="home-info3-box">
            <h1
              className="home-info3-box-h1"
              style={{ fontFamily: "Hiragino-SansW8" }}
            >
              旌旗30
              <br></br>
              承接使命
              <br></br>
              週年慶特會
            </h1>
            <h3
              className="home-info3-box-h3"
              style={{ marginTop: "1rem", marginBottom: "3.5rem" }}
            >
              邀請全球旌旗家人一起團聚
            </h3>
            <div
              className="home-info3-box-h1box"
              style={{ marginBottom: "0rem" }}
            >
              <h1
                className="home-info3-box-h1box-h1"
                style={{ fontFamily: "Hiragino-SansW8" }}
              >
                06.21
              </h1>
              <h3
                className="home-info3-box-h1box-h3"
                style={{ marginLeft: "0.5rem" }}
              >
                (sat)
              </h3>
            </div>

            <div
              className="home-info3-box-h1box"
              style={{ marginBottom: "0rem" }}
            >
              <h1
                className="home-info3-box-h1box-h1"
                style={{ fontFamily: "Hiragino-SansW8" ,fontSize:"3.5rem", transform:"translate(0,-1rem)"}}
              >
                台中國際展覽館
              </h1>

            </div>

            <div
              className="home-info3-box-h1box"
              style={{ marginBottom: "0rem" }}
            >
              <h3
                className="home-info3-box-h1box-h3"
                style={{  fontSize:"1.8rem", transform:"translate(0.25rem,-2.25rem)", fontWeight:"200"}}
              >
                台中市烏日區中山路三段1號
              </h3>

            </div>

            <div className="home-info3-box-wbox">
              <div className="home-info3-box-wbox-L"> 
              <img src={Line1} className="home-info3-box-wbox-L-img" /> 
              </div>
              <div className="home-info3-box-wbox-R">
                <h1 className="home-info3-box-wbox-R-R1"> 全球集結號 | 敬拜特會</h1>
                <h1 className="home-info3-box-wbox-R-R2"> 10:00-11:30
                  <h4 className="home-info3-box-wbox-R-R2-R"> (09:00開放入場)</h4>
                </h1>
              </div>
            </div>



            <div className="home-info3-box-wbox" style={{marginTop:"1.75rem"}}>
              <div className="home-info3-box-wbox-L"> 
              <img src={Line1} className="home-info3-box-wbox-L-img" /> 
              </div>
              <div className="home-info3-box-wbox-R">
                <h1 className="home-info3-box-wbox-R-R1"> 旗聚時光</h1>
                <h1 className="home-info3-box-wbox-R-R2"> 11:30-13:00
                  <h4 className="home-info3-box-wbox-R-R2-R"> (各地土產品嘗+午餐時間(自理))</h4>
                </h1>
              </div>
            </div>


    




            <div className="home-info3-box-wbox" style={{marginTop:"1.75rem"}}>
              <div className="home-info3-box-wbox-L"> 
              <img src={Line1} className="home-info3-box-wbox-L-img" /> 
              </div>
              <div className="home-info3-box-wbox-R">
                <h1 className="home-info3-box-wbox-R-R1"> 週年慶特會</h1>
                <h1 className="home-info3-box-wbox-R-R2"> 14:00-16:30
                  <h4 className="home-info3-box-wbox-R-R2-R"> (13:00開放入場)</h4>
                </h1>
              </div>
            </div>


            <div className="home-info3-box-wbox" style={{marginTop:"1.75rem"}}>
              <div className="home-info3-box-wbox-L"> 
              <img src={Line1} className="home-info3-box-wbox-L-img" /> 
              </div>
              <div className="home-info3-box-wbox-R">
                <h1 className="home-info3-box-wbox-R-R1"> 敬拜不停歇</h1>
                <h1 className="home-info3-box-wbox-R-R2"> 16:30-17:30
                  <h4 className="home-info3-box-wbox-R-R2-R"> </h4>
                </h1>
              </div>
            </div>
{/* 
            <h4 className="home-info3-box-h3--yellow">場次一 09:00</h4>
            <h4 className="home-info3-box-h3--yellow">場次二 14:00</h4>
            <h4 className="home-info3-box-h3--yellow">場次三 18:00</h4> */}

            <div className="home-info3-box-h3box" style={{display:'none'}}>
              <img className="home-info3-box-h3box-img" src={Pin} />
              <h3
                className="home-info3-box-h3box-h3"
                style={{ fontFamily: "Hiragino-SansW3" }}
              >
                台中旌旗教會
              </h3>
            </div>

            <h5
              className="home-info3-box-h5"
              style={{
                marginTop: "0.3rem",
                marginLeft: "3.2rem",
                fontFamily: "Hiragino-SansW3",
                display:"none"
              }}
            >
              台中市南屯區文心南五路三段160號
            </h5>
          </div>
        </div>

        <div className="home-info4" style={{height:info4Height}}>
          <div className="home-info4-box">
            <div className="home-info4-box-title">
              <h1
                className="home-info4-box-title-h1"
                style={{ fontFamily: "Hiragino-SansW8" }}
              >
                來賓介紹
              </h1>
              <img className="home-info4-box-title-svg" src={Obj1} />
            </div>

            <div className="home-info4-box-imgbox">
              <img className="home-info4-box-imgbox-img1" src={IMG1} />
              <h2
                className="home-info4-box-imgbox-h2"
                style={{ fontFamily: "Hiragino-SansW5", marginTop: "2rem" }}
              >
                Rich Kao 牧師
              </h2>
              <h2
                className="home-info4-box-imgbox-h2"
                style={{ fontFamily: "Hiragino-SansW3" }}
              >
                五岩影響力團隊主席
              </h2>

              {/* ⬇️ Collapse toggle button */}
              <div
                className="home-info4-box-imgbox-collapse-toggle"
                onClick={() => setOpen1(!open1)}
                style={{ cursor: "pointer", margin: "1rem 0" }}
              >
                {open1 ?  <img className="home-info4-box-imgbox-collapse-toggle-img" src={ToggleUp}  /> : <img className="home-info4-box-imgbox-collapse-toggle-img" src={ToggleDown} />}
              </div>

              {/* ⬇️ Collapse content */}
              {open1 && (
                <div className="home-info4-box-imgbox-collapse-content">
                  <p className="home-info4-box-imgbox-collapse-content-p">
                  Rich Kao 是五岩教會(Five Stones Church)的創會牧師，擔任主任牧師長達18年。
                  他與妻子 Memie 在2003年移居加拿大溫哥華，創立了五岩教會，並於2022年起透過五岩影響力團隊(Five Stones Impact)專注於植堂事工，在全球重要城市建立具影響力的教會。
                  他曾多次參與旌旗教會的「遇見神蹟特會」，透過預言、禱告和啟發人心的信息，與教會牧者一同帶領許多人經歷神的大能與醫治。
                  </p>
                </div>
              )}



              <img className="home-info4-box-imgbox-img2" src={Line} />
            </div>
            
            {/*  */}
              

            <div
              className="home-info4-box-imgbox"
              style={{ marginTop: "5rem" }}
            >
              <img className="home-info4-box-imgbox-img1" src={IMG2} />
              <h2
                className="home-info4-box-imgbox-h2"
                style={{ fontFamily: "Hiragino-SansW5", marginTop: "2rem" }}
              >
                貝克博士
              </h2>
              <h2
                className="home-info4-box-imgbox-h2"
                style={{ fontFamily: "Hiragino-SansW3" }}
              >
                美國維真大學神學院院長
              </h2>

              {/* ⬇️ Collapse toggle button */}
              <div
                className="home-info4-box-imgbox-collapse-toggle"
                onClick={() => setOpen2(!open2)}
                style={{ cursor: "pointer", margin: "1rem 0" }}
              >
                {open2 ?  <img className="home-info4-box-imgbox-collapse-toggle-img" src={ToggleUp}  /> : <img className="home-info4-box-imgbox-collapse-toggle-img" src={ToggleDown} />}
              </div>

              {/* ⬇️ Collapse content */}
              {open2 && (
                <div className="home-info4-box-imgbox-collapse-content">
                  <p className="home-info4-box-imgbox-collapse-content-p">
                  Dr. Corné J. Bekker（貝克博士）是美國維真大學（Regent University）神學院院長，專注於靈性養成與領導力研究。他的教學風格深入淺出，幫助教會領袖在屬靈生命與使命感上更扎根。
                  多年來，貝克博士透過旌旗教會的系列講座，以啟發性的教導和生活化的例子，觸動無數會友的心。今年6月，他將再度帶來全新的屬靈激勵與啟發，為三十週年特會增添亮點。

                  </p>
                </div>
              )}



              <img className="home-info4-box-imgbox-img2" src={Line} />
            </div>

            <div
              className="home-info4-box-imgbox"
              style={{ marginTop: "5rem" }}
            >
              <img className="home-info4-box-imgbox-img1" src={IMG3} />
              <h2
                className="home-info4-box-imgbox-h2"
                style={{ fontFamily: "Hiragino-SansW5", marginTop: "2rem" }}
              >
                伊藤嘉子 主任牧師
              </h2>
              <h2
                className="home-info4-box-imgbox-h2"
                style={{ fontFamily: "Hiragino-SansW3" }}
              >
                沖繩白之家教會
              </h2>

              {/* ⬇️ Collapse toggle button */}
              <div
                className="home-info4-box-imgbox-collapse-toggle"
                onClick={() => setOpen3(!open3)}
                style={{ cursor: "pointer", margin: "1rem 0" }}
              >
                {open3 ?  <img className="home-info4-box-imgbox-collapse-toggle-img" src={ToggleUp}  /> : <img className="home-info4-box-imgbox-collapse-toggle-img" src={ToggleDown} />}
              </div>

              {/* ⬇️ Collapse content */}
              {open3 && (
                <div className="home-info4-box-imgbox-collapse-content">
                  <p className="home-info4-box-imgbox-collapse-content-p">
                  白之家教會位於日本沖繩，由伊藤嘉子牧師創立。她原為靜岡縣的美容師，回應神的呼召後移居沖繩，投身福音工作，致力於連結日本各地教會，成為許多信徒的屬靈祝福。
                  白之家教會與旌旗教會擁有超過15年的友誼，彼此扶持、攜手同行。這段如姊妹教會般的深厚關係，讓雙方在活動與信仰交流中持續激勵彼此。
                  </p>
                </div>
              )}

              <img className="home-info4-box-imgbox-img2" src={Line} />
            </div>
          </div>
        </div>
      
        <div className="home-info5" style={{display:"none"}}>
          <div className="home-info5-box">
            <div className="home-info5-box-title">
              <h1 className="home-info5-box-title-h1">系列活動介紹</h1>
              <img className="home-info5-box-title-svg" src={Obj2} />
            </div>

            <div className="home-info5-box-infobox">
              <div className="home-info5-box-infobox-box">
                <img className="home-info5-box-infobox-box-svg" src={Month2} />
                <h3 className="home-info5-box-infobox-box-h3">
                  旌旗30紀念周邊商品<br></br>搶先預購
                </h3>
              </div>
              <h3 className="home-info5-box-infobox-h3">
                T-Shirt、手機掛繩、掛飾
              </h3>
              <h3 className="home-info5-box-infobox-h3">
                紀念杯組、保溫保冰杯等
              </h3>
            </div>

            <div
              className="home-info5-box-infobox"
              style={{ marginTop: "3rem" }}
            >
              <div className="home-info5-box-infobox-box">
                <img className="home-info5-box-infobox-box-svg" src={Month4} />
                <h3 className="home-info5-box-infobox-box-h3">
                  線上故事牆<br></br>旌旗時光印記
                </h3>
              </div>
              <h3 className="home-info5-box-infobox-h3">重溫教會的成長點滴</h3>
              <h3 className="home-info5-box-infobox-h3">數算上帝奇妙恩典</h3>
            </div>

            <div
              className="home-info5-box-infobox"
              style={{ marginTop: "3rem" }}
            >
              <div className="home-info5-box-infobox-box">
                <img className="home-info5-box-infobox-box-svg" src={Month5} />
                <h3 className="home-info5-box-infobox-box-h3">
                  紀念專輯數位發行
                </h3>
              </div>
              <h3
                className="home-info5-box-infobox-h3"
                style={{ transform: "translate(0,-3rem)" }}
              >
                經典重釋與全新創作完整收錄!唱出新世代敬拜
              </h3>
            </div>

            <div
              className="home-info5-box-infobox"
              style={{ marginTop: "3rem", transform: "translate(0,-3rem)" }}
            >
              <div className="home-info5-box-infobox-box">
                <img className="home-info5-box-infobox-box-svg" src={Month6} />
                <h3 className="home-info5-box-infobox-box-h3">
                  旌旗30週年特展<br></br>
                  貝克博士講座<br></br>
                  旌旗30週年慶特會<br></br>
                  旌旗30週年慶主日
                </h3>
              </div>
              <h3 className="home-info5-box-infobox-h3">
                承接使命：宣教、集結、傳承
              </h3>
            </div>

            <img className="home-info5-box-svg" src={More} />
          </div>
        </div>

        <div className="home-info7">
          <div className="home-info7-box">
            <div className="home-info7-box-title">
              <div className="home-info7-box-title-box">
                <h1 className="home-info7-box-title-box-h1">
                  旌旗30
                  <img className="home-info7-box-title-box-h1-svg" src={TimeDead} style={{transform: "translate(1rem, 1.5rem)",height:"3rem"}}/>
                </h1>
                
                <h1 className="home-info7-box-title-box-h1">
                  限量周邊商品
                  <img className="home-info7-box-title-box-h1-svg" src={Obj2} style={{transform: "translate(1rem, 0.5rem)",height:"5rem",width:"5rem"}}/>
                </h1>
                <img className="home-info7-box-title-box-svg" src={FlashLine} />

                <div
                  className="home-info7-box-subTitle"
                >
                  <h3 className="home-info7-box-subTitle-h2">三十週年的限定收藏</h3>
                  <h3 className="home-info7-box-subTitle-h2">
                    為屬靈旅程添上珍貴印記!
                  </h3>
                  <h4 className="home-info7-box-subTitle-h4" style={{marginTop:"2rem"}}>
                    現場有少量限定商品
                  </h4>
                </div>
              
              </div>

          

            </div>
          </div>

          <div className="home-info7-photobox">
            <div className="home-info7-photobox-photogroup">
              <img
                className="home-info7-photobox-photogroup-item"
                src={Shop1}
              />
              <img
                className="home-info7-photobox-photogroup-item"
                src={Shop2}
              />
              <img
                className="home-info7-photobox-photogroup-item"
                src={Shop3}
              />
            </div>
            <div className="home-info7-photobox-photogroup">
              <img
                className="home-info7-photobox-photogroup-item"
                src={Shop4}
              />
              <img
                className="home-info7-photobox-photogroup-item"
                src={Shop5}
              />
              <img
                className="home-info7-photobox-photogroup-item"
                src={Shop6}
              />
            </div>
          </div>

          <div
            className="home-info7-box"
            style={{
              marginTop: "1rem",
            }}
          >
           

            {/* <div className="home-info7-box-textbox">
              <div className="home-info7-box-textbox-itemL">預購期間 | </div>
              <div className="home-info7-box-textbox-itemR">
                2/8(六) - 3/16(日)
              </div>
            </div> */}

            <div className="home-info7-box-textbox">
              <div className="home-info7-box-textbox-itemL">
        
                <img
                  className="home-info7-box-textbox-itemR-svg"
                  onClick={ShopClick}
                  style={{
                    margin: "2rem 0 0rem 1rem",
                    transform: "translate(-2rem,0)",
                    height:"5rem"
                  }}
                  src={ShopLink}
                />
              </div>
              {/* <div className="home-info7-box-textbox-itemR">
                下方點擊進入周邊網站，
                <br></br>按照介面流程完成商品挑選預購
               
              </div> */}
            </div>

            {/* <div className="home-info7-box-textbox">
              <div className="home-info7-box-textbox-itemL">預購好處 | </div>
              <div className="home-info7-box-textbox-itemR">
                折扣優惠：
                <br></br>線上預購期間專屬折扣，
                <br></br>還有滿額贈禮等你來拿!
                <br></br>
                <br></br>絕版商品：
                <br></br>預購期後，商品僅限現場販售，售完即絕版，機會不容錯過！
              </div>
            </div> */}


          </div>
        </div>


        <div className="home-info8">
              <img className="home-info8-mainpng" src={Album} ></img>
              <h4 className="home-info8-content">
                家的聲音，記錄我們與神同行的足跡；<br/>
                家的記憶，見證祂信實的恩典不曾止息。<br/>
                <br/>
                三十年裡，每一聲敬拜、每一次回應，<br/>
                都刻畫著天父的同在、使命與傳承。<br/>
                <br/>
                如果你也曾在敬拜中被父的愛得著—<br/>
                相信你也聽得見這張專輯裡的記憶。<br/>
              </h4>

              <h4 className="home-info8-subcontent">
                [2025.05.05 各大串流 數位發行]
              </h4>

              <img className="home-info8-svg" src={AlbumIG} onClick={BMIG} />
        </div>

        <div className="home-info6">
          <img
            src={Info6}
            alt="Background"
            className="home-info6-background-img"
            loading="lazy"
          />
          <div className="home-info6-box">
            <div className="home-info6-box-Sbox">
              <img
                className="home-info6-box-Sbox-svg"
                onClick={IGClick}
                src={SIG}
                style={{ transform: "translate(4rem,0)" }}
              />
              <img
                className="home-info6-box-Sbox-svg"
                src={SFB}
                onClick={FBClick}
              />
              <img
                className="home-info6-box-Sbox-svg"
                onClick={LineClick}
                src={SLine}
                style={{ transform: "translate(-4rem,0)" }}
              />
            </div>
            <h5 className="home-info6-box-h5" style={{ marginTop: "2rem" }}>
              台中市南屯區文心南五路三段160號
            </h5>
            <h5 className="home-info6-box-h5"  style={{ marginBottom: "5rem" }}>04-2258-4446</h5>
          </div>
        </div>

        <div className="top-button" onClick={scrollToTop}>
          <img src={Top} alt="Top" />
        </div>
      </div>
    </section>
  );
};

export default Home;
