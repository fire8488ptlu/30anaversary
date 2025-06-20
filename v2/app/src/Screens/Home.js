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
import ToggleDown from "../Img/ToggleDown.svg";
import ToggleUp from "../Img/ToggleUp.svg";
import TimeDead from "../Img/TimeDead.png";
import Album from "../Img/Album.png";
import AlbumIG from "../Img/AlbumIG.png";
import Line1 from "../Img/Line1.svg";
import Info10_model1 from "../Img/Info10_model1.png";
import Info10_model2_car from "../Img/Info10_model2_car.png";
import Info10_model2_bus from "../Img/Info10_model2_bus.png";
import Info10_model2_p from "../Img/Info10_model2_p.png";
import Info10_model2_arrowUp from "../Img/Info10_model2_arrowUp.png";
import Info10_model2_line from "../Img/Info10_model2_line.png";

import Info11_title_img from "../Img/Info11_title_img.png";
import Info11_subtitle_imgUp from "../Img/Info11_subtitle_imgUp.png";

import Info11_appstore from "../Img/Info11_appstore.png";
import Info11_googleplay from "../Img/Info11_googleplay.png";

import Info11_fork from "../Img/Info11_fork.png";
import Info11_hambuger from "../Img/Info11_hambuger.png";
import Info11_line from "../Img/Info11_line.png";

import Info12_line from "../Img/Info12_Line.png";
import Info12_bank from "../Img/Info12_bank.png";
import Info12_btn from "../Img/Info12_Btn.png";

import Info13_dot from "../Img/Info13_Dot.png";
import Info13_img1 from "../Img/Info13_img1.png";
import Info13_img2 from "../Img/Info13_img2.png";

import Info7_IMG from "../Img/Info7_IMG.png";
import Info7_shop from "../Img/Info7_shop.png";
import Info7_shopOnline from "../Img/Info7_shopOnline.png";
import Info7_refund from "../Img/Info7_refund.png";
import Info7_bannerCulture from "../Img/Info7_bannerCulture.png";

//Info7_bannerCulture.png;

//Info10_model2_bus.png
//Info10_model2_p.png

const Home = () => {
  const scrollToTop = () => {
    const section = document.getElementById("home-info1");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const baseHeight = 135; // rem
  const expandPerBox = 30; // rem

  const [info4Height, setInfo4Height] = useState(`${baseHeight}rem`);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const Info10baseHeight = 65; // rem
  const Info10expandPerBox = 22.5; // rem
  const [Info10Height, setInfo10Height] = useState(`${Info10baseHeight}rem`);
  const [Info10open1, setInfo10Open1] = useState(false);
  const [Info10open2, setInfo10Open2] = useState(false);
  const [Info10open3, setInfo10Open3] = useState(false);

  const Info11baseHeight = 22.5; // rem
  const Info11expandPerBox = 165; // rem
  const [Info11Height, setInfo11Height] = useState(`${Info11baseHeight}rem`);
  const [Info11open1, setInfo11Open1] = useState(false);

  useEffect(() => {
    // Count how many boxes are open
    const openCount = [open1, open2, open3].filter(Boolean).length;
    // Update height dynamically
    const newHeight = baseHeight + openCount * expandPerBox;
    setInfo4Height(`${newHeight}rem`);
    //-----Info10

    const openCount10 = [Info10open1, Info10open2, Info10open3].filter(
      Boolean
    ).length;
    // Update height dynamically
    const newHeight10 = Info10baseHeight + openCount10 * Info10expandPerBox;
    setInfo10Height(`${newHeight10}rem`);

    const openCount11 = [Info11open1].filter(Boolean).length;
    // Update height dynamically
    const newHeight11 = Info11baseHeight + openCount11 * Info11expandPerBox;
    setInfo11Height(`${newHeight11}rem`);
  }, [open1, open2, open3, Info10open1, Info10open2, Info10open3, Info11open1]);

  const Googleplay = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=io.livevoice.client&hl=zhTW",
      "_blank"
    ); // Opens Instagram in a new tab
  };

  const AppStore = () => {
    window.open(
      "https://apps.apple.com/tw/app/livevoice/id1457677556",
      "_blank"
    ); // Opens Instagram in a new tab
  };

  const FoodMap = () => {
    window.open("https://maps.app.goo.gl/CRyyG4nYyASuhCfS9", "_blank"); // Opens Instagram in a new tab
  };

  const BannerFoodMap = () => {
    window.open("https://maps.app.goo.gl/TKLggN9xrtC8Qv776", "_blank"); // Opens Instagram in a new tab
  };

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
    window.open("https://www.bannerculture.com", "_blank"); // Opens Instagram in a new tab
  };

  const GivingClick = () => {
    window.open("https://www.bannerch.org/dedication.html", "_blank"); // Opens Instagram in a new tab
  };

  const BMIG = () => {
    window.open("https://www.instagram.com/bannerch.music/", "_blank"); // Opens Instagram in a new tab
  };

  return (
    <section className="home">
      <div className="home-container">
        <div className="home-info1" id="home-info1">
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
                style={{
                  fontFamily: "Hiragino-SansW8",
                  fontSize: "3.5rem",
                  transform: "translate(0,-1rem)",
                }}
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
                style={{
                  fontSize: "1.8rem",
                  transform: "translate(0.25rem,-2.25rem)",
                  fontWeight: "200",
                }}
              >
                台中市烏日區中山路三段1號
              </h3>
            </div>

            <div className="home-info3-box-wbox">
              <div className="home-info3-box-wbox-L">
                <img src={Line1} className="home-info3-box-wbox-L-img" />
              </div>
              <div className="home-info3-box-wbox-R">
                <h1 className="home-info3-box-wbox-R-R1">
                  {" "}
                  全球集結號 | 敬拜特會
                </h1>
                <h1 className="home-info3-box-wbox-R-R2">
                  {" "}
                  10:00-11:30
                  <h4 className="home-info3-box-wbox-R-R2-R">
                    {" "}
                    (09:00開放入場)
                  </h4>
                </h1>
              </div>
            </div>

            <div
              className="home-info3-box-wbox"
              style={{ marginTop: "1.75rem" }}
            >
              <div className="home-info3-box-wbox-L">
                <img src={Line1} className="home-info3-box-wbox-L-img" />
              </div>
              <div className="home-info3-box-wbox-R">
                <h1 className="home-info3-box-wbox-R-R1"> 旗聚時光</h1>
                <h1 className="home-info3-box-wbox-R-R2">
                  {" "}
                  11:30-13:00
                  <h4 className="home-info3-box-wbox-R-R2-R">
                    {" "}
                    (各地土產品嘗+午餐時間(自理))
                  </h4>
                </h1>
              </div>
            </div>

            <div
              className="home-info3-box-wbox"
              style={{ marginTop: "1.75rem" }}
            >
              <div className="home-info3-box-wbox-L">
                <img src={Line1} className="home-info3-box-wbox-L-img" />
              </div>
              <div className="home-info3-box-wbox-R">
                <h1 className="home-info3-box-wbox-R-R1"> 週年慶特會</h1>
                <h1 className="home-info3-box-wbox-R-R2">
                  {" "}
                  14:00-16:30
                  <h4 className="home-info3-box-wbox-R-R2-R">
                    {" "}
                    (13:00開放入場)
                  </h4>
                </h1>
              </div>
            </div>

            <div
              className="home-info3-box-wbox"
              style={{ marginTop: "1.75rem" }}
            >
              <div className="home-info3-box-wbox-L">
                <img src={Line1} className="home-info3-box-wbox-L-img" />
              </div>
              <div className="home-info3-box-wbox-R">
                <h1 className="home-info3-box-wbox-R-R1"> 敬拜不停歇</h1>
                <h1 className="home-info3-box-wbox-R-R2">
                  {" "}
                  16:30-17:30
                  <h4 className="home-info3-box-wbox-R-R2-R"> </h4>
                </h1>
              </div>
            </div>
            {/* 
            <h4 className="home-info3-box-h3--yellow">場次一 09:00</h4>
            <h4 className="home-info3-box-h3--yellow">場次二 14:00</h4>
            <h4 className="home-info3-box-h3--yellow">場次三 18:00</h4> */}

            <div className="home-info3-box-h3box" style={{ display: "none" }}>
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
                display: "none",
              }}
            >
              台中市南屯區文心南五路三段160號
            </h5>
          </div>
        </div>

        <div className="home-info4" style={{ height: info4Height }}>
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
                <img
                  className={
                    open1
                      ? "home-info4-box-imgbox-collapse-toggle-img"
                      : "home-info4-box-imgbox-collapse-toggle-img2"
                  }
                  src={Info10_model2_arrowUp}
                />

                {/* {open1 ? (
                  <img
                    className="home-info4-box-imgbox-collapse-toggle-img"
                    src={ToggleUp}
                  />
                ) : (
                  <img
                    className="home-info4-box-imgbox-collapse-toggle-img2"
                    src={ToggleUp}
                  />
                )} */}
              </div>

              {/* ⬇️ Collapse content */}
              {open1 && (
                <div className="home-info4-box-imgbox-collapse-content">
                  <p className="home-info4-box-imgbox-collapse-content-p">
                    Rich Kao 是五岩教會(Five Stones
                    Church)的創會牧師，擔任主任牧師長達18年。 他與妻子 Memie
                    在2003年移居加拿大溫哥華，創立了五岩教會，並於2022年起透過五岩影響力團隊(Five
                    Stones
                    Impact)專注於植堂事工，在全球重要城市建立具影響力的教會。
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
                <img
                  className={
                    open2
                      ? "home-info4-box-imgbox-collapse-toggle-img"
                      : "home-info4-box-imgbox-collapse-toggle-img2"
                  }
                  src={Info10_model2_arrowUp}
                />
                {/* {open2 ? (
                  <img
                    className="home-info4-box-imgbox-collapse-toggle-img"
                    src={ToggleUp}
                  />
                ) : (
                  <img
                    className="home-info4-box-imgbox-collapse-toggle-img2"
                    src={ToggleUp}
                  />
                )} */}
              </div>

              {/* ⬇️ Collapse content */}
              {open2 && (
                <div className="home-info4-box-imgbox-collapse-content">
                  <p className="home-info4-box-imgbox-collapse-content-p">
                    Dr. Corné J. Bekker（貝克博士）是美國維真大學（Regent
                    University）神學院院長，專注於靈性養成與領導力研究。他的教學風格深入淺出，幫助教會領袖在屬靈生命與使命感上更扎根。
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
                <img
                  className={
                    open3
                      ? "home-info4-box-imgbox-collapse-toggle-img"
                      : "home-info4-box-imgbox-collapse-toggle-img2"
                  }
                  src={Info10_model2_arrowUp}
                />
                {/* {open3 ? (
                  <img
                    className="home-info4-box-imgbox-collapse-toggle-img"
                    src={ToggleUp}
                  />
                ) : (
                  <img
                    className="home-info4-box-imgbox-collapse-toggle-img2"
                    src={ToggleUp}
                  />
                )} */}
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
        {/* -------Info10------ */}
        <div className="home-info10" style={{ height: Info10Height }}>
          <div className="home-info10-model1">
            <img src={Info10_model1} className="home-info10-model1-img" />
          </div>
          <div className="home-info10-model2">
            <div
              className="home-info10-model2-titlebox"
              onClick={() => setInfo10Open1(!Info10open1)}
            >
              <img
                className="home-info10-model2-titlebox-svg1"
                src={Info10_model2_car}
              />
              <h3 className="home-info10-model2-titlebox-h3">汽車自駕</h3>
              <img
                className={
                  Info10open1
                    ? "home-info10-model2-titlebox-svg2"
                    : "home-info10-model2-titlebox-svg2Rotate"
                }
                src={Info10_model2_arrowUp}
              />
            </div>
            {Info10open1 ? (
              <>
                <div className="home-info10-model2-contentbox">
                  <h3 className="home-info10-model2-contentbox-h3">國道一號</h3>
                  <h4 className="home-info10-model2-contentbox-h4">
                    王田交流道 → 中山路三段直行 → <br /> 高鐵東路口即達
                  </h4>
                </div>

                <div className="home-info10-model2-contentbox">
                  <h3 className="home-info10-model2-contentbox-h3">國道三號</h3>
                  <h4 className="home-info10-model2-contentbox-h4">
                    接台74線 → 烏日交流道 → <br /> 環河路三段 → 公園路左轉 →{" "}
                    <br />
                    新興路左轉 → 至高鐵東路口即達
                  </h4>
                </div>

                <img
                  className="home-info10-model2-line"
                  src={Info10_model2_line}
                />
              </>
            ) : (
              ""
            )}
          </div>

          <div className="home-info10-model2">
            <div
              className="home-info10-model2-titlebox"
              onClick={() => setInfo10Open2(!Info10open2)}
            >
              <img
                className="home-info10-model2-titlebox-svg1"
                src={Info10_model2_bus}
              />
              <h3 className="home-info10-model2-titlebox-h3">
                大眾運輸建議路線
              </h3>
              <img
                className={
                  Info10open2
                    ? "home-info10-model2-titlebox-svg2"
                    : "home-info10-model2-titlebox-svg2Rotate"
                }
                src={Info10_model2_arrowUp}
              />
            </div>

            {Info10open2 ? (
              <>
                <div className="home-info10-model2-contentbox">
                  <h3 className="home-info10-model2-contentbox-h3">
                    高鐵、捷運綠線
                  </h3>
                  <h4 className="home-info10-model2-contentbox-h4">
                    經連通道至台鐵新烏日站
                    <br /> → 步行約10分鐘
                  </h4>
                </div>

                <div className="home-info10-model2-contentbox">
                  <h3 className="home-info10-model2-contentbox-h3">台鐵</h3>
                  <h4 className="home-info10-model2-contentbox-h4">
                    新烏日站 → 步行約10分鐘
                  </h4>
                </div>

                <div className="home-info10-model2-contentbox">
                  <h3 className="home-info10-model2-contentbox-h3">公車</h3>
                  <h4 className="home-info10-model2-contentbox-h4">
                    鄰近站牌 : <br />
                    台中國際展覽館(烏厝巷)
                    <br />
                    三和里1
                    <br />
                    烏日國中
                  </h4>
                </div>

                <img
                  className="home-info10-model2-line"
                  src={Info10_model2_line}
                />
              </>
            ) : (
              ""
            )}
          </div>

          <div className="home-info10-model2">
            <div
              className="home-info10-model2-titlebox"
              onClick={() => setInfo10Open3(!Info10open3)}
            >
              <img
                className="home-info10-model2-titlebox-svg1"
                src={Info10_model2_p}
              />
              <h3 className="home-info10-model2-titlebox-h3">周邊停車場</h3>
              <img
                className={
                  Info10open3
                    ? "home-info10-model2-titlebox-svg2"
                    : "home-info10-model2-titlebox-svg2Rotate"
                }
                src={Info10_model2_arrowUp}
              />
            </div>
            {Info10open3 ? (
              <>
                <div className="home-info10-model2-contentbox">
                  <h3 className="home-info10-model2-contentbox-h3">
                    五都日出停車場
                  </h3>
                  <h4 className="home-info10-model2-contentbox-h4">
                    於台中國際展覽館正對向
                  </h4>
                </div>

                <div className="home-info10-model2-contentbox">
                  <h3 className="home-info10-model2-contentbox-h3">
                    城市車旅停車場
                  </h3>
                  <h4 className="home-info10-model2-contentbox-h4">
                    與會場同樣位於中山路三段
                    <br />
                    步行兩分鐘，歡迎多加利用
                  </h4>
                </div>

                <img
                  className="home-info10-model2-line"
                  src={Info10_model2_line}
                />
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* -------Info11------ */}
        <div className="home-info11" style={{ height: Info11Height }}>
          <div className="home-info11-title">
            <h1 className="home-info11-title-h1">行前通知</h1>
            <img className="home-info11-title-img" src={Info11_title_img} />
          </div>

          <div
            className="home-info11-subtitle"
            onClick={() => setInfo11Open1(!Info11open1)}
          >
            <h3 className="home-info11-subtitle-h3">展開查看詳細行前說明</h3>
            <img
              className={
                Info11open1
                  ? "home-info11-subtitle-img"
                  : "home-info11-subtitle-imgRotate"
              }
              // className="home-info11-subtitle-img"
              src={Info11_subtitle_imgUp}
            />
          </div>

          {/* Content */}
          {Info11open1 ? (
            <>
              <div className="home-info11-contentbox">
                <h4 className="home-info11-contentbox-L">1.</h4>
                <div className="home-info11-contentbox-R">
                  因活動人數眾多，建議您提早出發，預留充足時間，以避免人潮與交通壅塞
                  。
                </div>
              </div>

              <div className="home-info11-contentbox">
                <h4 className="home-info11-contentbox-L">2.</h4>
                <div className="home-info11-contentbox-R">
                  請自備飲用水、筆、薄外套、口罩、雨具與其他個人物品。
                </div>
              </div>

              <div className="home-info11-contentbox">
                <h4 className="home-info11-contentbox-L">3.</h4>
                <div className="home-info11-contentbox-R">
                  本次活動不設特約停車場，請參考交通資訊頁面上的周邊停車場資訊。
                </div>
              </div>

              <div className="home-info11-contentbox">
                <h4 className="home-info11-contentbox-L">4.</h4>
                <div className="home-info11-contentbox-R">
                  活動現場設有親子區與兒童遊樂設備，但不提供托育服務，敬請家長親自陪同並留意安全。
                </div>
              </div>

              <div className="home-info11-contentbox">
                <h4 className="home-info11-contentbox-L">5.</h4>
                <div className="home-info11-contentbox-R">
                  由於場內音量較高，建議為嬰幼兒準備隔音耳罩。
                </div>
              </div>

              <div className="home-info11-contentbox">
                <h4 className="home-info11-contentbox-L">6.</h4>
                <div className="home-info11-contentbox-R">
                  主會堂內有規劃關懷區及親子區，提供給長輩、行動不便者或家長陪同七歲以下兒童使用。
                </div>
              </div>

              <div className="home-info11-contentbox">
                <h4 className="home-info11-contentbox-L">7.</h4>
                <div className="home-info11-contentbox-R">
                  為維護主會堂內整潔及舒適環境，請勿攜帶食物和未封蓋飲料入場;活動現場禁止攜帶寵物(導盲犬除外)，敬請理解與配合
                </div>
              </div>

              <div className="home-info11-contentbox">
                <h4 className="home-info11-contentbox-L">8.</h4>
                <div className="home-info11-contentbox-R">
                  活動場地寬廣、人潮眾多，敬請留意妥善保管個人財物，避免攜帶貴重物品。請家長務必隨時留意孩子動向，避免孩童走失或發生危險。
                </div>
              </div>

              <div className="home-info11-contentbox">
                <h4 className="home-info11-contentbox-L">9.</h4>
                <div className="home-info11-contentbox-R">
                  為維護安全，場地不開放插座使用，請自行攜帶行動電源。
                </div>
              </div>

              <div className="home-info11-contentbox">
                <h4 className="home-info11-contentbox-L">10.</h4>
                <div className="home-info11-contentbox-R">
                  英文翻譯服務:請自備可上網之行動裝置(手機或平板電腦)與個人耳機，並事先下載翻譯應用程式LiveVoice。當天若需借用耳機，請洽服務中心。
                  <div className="home-info11-contentbox-R-iconbox">
                    <img
                      className="home-info11-contentbox-R-iconbox-item"
                      onClick={Googleplay}
                      src={Info11_googleplay}
                    />
                    <img
                      className="home-info11-contentbox-R-iconbox-item"
                      onClick={AppStore}
                      src={Info11_appstore}
                    />
                  </div>
                </div>
              </div>

              <div className="home-info11-contentbox">
                <h4 className="home-info11-contentbox-L">11.</h4>
                <div className="home-info11-contentbox-R">
                  飲食需求:會場將有來自全球各堂點的特色美食分享與豐富美食市集，歡迎大家自由選購、享受團契時光。此外，鄰近活動會場及教會附近我們也整理美食地圖供大家輕鬆用餐。
                  <div className="home-info11-contentbox-R-imgbox">
                    <img
                      className="home-info11-contentbox-R-imgbox-item"
                      onClick={FoodMap}
                      src={Info11_fork}
                    />
                    <img
                      className="home-info11-contentbox-R-imgbox-item"
                      onClick={BannerFoodMap}
                      src={Info11_hambuger}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          <img
            className="home-info11-line"
            src={Info11_line}
            style={{ marginTop: "4rem" }}
          />
        </div>
        {/* ------------------- */}
        <div className="home-info7">
          <div className="home-info7-box">
            <div className="home-info7-box-title">
              <div className="home-info7-box-title-box">
                <h1 className="home-info7-box-title-box-h1">旌旗30</h1>

                <h1 className="home-info7-box-title-box-h1">
                  限量周邊商品
                  <img
                    className="home-info7-box-title-box-h1-svg"
                    src={Obj2}
                    style={{
                      transform: "translate(1rem, 0.5rem)",
                      height: "5rem",
                      width: "5rem",
                    }}
                  />
                </h1>
                <img className="home-info7-box-title-box-svg" src={FlashLine} />

                <div className="home-info7-box-subTitle">
                  <h3 className="home-info7-box-subTitle-h2">
                    三十週年的限定收藏
                  </h3>
                  <h3 className="home-info7-box-subTitle-h2">
                    為屬靈旅程添上珍貴印記！
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="home-info7-photobox">
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
          </div> */}
          <div className="home-info7-IMG">
            <img className="home-info7-IMG-item" src={Info7_IMG} />
          </div>

          <div className="home-info7-contentbox">
            <img
              className="home-info7-contentbox-img"
              src={Info7_shop}
              style={{ marginTop: "4rem" }}
            />
            <h2
              className="home-info7-contentbox-h2"
              style={{ marginTop: "0.5rem" }}
            >
              6/21活動現場優惠
            </h2>
            <div
              className="home-info7-contentbox-textbox"
              style={{ marginTop: "0.5rem" }}
            >
              <h3 className="home-info7-contentbox-textbox-L">1.</h3>
              <h3 className="home-info7-contentbox-textbox-R">
                結帳滿2000元現折200元
              </h3>
            </div>

            <div
              className="home-info7-contentbox-textbox "
              style={{ marginTop: "0.5rem" }}
            >
              <h3 className="home-info7-contentbox-textbox-L">2.</h3>
              <h3 className="home-info7-contentbox-textbox-R">
                滿2000元享扭蛋機乙次
                <h4 className="home-info7-contentbox-textbox-R-h4">
                  (眾多獎項 : 小禮品、折價券等優惠)
                </h4>
              </h3>
            </div>

            <h2
              className="home-info7-contentbox-h2"
              style={{ marginTop: "4rem" }}
            >
              歡迎前往活動攤位參觀購買
              <br />
              現場提供紀念T尺寸套量
            </h2>

            <img
              className="home-info7-contentbox-img"
              src={Info7_refund}
              style={{ marginTop: "1rem", width: "100%" }}
            />

            <img
              className="home-info7-contentbox-img"
              src={Info7_shopOnline}
              style={{ marginTop: "4rem" }}
            />
            <h2
              className="home-info7-contentbox-h2"
              style={{
                marginTop: "0.5rem",
                fontSize: "1.9rem",
                fontWeight: "500",
                fontFamily: "sans-serif;",
              }}
            >
              省去現場排隊！
              <br />
              線上下單，取貨超便利！ <br />
              加入旌旗文化Line@，並綁定會員
              <br />
              贈官網$100元折價券！
            </h2>

            <img
              className="home-info7-contentbox-img"
              onClick={ShopClick}
              src={Info7_bannerCulture}
              style={{
                marginTop: "4rem",
                width: "80%",
                animation: "zoomInOut 1s infinite alternate ease-in-out",
              }}
            />
          </div>
        </div>

        <div className="home-info12">
          <div className="home-info12-box">
            <div className="home-info12-box-titleBox">
              <h1 className="home-info12-box-titleBox-h1"> 旌旗三十再出發</h1>
              <img className="home-info12-box-titleBox-img" src={Info12_line} />
            </div>
            <div
              className="home-info12-box-content"
              style={{ marginTop: "1rem" }}
            >
              <h3>
                回到起初對神的熱情
                <br />
                再次勇敢回應祂對這個家的呼召
                <br />
                <br />
                ｢旌旗30再出發｣奉獻專案
                <br />
                以信心回應異象
                <br />
                共同建造屬靈的未來
              </h3>
            </div>
            <img
              className="home-info12-box-IMG"
              src={Info12_bank}
              style={{ marginTop: "2rem", transform: "translateX(-0.2rem)" }}
            />
            <div className="home-info12-box-btnbox">
              <img
                className="home-info12-box-btnbox-btn"
                src={Info12_btn}
                onClick={GivingClick}
              />
            </div>

            <div
              className="home-info12-box-content"
              style={{ marginTop: "1rem" }}
            >
              <h3 style={{ fontSize: "2rem", color: "#fecd00" }}>
                <br />
                填寫線上奉獻資料時 ，
                <br />
                請特別注意以下項目：
              </h3>

              <h3 style={{ fontSize: "1.5rem", fontWeight: "100" }}>
                <br />
                -奉獻項目請選擇｢宣教植堂奉獻｣ <br />
                -奉獻歸屬堂點請選｢台中旌旗教會｣ <br />
                -開立單次收據欄請備註｢30週年｣ <br />
              </h3>
            </div>
          </div>
        </div>

        {/* ---------------------------- */}

        <div className="home-info5" style={{ display: "none" }}>
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
                經典重釋與全新創作完整收錄！唱出新世代敬拜
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

        <div className="home-info8">
          <img className="home-info8-mainpng" src={Album}></img>
          <h4 className="home-info8-content">
            家的聲音，記錄我們與神同行的足跡；
            <br />
            家的記憶，見證祂信實的恩典不曾止息。
            <br />
            <br />
            三十年裡，每一聲敬拜、每一次回應，
            <br />
            都刻畫著天父的同在、使命與傳承。
            <br />
            <br />
            如果你也曾在敬拜中被父的愛得著—
            <br />
            相信你也聽得見這張專輯裡的記憶。
            <br />
          </h4>

          <h4 className="home-info8-subcontent">
            [2025.05.05 各大串流 數位發行]
          </h4>

          <img className="home-info8-svg" src={AlbumIG} onClick={BMIG} />
        </div>

        <div className="home-info13">
          <div className="home-info13-box-title">
            <div className="home-info13-box-title-box">
              <h1 className="home-info13-box-title-box-h1">旌旗教會</h1>

              <h1 className="home-info13-box-title-box-h1">
                30週年展覽
                <img
                  className="home-info13-box-title-box-h1-svg"
                  src={Info13_dot}
                  style={{
                    transform: "translate(1.5rem, 1.75rem)",
                    height: "3rem",
                    width: "3rem",
                  }}
                />
              </h1>
              <img className="home-info13-box-title-box-svg" src={FlashLine} />

              <div className="home-info13-box-subTitle">
                <h3
                  className="home-info13-box-subTitle-h2"
                  style={{ marginTop: "2rem" }}
                >
                  從幾個家庭的禱告出發
                  <br />
                  三十年來奔保、建立、拓展
                  <br />
                  一步步回應神的呼召
                  <br />
                  <br />
                  回首過去的足跡 <br />
                  我們所經歷的一切 <br />
                  都在祂的藍圖之中 <br />
                  祂的心意也在 <br />
                  一代代人身上被成全 <br />
                </h3>
                {/* <h3 className="home-info13-box-subTitle-h2">
                  為屬靈旅程添上珍貴印記！
                </h3> */}
              </div>

              <img
                className="home-info13-box-svg"
                src={Info13_img1}
                style={{ marginTop: "3rem" }}
              />
              <h3 className="home-info13-box-h3">
                06.07(Sat)-06.29(Sun) 週末開放
                <br />
                <br />
                週六 10:00-21:00 <br />
                週日 10:00-17:00
                <br />
                <br />
              </h3>
              <h3
                className="home-info13-box-h3"
                style={{ color: "white", letterSpacing: "2px" }}
              >
                貝克博士講座期間
              </h3>
              <h3 className="home-info13-box-h3">
                <br />
                06.19(Thu)-06.20(Fri)
                <br />
                9:00-16:00
              </h3>

              <img
                className="home-info13-box-svg"
                src={Info13_img2}
                style={{ marginTop: "3rem" }}
              />
              <h3 className="home-info13-box-h3">台中旌旗教會 多功能教室三</h3>
            </div>
          </div>
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
            <h5 className="home-info6-box-h5" style={{ marginBottom: "5rem" }}>
              04-2258-4446
            </h5>
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
