
import css from './Summary.module.css'
import MyImg from '../cropedIMG.jpg';

export function Summary(){
    return (
        <>
            <div className={css.summaryDiv} id='summaryDiv'>
                <summary className={css.summary}>
                    build and maintain websites and web applications, using  design tools, programming languages such as HTML, CSS, JavaScript and React JS to meet both client and end-user requirements .
                </summary>
            </div>
        </>
    )
}
export function Author(){
    return (
        <>
            <div className={css.authorDiv} id='authorDiv'>
                <div className={css.author}>
                    <p className={css.author1}>Vignesh</p>
                </div>
                <img src={MyImg} id={css.myImage} alt='portfolioImg' />

            </div>
        </>
    )
}
export function SiteDiv(){


  return (
    <>
      <div className={css.siteHead} id="siteDiv">
        <h1 className={css.siteTopic}>My Sites</h1>
        <div className={css.sites}>

        {/* style={{"height ": siteHeight}} */}
          <a className={`${css.site}`} href="https://vignesha399.github.io/Analog_Clock/">
            <div>
              <div className={`${css.siteChild} ${css.divChild}`}>
                Analog site : anolog clock was created simply
              </div>
              <p className={`${css.siteChild} ${css.aChild}`}>
                Analog Clock
              </p>
            </div>
          </a>
          <a className={css.site} href="https://vignesha399.github.io/Simple_Site/">
            <div>

              <div className={`${css.siteChild} ${css.divChild}`}>Site : Food delivery application, have all the UI components, sample template for that appliation.</div>
              <p className={`${css.siteChild} ${css.aChild}`} >
                Simple Site</p>
            </div>
          </a>
          <a className={css.site} href="https://vignesha399.github.io/GroceryList/">
            <div>
              <p className={`${css.siteChild} ${css.divChild}`}>GroceryList site : Make the online grocery list, login page was added using JWT, use <i><b>"fs"</b></i> and <i><b>"12345"</b></i></p>
              <p className={`${css.siteChild} ${css.aChild}`}>Grocery List</p>
            </div>
          </a>

        </div>
      </div>
    </>
  );
}
