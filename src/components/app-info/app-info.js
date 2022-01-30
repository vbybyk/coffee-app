import LogoBlack from './beans-logo-black';

import './app-info.css';

const Appinfo = (props) => {
  return(
    <div>
      <div className="info-wrapper">
        <div className="left-block">
          <img className='coffee-info-img' src="https://s3-alpha-sig.figma.com/img/5d36/bc1d/c62d688efa6a27fd24144c2bbf0a6f85?Expires=1644192000&Signature=BAMdkbVZ6kUgoq-7uaeEKSDyv6TYMmx2cJl9tHIxAhcBxC6WY5Y1opqYaPEj1OKwYwanE5L~yxlqi3Cj2Mxc1zL~occ-qeXAkRm~VB7pm5i6u6zyF6I6C2ZRlq8mzhLLg3NkY39rmAFPJqJTkeUt5WuvwbNENf7aDAUkYgNvV5A~p8tfX3-WLhTQVnJINNRo9DTileWAI6DWxPyTfKW0Kfdw20Owb4kx3Vn4PJuosyKuY1yL-gGqLzDpLH8lQ7zqExt6BB~AB8ZS14Pw8G1JGkQHc7Dvk-T2tye2dWWHV6QrhNj74VjHpbTbQ1xt21RZaQezPvDIYjC5hgjTOr2RdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="girl is drinking coffee" />
        </div>
        <div className="right-block">
          <h2>About our beans</h2>
          <div className="logo-black">
            <LogoBlack/>
          </div>
          <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br></br>
          <br></br>
          Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
          As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
        </div>
      </div>
      <div className="line">
        <svg width="240" height="1" viewBox="0 0 240 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="240" y2="0.5" stroke="black"/>
      </svg>
      </div>
    </div>
  )
}

export default Appinfo;