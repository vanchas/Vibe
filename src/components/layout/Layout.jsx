import Header from '../header/Header';
import s from './layout.module.scss';

const Layout = ({ children }) => (<>
  <div className={s.layout}>
    <div className={s.layout_content}>
      <header>
        <Header />
      </header>
      <main className={s.layout_main_block}>
        {children}
      </main>
    </div>
  </div>
</>);

export default Layout;
