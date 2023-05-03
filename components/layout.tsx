import { useRouter } from 'next/router';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  const router = useRouter();

  // if (router.pathname === '/404') {
  //   return (
  //     <div id="container">
  //       <div className="wrapper">{props.children}</div>
  //     </div>
  //   );
  // }

  return (
    <div id="container">
      <div className="wrapper">
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
